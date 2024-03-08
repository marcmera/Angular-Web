import { Component } from '@angular/core';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {
  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (!element) {
      return;
    }
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
