import { Component } from '@angular/core';
import { PhotoComponent } from "../../photo/photo";
import { Companies } from "../../companies/companies";

@Component({
  selector: 'app-home',
  imports: [PhotoComponent, Companies],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
