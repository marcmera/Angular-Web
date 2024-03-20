import { Injectable, signal } from "@angular/core";
import { reviews } from "../interfaces/reviews";

@Injectable({
    providedIn: 'root'
})
export class AddReviewsService {

    constructor() { }
    datosCompartidos = signal<reviews[]>([]);
}