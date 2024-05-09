import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import 'owl.carousel';

@Component({
    selector: 'app-admin',
    standalone: true,
    imports: [
        CommonModule, 
        RouterOutlet, 
        HttpClientModule
    ],
    templateUrl: './admin.component.html',
    styleUrl: './admin.component.css'
})
export class AdminComponent {}
