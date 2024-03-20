import { Component } from '@angular/core';
import { HomeComponent } from '../content/home/home.component';
import { AboutComponent } from '../content/about/about.component';
import { ServicesComponent } from '../content/services/services.component';
import { ContactComponent } from '../content/contact/contact.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [HomeComponent, AboutComponent, ServicesComponent, ContactComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {

}
