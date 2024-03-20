import { Component } from '@angular/core';
import { products } from '../../../interfaces/products';
import { AddProductsService } from '../../../services/products.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class GetProductsComponent {
  products: products[] = [{
    id: 1,
    name: 'Product 1',
    description: 'Description 1',
    sex: 'M',
    price: 100,
    onSale: true
  }];

  constructor(private AddProductsService: AddProductsService) { };

  ngOnInit(): void {
    this.products = this.AddProductsService.datosCompartidos();
  }
}
