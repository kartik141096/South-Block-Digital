import { Component } from '@angular/core';
import { HeaderComponent } from '../../common/header/header.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { SidebarComponent } from '../../common/sidebar/sidebar.component';
import { ApiService } from '../../../api.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';



export interface news{
  id:string,
  img:string,
  heading:string
}

export interface news_tags{
    id:number,
    name:string
}

export interface Category {
  category_id: string;
  category_name: string;
  is_active: number;
  is_parent:number;
  slaves: Subcategory[];
}



export interface Subcategory {
  subcategory_id: string;
  subcategory_name: string;
  is_active: string;
}

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SidebarComponent, CommonModule, RouterLink],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {

  news_list:news[] = [];
  category_data:Category[][] = [];
  news_tag:news_tags[]=[];

  constructor(protected ApiService:ApiService)
  {
    this.ApiService.get_news_list().subscribe(data => {
      
      this.news_list = data;

    }, error => {
      console.error(error);
    });

    this.ApiService.get_category().subscribe(data => {

      this.category_data = data;

    }, error => {
      console.error(error);
    });

    this.ApiService.get_news_tags().subscribe(data => {

      this.news_tag = data;

    }, error => {
      console.error(error);
    });

  }

  filter() {
    var categoryAndSlave = $('#category').val();
    categoryAndSlave = categoryAndSlave?.toString() || ''; 

    var tags = $('#tags').val();
    tags = tags?.toString() || '';
    var data = {
      tag_id:tags,
      category:0,
      sub_category:0
    }

    if(categoryAndSlave != '#'){

      const arr = categoryAndSlave.split('-'); 
      var category = parseInt(arr[0]);
      var sub_category = parseInt(arr[1]);
      
      data.category = category;
      data.sub_category = sub_category;

    }

    
    this.ApiService.filter_news(data).subscribe(data => {
      
      this.news_list = data;
      
    }, error => {
      console.error(error);
    });
    



}


}
