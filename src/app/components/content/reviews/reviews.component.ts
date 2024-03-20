import { Component } from '@angular/core';
import { reviews } from '../../../interfaces/reviews';
import { AddReviewsService } from '../../../services/reviews.service';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class GetReviewsComponent {
  reviews: reviews[] = [];

  constructor(private addReviewsService: AddReviewsService) { };

  ngOnInit(): void {
    this.reviews = this.addReviewsService.datosCompartidos();
  }
}