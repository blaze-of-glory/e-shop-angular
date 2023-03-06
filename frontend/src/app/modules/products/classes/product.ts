import { Provider } from '../../providers/classes/provider';
import { Material } from '../../materials/classes/material';

export class Product {
  id?: string;
  title: string;
  provider: Provider;
  material: Material;
  img: string;
  description: string;
  type: string;
  weight: string;
  cost: string;
}
