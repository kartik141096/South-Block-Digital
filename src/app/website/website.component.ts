import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';


@Component({
  selector: 'app-website',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './website.component.html',
  styleUrl: './website.component.css'
})
export class WebsiteComponent {
  title = 'SBD_Front';

    ngAfterViewInit() {
        $(document).ready(() => {
        
            $(".latest-news-carousel").owlCarousel({
                autoplay: true,
                smartSpeed: 2000,
                center: false,
                dots: false,
                loop: true,
                margin: 25,
                nav : true,
                navText : [
                    '<i class="bi bi-arrow-left"></i>',
                    '<i class="bi bi-arrow-right"></i>'
                ],
                responsiveClass: true,
                responsive: {
                    0:{
                        items:1
                    },
                    576:{
                        items:1
                    },
                    768:{
                        items:2
                    },
                    992:{
                        items:3
                    },
                    1200:{
                        items:4
                    }
                }
            });


            $(".whats-carousel").owlCarousel({
            autoplay: true,
            smartSpeed: 2000,
            center: false,
            dots: false,
            loop: true,
            margin: 25,
            nav : true,
            navText : [
                '<i class="bi bi-arrow-left"></i>',
                '<i class="bi bi-arrow-right"></i>'
            ],
            responsiveClass: true,
            responsive: {
                    0:{
                        items:1
                    },
                    576:{
                        items:1
                    },
                    768:{
                        items:2
                    },
                    992:{
                        items:2
                    },
                    1200:{
                        items:2
                    }
            }});
        });
    }
}
