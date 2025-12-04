import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { Button } from "primeng/button";
import { SkeletonDesignTokens } from '@primeuix/themes/types/skeleton';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  imports: [CommonModule, Button,AnimateOnScrollModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  router=inject(Router)
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


}
