import { Injectable, signal } from "@angular/core";
import { products } from "../interfaces/products";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    constructor() { }
    datosCompartidos = signal<products[]>([]);
}

// ngOnInit(): void {
//     this.productos = this.productService.datosCompartidos[];
// }
// this.productos.push(this.productos);