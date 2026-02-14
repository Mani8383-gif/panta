import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { Button } from "primeng/button";
import { SkeletonDesignTokens } from '@primeuix/themes/types/skeleton';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { Router } from '@angular/router';
import { navbarAnimation } from '../animations/animations';
@Component({
  selector: 'app-navbar',
  imports: [CommonModule, Button,AnimateOnScrollModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  animations:[navbarAnimation]
})
export class Navbar {
 height=0
 transition:any
  isopen=false
  router=inject(Router)
  ispone!: boolean;

 onclickhome(){
this.router.navigate(['/home'])
 }
onclickaboutus(){
this.router.navigate(['/about us'])
}
onclickcontactus(){
  this.router.navigate(['/contact us'])
}
onclickcertificate(){
  this.router.navigate(['/certificate'])
}

onclickorganizationalchart(){
  this.router.navigate(['/organizational-chart'])
}
togglemenu(){
this.isopen=!this.isopen
this.height=250
  
}
closeMenu(){
  this.isopen=false

}

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    const clickedInside = (event.target as HTMLElement).closest('.mobile-menu, .menu-button');
    if (!clickedInside) {
      this.isopen = false;
    }
  }
}
