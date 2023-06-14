import { ManipulatorFormStrategy } from '../interfaces/manipulator-form-strategy.interface';
import { Employee } from '../../modules/employees/classes/employee';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Shop } from '../../modules/shops/classes/shop';
import { Provider } from '../../modules/providers/classes/provider';
import { Material } from '../../modules/materials/classes/material';
import { Product } from '../../modules/products/classes/product';

export class EmployeeFormStrategy implements ManipulatorFormStrategy<Employee> {
  createForm(employee: Employee): FormGroup {
    const fb: FormBuilder = new FormBuilder();
    return fb.group({
      img: [employee.img, [Validators.required]],
      name: [employee.name, [Validators.required]],
      surname: [employee.surname, [Validators.required]],
      age: [employee.age, [Validators.required]],
      position: [employee.position, [Validators.required]],
      salary: [employee.salary, [Validators.required]]
    });
  }
}

export class ShopFormStrategy implements ManipulatorFormStrategy<Shop> {
  createForm(shop: Shop): FormGroup {
    const fb: FormBuilder = new FormBuilder();
    return fb.group({
      img: [shop.img, [Validators.required]],
      address: [shop.address, [Validators.required]],
      openTime: [shop.openTime, [Validators.required]],
      closeTime: [shop.closeTime, [Validators.required]]
    });
  }
}

export class ProviderFormStrategy implements ManipulatorFormStrategy<Provider> {
  createForm(provider: Provider): FormGroup {
    const fb: FormBuilder = new FormBuilder();
    return fb.group({
      img: [provider.img, [Validators.required]],
      title: [provider.title, [Validators.required]],
      subtitle: [provider.subtitle, [Validators.required]],
      description: [provider.description, [Validators.required]],
      foundingDate: [provider.foundingDate, [Validators.required]]
    });
  }
}

export class MaterialFormStrategy implements ManipulatorFormStrategy<Material> {
  createForm(material: Material): FormGroup {
    const fb: FormBuilder = new FormBuilder();
    return fb.group({
      img: [material.img, [Validators.required]],
      title: [material.title, [Validators.required]],
      description: [material.description, [Validators.required]]
    });
  }
}

export class ProductFormStrategy implements ManipulatorFormStrategy<Product> {
  createForm(product: Product): FormGroup {
    const fb: FormBuilder = new FormBuilder();
    return fb.group({
      img: [product.img, [Validators.required]],
      title: [product.title, [Validators.required]],
      description: [product.description, [Validators.required]],
      type: [product.type, [Validators.required]],
      weight: [product.weight, [Validators.required]],
      cost: [product.cost, [Validators.required]]
    });
  }
}
