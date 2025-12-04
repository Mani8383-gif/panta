import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer/footer";
import {  PhotoComponent } from "./photo/photo";
import { Companies } from "./companies/companies";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Companies, PhotoComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('panta-copmany');
}
