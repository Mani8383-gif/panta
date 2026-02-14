import { Component, inject } from '@angular/core';
import { scrollCardAnimation } from '../animations/khadamt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-khadamat',
  imports: [],
  templateUrl: './khadamat.html',
  styleUrl: './khadamat.css',
  animations:[scrollCardAnimation]
})
export class Khadamat {
  router=inject(Router)
power() {
this.router.navigate(['power'])
}
execute() {
this.router.navigate(['execute'])
}
design() {
this.router.navigate(['design'])
}
solar() {
this.router.navigate(['solar'])}
post() {
this.router.navigate(['post'])}

}
