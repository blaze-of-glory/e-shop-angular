import { EmployeeFormStrategy, ShopFormStrategy, ProviderFormStrategy, MaterialFormStrategy, ProductFormStrategy } from '../strategies/manipulator-form-strategies';
import { ManipulatorFormStrategyMapping } from '../types/types';


export const manipulatorFormStrategyMapping: ManipulatorFormStrategyMapping = {
  employee: {
    strategy: EmployeeFormStrategy,
    creationTitle: 'Создание сотрудника',
    editTitle: 'Редактирование сотрудника'
  },
  shop: {
    strategy: ShopFormStrategy,
    creationTitle: 'Создание магазина',
    editTitle: 'Редактирование магазина'
  },
  provider: {
    strategy: ProviderFormStrategy,
    creationTitle: 'Создание поставщика',
    editTitle: 'Редактирование поставщика'
  },
  material: {
    strategy: MaterialFormStrategy,
    creationTitle: 'Создание материала',
    editTitle: 'Редактирование материала'
  },
  product: {
    strategy: ProductFormStrategy,
    creationTitle: 'Создание товара',
    editTitle: 'Редактирование товара'
  }
}
