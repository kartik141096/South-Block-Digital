import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeaderComponent } from '../../common/header/header.component';
import { SidebarComponent } from '../../common/sidebar/sidebar.component';
import { ApiService } from '../../../api.service';
import { CommonModule } from '@angular/common';
import 'bootstrap';
import { ModalService } from '../../../modal.service';

export interface Category {
  category_id: string;
  category_name: string;
  is_active: number;
  is_parent: number;
  slaves: Subcategory[];
}

export interface Subcategory {
  subcategory_id: string;
  subcategory_name: string;
  is_active: number;
}

@Component({
  selector: 'app-manage-category',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, RouterLink, CommonModule],
  templateUrl: './manage-category.component.html',
  styleUrl: './manage-category.component.css'
})

export class ManageCategoryComponent {
  
  category_data:Category[][] = [];
  checkboxValues: boolean[] = [];
  categoryId: number;
  
  constructor(private route: ActivatedRoute, private ApiService:ApiService, private modalService: ModalService) {
    
    this.ApiService.get_category().subscribe(data => {
      this.category_data = data;
      this.checkboxValues = new Array(this.category_data.length).fill(false);
      // console.log(this.checkboxValues)

    }, error => {
      console.error(error);
    });

    this.categoryId = 0;

    this.route.params.subscribe(params => {
      this.categoryId = params['id']-1;
      console.log('category ID:', this.categoryId);
    });

  }

  is_active_subcategory(id: string) {

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
                    is_active : !this.category_data[category_id][0]['is_active']
                  } 
    
    this.ApiService.update_sub_category(data).subscribe();

  }

  delete_sub_category(id: string, cid: string) {
    const categoryId = parseInt(cid);
    const category = this.category_data[categoryId-1];
    // console.log(this.category_data)
    console.log(categoryId)
    
    console.log(category)
    if (category && Array.isArray(category[0].slaves)) {
        const subcategoryIndex = category[0].slaves.findIndex(subcategory => subcategory.subcategory_id === id);
        
        if (subcategoryIndex !== -1) {
            const data = {
                id: id,
                is_deleted: 1
            };

            this.ApiService.update_sub_category(data).subscribe(() => {
                // Remove the subcategory from the 'slaves' array of the corresponding category
                category[0].slaves.splice(subcategoryIndex, 1);
            }, error => {
                console.error(error);
            });
        } else {
            console.error('Subcategory not found');
        }
    } else {
        console.error('Category or slaves not found or not an array');
    }
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

  is_parent(id: string) {

    const category_id = parseInt(id)-1;

    if(this.category_data[category_id][0]['is_parent'] == 1)
    {
      this.category_data[category_id][0]['is_parent'] = 0
    }
    else
    {
      this.category_data[category_id][0]['is_parent'] = 1
    }
    
    const data  = {
                    id:id,
                    is_parent : this.category_data[category_id][0]['is_parent']
                  } 
    this.ApiService.update_category(data).subscribe();

  }

  addSubCategory(){

    var subcategoryName = $('#categoryName').val();
    var data = {
      name : subcategoryName,
      category_id : this.categoryId+1
    }
    this.ApiService.add_sub_category(data).subscribe((id) => {

      $('#inputPopup').modal('hide'); 
      this.modalService.openModal('Sub-Category successfully created');
      
      setTimeout(function() {
        window.location.reload();
      }, 3000);

  }, error => {
      console.error(error);
  });
  }

  popup(){
    $('#inputPopup').modal('show'); 
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

}
