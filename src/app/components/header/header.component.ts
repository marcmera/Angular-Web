import { Component } from '@angular/core';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SectionComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  headerClass: string = 'light';

  changeHeaderClass(newClass: string) {
    if (newClass == 'dark') {
      this.headerClass = 'dark';
    } else {
      this.headerClass = 'light';
    }
  }
}
