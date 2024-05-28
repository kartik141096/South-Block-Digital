import { Component } from '@angular/core';
import { HeaderComponent } from '../../common/header/header.component';
import { SidebarComponent } from '../../common/sidebar/sidebar.component';
import { ApiService } from '../../../api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import 'bootstrap';
import { ModalService } from '../../../modal.service';


export interface Category {
  category_id: string;
  category_name: string;
  is_active: number;
  slaves: Subcategory[];
}

export interface Subcategory {
  subcategory_id: string;
  subcategory_name: string;
  is_active: string;
}

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, CommonModule, FormsModule, RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})

export class CategoryComponent {

  category_data:Category[][] = [];
  checkboxValues: boolean[] = [];

  constructor(protected ApiService: ApiService, private router: Router, private route: ActivatedRoute, private modalService: ModalService) {

    this.ApiService.get_category().subscribe(data => {
      
      this.category_data = data;
      this.checkboxValues = new Array(this.category_data.length).fill(false);

    }, error => {
      console.error(error);
    });
  }
  
  is_active(id: string) {

    const category_id = parseInt(id)-1;

    if(this.category_data[category_id][0]['is_active'] == 1)
    {
      this.category_data[category_id][0]['is_active'] = 0
    }
    else
    {
      this.category_data[category_id][0]['is_active'] = 1
    }
    
    const data  = {
                    id:id,
                    is_active : this.category_data[category_id][0]['is_active']
                  } 
    
    this.ApiService.update_category(data).subscribe();

  }

  delete_category(id: string) {
    const categoryIndex = this.category_data.findIndex(category => category[0].category_id === id);
    
    if (categoryIndex !== -1) {
        const data = {
            id: id,
            is_deleted: 1
        };

        this.ApiService.update_category(data).subscribe(() => {

            this.category_data.splice(categoryIndex, 1);

        }, error => {
            console.error(error);
        });
    } else {
        console.error('Category not found');
    }
  }

  popup(){
    $('#inputPopup').modal('show'); 
  }

  addCategory(){
    var categoryName = $('#categoryName').val();
    var data = {
      name : categoryName
    }
    this.ApiService.add_category(data).subscribe((id) => {

      $('#inputPopup').modal('hide'); 
      this.modalService.openModal('Category successfully created');
      setTimeout(function() {
        //your code to be executed after 1 second
        window.location.reload();
      }, 3000);
  }, error => {
      console.error(error);
  });
  }

}
