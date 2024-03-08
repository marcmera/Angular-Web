import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  websiteName: string = 'Marc Mera';
  copyright: number = new Date().getFullYear();

  isHeaderDark: boolean = false;
  footerStyle: string = ''; // Variable para almacenar la clase CSS del footer
}
