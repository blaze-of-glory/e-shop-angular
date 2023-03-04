import { Injectable } from '@angular/core';
import { Material } from '../shared/interfaces/material';
import { Product } from '../shared/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
 public selectedMaterial: Material | null = null;
 public selectedProduct: Product | null = null;

  constructor() { }
}
