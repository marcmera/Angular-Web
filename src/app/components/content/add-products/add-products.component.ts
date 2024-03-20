import { Component } from '@angular/core';
import { products } from '../../../interfaces/products';
import { AddProductsService } from '../../../services/products.service';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-add-products',
  standalone: true,
  imports: [ReactiveFormsModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatProgressSpinnerModule],
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})


export class SendProductsComponent {
  constructor(private addProductsService: AddProductsService) { }

  products: products[] = [];

  productForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    price: new FormControl('', [Validators.required, Validators.pattern(/^\d+\.\d{2}$/)]), // 2 decimal places
    sex: new FormControl('', [Validators.required, Validators.pattern(/^[M|F]$/)]),
    onSale: new FormControl(false)
  });

  nameValue: string = '';
  descriptionValue: string = '';
  priceValue: number = 0;
  sexValue: string = '';
  onSaleValue: boolean = false;

  onSubmit() {
    this.products.push({
      id: this.products.length + 1,
      name: this.nameValue,
      description: this.descriptionValue,
      price: this.priceValue,
      sex: this.sexValue,
      onSale: this.onSaleValue
    });
    this.sendProductsSignal();
    this.productForm.reset();
  }

  sendProductsSignal() {
    this.addProductsService.datosCompartidos.set(this.products);
  }
}

