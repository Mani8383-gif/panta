import { Component } from '@angular/core';
import { PhotoComponent } from "../../photo/photo";
import { Companies } from "../../companies/companies";
import { Khadamat } from "../../khadamat/khadamat";


@Component({
  selector: 'app-home',
  imports: [PhotoComponent, Companies, Khadamat],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
