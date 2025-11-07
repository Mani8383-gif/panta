import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer/footer";
import { Photo } from "./photo/photo";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Photo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pana-copmany');
}
