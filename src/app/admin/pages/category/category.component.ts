import { Component } from '@angular/core';
import { HeaderComponent } from '../../common/header/header.component';
import { SidebarComponent } from '../../common/sidebar/sidebar.component';
import { ApiService } from '../../../api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';




export interface Category {
  category_id: string;
  category_name: string;
  is_active: string;
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
  imports: [SidebarComponent, HeaderComponent, CommonModule, FormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  category_data:Category[][] = [];
  checkboxValues: boolean[] = [];
  
  
  
  constructor(protected ApiService: ApiService) {

    this.category_data.forEach(() => {
      this.checkboxValues.push(false);
    });
  }
  





  update(id: string) {
    console.log("Clicked category ID:", id);
  }
  delete(id: string) {
    console.log("Clicked category ID:", id);
  }
  is_active(id: string, index:number) {
    const isChecked = !this.checkboxValues[index];
    console.log("Checkbox value:", isChecked);
    console.log("Clicked category ID:", id , status);
  }
  toggleCheckbox(checked: boolean, index: number) {
    this.checkboxValues[index] = checked;
  }
  

  ngOnInit(): void {

    this.ApiService.get_category().subscribe(data => {
      
      this.category_data = data;
      this.checkboxValues = new Array(this.category_data.length).fill(false);
    }, error => {
      console.error(error);
    });


  }
}
