import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [RouterLink],
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
