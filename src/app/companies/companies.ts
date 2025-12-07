import { Component } from '@angular/core';

import { GalleriaModule, GalleriaResponsiveOptions } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-companies',
  imports: [CommonModule, GalleriaModule, ButtonModule],
  templateUrl: './companies.html',
  styleUrl: './companies.css',
})
export class Companies {
  images: any[] = [];
 
  isAutoPlay: boolean = false;
responsiveOptions: GalleriaResponsiveOptions[]|undefined;


  constructor() {
    
    this.images = [
      {
        itemImageSrc: 'assets/bargh-logo-2.png',
       
        alt: 'bargh',
        
      },
      {
        itemImageSrc: 'assets/bargh-logo.png',
        
        alt: 'bargh shahri',
       
      },
      {
        itemImageSrc: 'assets/hadid-ghate-logo.png',
      
        alt: 'hadid ghate',
       
      },
      {
        itemImageSrc:'assets/niro-kolor-png.png',
        alt:'niro kolor'
      },
      {
        itemImageSrc:'assets/pars-jonobi-logo.png',
        alt:'pars jonoobi'
      }
    ];
  }
}
