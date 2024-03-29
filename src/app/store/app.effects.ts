import { ShopsEffects } from '../modules/shops/store/shops.effects';
import { EmployeesEffects } from '../modules/employees/store/employees.effects';
import { ProvidersEffects } from '../modules/providers/store/providers.effects';
import { MaterialsEffects } from '../modules/materials/store/materials.effects';
import { ProductsEffects } from '../modules/products/store/products.effects';

export const effects = [ ShopsEffects, EmployeesEffects, ProvidersEffects, MaterialsEffects, ProductsEffects ];
