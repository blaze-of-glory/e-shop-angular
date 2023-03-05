import { Injectable } from '@angular/core';
import { Product } from '../shared/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
 public selectedProduct: Product | null = null;

  constructor() { }
}
