import { Component } from '@angular/core';
import { GalleriaModule, GalleriaResponsiveOptions } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photo',
  standalone: true,
  imports: [CommonModule, GalleriaModule, ButtonModule],
  templateUrl: './photo.html',
  styleUrls: ['./photo.css']
})
export class PhotoComponent {
  images: any[] = [];
 
  isAutoPlay: boolean = false;
responsiveOptions: GalleriaResponsiveOptions[]|undefined;


  constructor() {
    
    this.images = [
      {
        itemImageSrc: 'assets/photo1.jpg',
       
        alt: 'عکس ۱',
        
      },
      {
        itemImageSrc: 'assets/photo2.jpg',
        
        alt: 'عکس ۲',
       
      },
      {
        itemImageSrc: 'assets/photo3.jpg',
      
        alt: 'عکس ۳',
       
      }
    ];
  }


  toggleAutoSlide(): void {
    this.isAutoPlay = !this.isAutoPlay;
  }

}
