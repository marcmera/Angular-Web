import { Component } from '@angular/core';
import { reviews } from '../../../interfaces/reviews';
import { AddReviewsService } from '../../../services/reviews.service';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-add-review',
  standalone: true,
  imports: [ReactiveFormsModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './add-review.component.html',
  styleUrl: './add-review.component.css'
})


export class SendReviewsComponent {
  constructor(private addReviewsService: AddReviewsService) { }

  reviews: reviews[] = [];

  reviewForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    content: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    rating: new FormControl('', [Validators.required, Validators.pattern('^[0-5]$')])
  });

  nameValue: string = '';
  contentValue: string = '';
  ratingValue: string = '';

  onSubmit() {
    this.reviews.push({
      id: this.reviews.length + 1,
      name: this.nameValue,
      content: this.contentValue,
      rating: parseInt(this.ratingValue)
    });
    this.sendReviewsSignal();
    this.reviewForm.reset();
  }

  //   reviews:reviews {
  //   id: number;
  //   name: string;
  //   content: string;
  //   rating: number;
  // }

  sendReviewsSignal() {
    this.addReviewsService.datosCompartidos.set(this.reviews);
  }
}

