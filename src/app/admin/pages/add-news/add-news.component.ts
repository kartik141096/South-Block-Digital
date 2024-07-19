import { Component, ViewChild, ElementRef } from '@angular/core';
import { HeaderComponent } from '../../common/header/header.component';
import { SidebarComponent } from '../../common/sidebar/sidebar.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { ApiService } from '../../../api.service';
import { CommonModule } from '@angular/common';
import { ModalService } from '../../../modal.service';

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

export interface news_tags{
  id:number,
  name:string
}

export interface subNews{
  sub_heading:string,
  paragraph:string,
  img:File,
}

@Component({
  selector: 'app-add-news',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, FooterComponent, CommonModule],
  templateUrl: './add-news.component.html',
  styleUrl: './add-news.component.css'
})

export class AddNewsComponent {

  category_data:Category[][] = [];
  news_tag:news_tags[]=[];
  news_slave_count = 0;
  news_slave:subNews[]=[];
  error='';

  constructor(protected ApiService:ApiService, private modalService: ModalService)
  {
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


  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;
  @ViewChild('formControl', { static: false }) formControl!: ElementRef;

  handleFileInput(index: number): void {
    const fileInput = document.getElementById('fileInput-' + index) as HTMLInputElement;
    fileInput.click();
  }
  
  onFileSelected(event: any, index: number): void {
    const fileInput = event.target as HTMLInputElement;
    const files: FileList | null = fileInput.files;
  
    if (files && files.length > 0) {
      const fileName = files[0].name;
      // Update the input field with the file name
      const inputField = document.getElementById('fileInput_' + index) as HTMLInputElement;
      inputField.value = fileName;
    }
  }

  onFileSelect(): void {
    const fileInput = this.fileInput.nativeElement;
    const files: FileList = fileInput.files;
    
    if (files.length > 0) {
      const fileName = files[0].name;
      // Update the form control with the file name
      this.formControl.nativeElement.value = fileName;
    }
  }

  addMoreImages(): void {
    this.news_slave_count++;
  }

  countArray(): number[] {
    return Array.from({ length: this.news_slave_count }, (_, index) => index);
  }

  // saveNews(){
    
  //   this.news_slave = [];
  //   var error = 0;
  //   var tags_id = $('#tags').val();
  //   var category_id = $('#category').val();
  //   var heading = $('#heading').val();
  //   var paragraph = $('#paragraph').val();
  //   var is_active = $('#is_active').prop('checked');
  //   var fileInput = $('#fileInput')[0] as HTMLInputElement; // Accessing the DOM element
  //   var img = "";
    
  //   if (fileInput.files && fileInput.files.length > 0) {
  //     img = fileInput.files[0].name; // Get the file name if files exist
  //   }
    
  //   for (let i = 0; i < this.news_slave_count; i++) {
      
  //     const subHeadingValue = $('#subHeading-' + i).val() as string | undefined;
  //     const subHeadingparagraph = $('#subParagraph-' + i).val() as string | undefined;
  //     const file = $('#fileInput-' + i)[0] as HTMLInputElement; // Accessing the DOM element
  //     var subImg = "";
      
  //     if (file.files && file.files.length > 0) {
  //       subImg = file.files[0].name; // Get the file name if files exist
  //     }

  //     if ((subHeadingValue !== undefined && subHeadingValue.trim() !== '') || (subHeadingparagraph !== undefined && subHeadingparagraph.trim() !== '')) {
  //       this.news_slave.push({
  //         sub_heading: subHeadingValue ? subHeadingValue.trim() : '',
  //         paragraph: subHeadingparagraph ? subHeadingparagraph.trim() : '',
  //         img: subImg
  //       });
  //     }
  //   }

  //   if(category_id == null){
  //     $('#categoryError').removeClass('d-none');
  //     error = 1;

  //   }else{
  //     $('#categoryError').addClass('d-none');
  //   }

  //   if(tags_id == 0){
  //     $('#tagsError').removeClass('d-none');
  //     error = 1;

  //   }else{
  //     $('#tagsError').addClass('d-none');
  //   }
    
  //   if(heading == ''){
  //     $('#headingError').removeClass('d-none');
  //     error = 1;

  //   }else{
  //     $('#headingError').addClass('d-none');
  //   }
    
  //   if(paragraph == ''){
  //     $('#paragraphError').removeClass('d-none');
  //     error = 1;

  //   }else{
  //     $('#paragraphError').addClass('d-none');
  //   }
    
  //   if(img == ''){
  //     $('#imgError').removeClass('d-none');
  //     error = 1;
  //   }else{
  //     $('#imgError').addClass('d-none');
  //   }

  //   var data = {
  //     is_active : is_active,
  //     category_id : category_id,
  //     tags_id : tags_id,
  //     heading : heading,
  //     paragraph : paragraph,
  //     img : img,
  //     slave : this.news_slave
  //   }

  //   this.ApiService.add_news(data).subscribe((id) => {

  //     $('#inputPopup').modal('hide'); 
  //     this.modalService.openModal('Sub-Category successfully created');
      
  //     setTimeout(function() {
  //       window.location.reload();
  //     }, 3000);

  //   }, error => {
  //       console.error(error);
  //   });
  // }


  saveNews() {
    this.news_slave = [];
    let error = false;

    const tags_id = $('#tags').val();
    const category_id = $('#category').val();
    const heading = $('#heading').val();
    const paragraph = $('#paragraph').val();
    const is_active = $('#is_active').prop('checked');
    const fileInput = $('#fileInput')[0] as HTMLInputElement;
    let img: File | null = null;
    if (fileInput.files && fileInput.files.length > 0) {
      console.log(fileInput.files)
        img = fileInput.files[0];
    }

    for (let i = 0; i < this.news_slave_count; i++) {
        const subHeadingValue = $('#subHeading-' + i).val() as string | undefined;
        const subHeadingparagraph = $('#subParagraph-' + i).val() as string | undefined;
        const file = $('#fileInput-' + i)[0] as HTMLInputElement;
        let subImg: File | null = null;

        if (file.files && file.files.length > 0) {
            subImg = file.files[0];
        }

        if ((subHeadingValue && subHeadingValue.trim() !== '') || (subHeadingparagraph && subHeadingparagraph.trim() !== '')) {
          if (subImg) {  
            this.news_slave.push({
                sub_heading: subHeadingValue ? subHeadingValue.trim() : '',
                paragraph: subHeadingparagraph ? subHeadingparagraph.trim() : '',
                img: subImg
            });
          }
        }
    }

    if (category_id == null) {
        $('#categoryError').removeClass('d-none');
        error = true;
    } else {
        $('#categoryError').addClass('d-none');
    }

    if (tags_id == '0') {
        $('#tagsError').removeClass('d-none');
        error = true;
    } else {
        $('#tagsError').addClass('d-none');
    }

    if (heading === '') {
        $('#headingError').removeClass('d-none');
        error = true;
    } else {
        $('#headingError').addClass('d-none');
    }

    if (paragraph === '') {
        $('#paragraphError').removeClass('d-none');
        error = true;
    } else {
        $('#paragraphError').addClass('d-none');
    }

    if (error) {
        return;
    }

    const formData = new FormData();
    formData.append('is_active', String(is_active));
    formData.append('category_id', String(category_id));
    formData.append('tags_id', String(tags_id));
    formData.append('heading', String(heading));
    formData.append('paragraph', String(paragraph));
    if (img) {
        formData.append('img', img);
    }

    this.news_slave.forEach((slave, index) => {
        formData.append(`slave[${index}][sub_heading]`, slave.sub_heading);
        formData.append(`slave[${index}][paragraph]`, slave.paragraph);
        if (slave.img) {
            formData.append(`slave[${index}][img]`, slave.img);
        }
    });


    this.ApiService.add_news(formData).subscribe(
        (id) => {
            $('#inputPopup').modal('hide');
            this.modalService.openModal('News Uploaded Successfully !!');
        },
        (error) => {
            console.error(error);
        }
    );
}

  
}
