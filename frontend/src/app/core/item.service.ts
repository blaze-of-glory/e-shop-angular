import { Injectable } from '@angular/core';
import { Provider } from '../shared/interfaces/provider';
import { Material } from '../shared/interfaces/material';
import { Product } from '../shared/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
 public selectedProvider: Provider | null = null;
 public selectedMaterial: Material | null = null;
 public selectedProduct: Product | null = null;

  constructor() { }
}
