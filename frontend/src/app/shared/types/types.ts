import { Employee } from '../../modules/employees/classes/employee';
import { Shop } from '../../modules/shops/classes/shop';
import { Provider } from '../../modules/providers/classes/provider';
import { Material } from '../../modules/materials/classes/material';
import { Product } from '../../modules/products/classes/product';
import { ManipulatorStrategyData } from '../interfaces/manipulator-strategy-data';

export type Instances = Employee | Shop | Provider | Material | Product;

export type ManipulatorFormStrategyMapping = {
  [key in 'employee' | 'shop' | 'provider' | 'material' | 'product']: ManipulatorStrategyData;
};
