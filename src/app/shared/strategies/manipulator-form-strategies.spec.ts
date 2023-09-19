import { TestBed } from '@angular/core/testing';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import {EmployeeFormStrategy, MaterialFormStrategy, ProductFormStrategy, ProviderFormStrategy, ShopFormStrategy} from './manipulator-form-strategies';
import {Employee} from "../../modules/employees/classes/employee";
import {Shop} from "../../modules/shops/classes/shop";
import {Provider} from "../../modules/providers/classes/provider";
import {Material} from "../../modules/materials/classes/material";
import {Product} from "../../modules/products/classes/product";

describe('EmployeeFormStrategy', () => {
  let service: EmployeeFormStrategy;
  let fb: FormBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeFormStrategy]
    });
    service = TestBed.inject(EmployeeFormStrategy);
    fb = new FormBuilder();
  });

  it('should create employee form', () => {
    const employee : Employee = {
      img: 'test',
      name: 'test',
      surname: 'test',
      age: 30,
      position: 'test',
      salary: 1000
    };

    const form: FormGroup = service.createForm(employee);
    expect(form instanceof FormGroup).toBe(true);
    expect(form.get('img').value).toEqual(employee.img);
    expect(form.get('name').value).toEqual(employee.name);
    expect(form.get('surname').value).toEqual(employee.surname);
    expect(form.get('age').value).toEqual(employee.age);
    expect(form.get('position').value).toEqual(employee.position);
    expect(form.get('salary').value).toEqual(employee.salary);

    const imgValidator = form.get('img').validator({} as AbstractControl);
    const nameValidator = form.get('name').validator({} as AbstractControl);
    const surnameValidator = form.get('surname').validator({} as AbstractControl);
    const ageValidator = form.get('age').validator({} as AbstractControl);
    const positionValidator = form.get('position').validator({} as AbstractControl);
    const salaryValidator = form.get('salary').validator({} as AbstractControl);

    expect(imgValidator['required']).toBeTruthy();
    expect(nameValidator['required']).toBeTruthy();
    expect(surnameValidator['required']).toBeTruthy();
    expect(ageValidator['required']).toBeTruthy();
    expect(positionValidator['required']).toBeTruthy();
    expect(salaryValidator['required']).toBeTruthy();
  });
});

describe('ShopFormStrategy', () => {
  let service: ShopFormStrategy;
  let fb: FormBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopFormStrategy]
    });
    service = TestBed.inject(ShopFormStrategy);
    fb = new FormBuilder();
  });

  it('should create shop form', () => {
    const shop : Shop = {
      img: 'test',
      address: 'test',
      closeTime: '21:00',
      openTime: '9:00'
    };

    const form: FormGroup = service.createForm(shop);
    expect(form instanceof FormGroup).toBe(true);
    expect(form.get('img').value).toEqual(shop.img);
    expect(form.get('address').value).toEqual(shop.address);
    expect(form.get('closeTime').value).toEqual(shop.closeTime);
    expect(form.get('openTime').value).toEqual(shop.openTime);

    const imgValidator = form.get('img').validator({} as AbstractControl);
    const addressValidator = form.get('address').validator({} as AbstractControl);
    const closeTimeValidator = form.get('closeTime').validator({} as AbstractControl);
    const openTimeValidator = form.get('openTime').validator({} as AbstractControl);

    expect(imgValidator['required']).toBeTruthy();
    expect(addressValidator['required']).toBeTruthy();
    expect(closeTimeValidator['required']).toBeTruthy();
    expect(openTimeValidator['required']).toBeTruthy();
  });
});

describe('ProviderFormStrategy', () => {
  let service: ProviderFormStrategy;
  let fb: FormBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProviderFormStrategy]
    });
    service = TestBed.inject(ProviderFormStrategy);
    fb = new FormBuilder();
  });

  it('should create provider form', () => {
    const provider : Provider = {
      img: 'test',
      description: 'test',
      title: 'test',
      subtitle: 'test',
      foundingDate: 'test'
    };

    const form: FormGroup = service.createForm(provider);
    expect(form instanceof FormGroup).toBe(true);
    expect(form.get('img').value).toEqual(provider.img);
    expect(form.get('description').value).toEqual(provider.description);
    expect(form.get('title').value).toEqual(provider.title);
    expect(form.get('subtitle').value).toEqual(provider.subtitle);
    expect(form.get('foundingDate').value).toEqual(provider.foundingDate);

    const imgValidator = form.get('img').validator({} as AbstractControl);
    const descriptionValidator = form.get('description').validator({} as AbstractControl);
    const titleValidator = form.get('title').validator({} as AbstractControl);
    const subtitleValidator = form.get('subtitle').validator({} as AbstractControl);
    const foundingDateValidator = form.get('foundingDate').validator({} as AbstractControl);

    expect(imgValidator['required']).toBeTruthy();
    expect(descriptionValidator['required']).toBeTruthy();
    expect(titleValidator['required']).toBeTruthy();
    expect(subtitleValidator['required']).toBeTruthy();
    expect(foundingDateValidator['required']).toBeTruthy();
  });
});

describe('MaterialFormStrategy', () => {
  let service: MaterialFormStrategy;
  let fb: FormBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaterialFormStrategy]
    });
    service = TestBed.inject(MaterialFormStrategy);
    fb = new FormBuilder();
  });

  it('should create material form', () => {
    const material : Material = {
      img: 'test',
      description: 'test',
      title: 'test'
    };

    const form: FormGroup = service.createForm(material);
    expect(form instanceof FormGroup).toBe(true);
    expect(form.get('img').value).toEqual(material.img);
    expect(form.get('description').value).toEqual(material.description);
    expect(form.get('title').value).toEqual(material.title);

    const imgValidator = form.get('img').validator({} as AbstractControl);
    const descriptionValidator = form.get('description').validator({} as AbstractControl);
    const titleValidator = form.get('title').validator({} as AbstractControl);

    expect(imgValidator['required']).toBeTruthy();
    expect(descriptionValidator['required']).toBeTruthy();
    expect(titleValidator['required']).toBeTruthy();
  });
});

describe('ProductFormStrategy', () => {
  let service: ProductFormStrategy;
  let fb: FormBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductFormStrategy]
    });
    service = TestBed.inject(ProductFormStrategy);
    fb = new FormBuilder();
  });

  it('should create product form', () => {
    const product : Pick<Product, 'img' | 'description' | 'title' | 'cost' | 'weight' | 'type'> = {
      img: 'test',
      description: 'test',
      title: 'test',
      cost: 'test',
      weight: 'test',
      type: 'test'
    };

    const form: FormGroup = service.createForm(product as Product);
    expect(form instanceof FormGroup).toBe(true);
    expect(form.get('img').value).toEqual(product.img);
    expect(form.get('description').value).toEqual(product.description);
    expect(form.get('title').value).toEqual(product.title);
    expect(form.get('cost').value).toEqual(product.cost);
    expect(form.get('weight').value).toEqual(product.weight);
    expect(form.get('type').value).toEqual(product.type);

    const imgValidator = form.get('img').validator({} as AbstractControl);
    const descriptionValidator = form.get('description').validator({} as AbstractControl);
    const titleValidator = form.get('title').validator({} as AbstractControl);
    const costValidator = form.get('cost').validator({} as AbstractControl);
    const weightValidator = form.get('weight').validator({} as AbstractControl);
    const typeValidator = form.get('type').validator({} as AbstractControl);

    expect(imgValidator['required']).toBeTruthy();
    expect(descriptionValidator['required']).toBeTruthy();
    expect(titleValidator['required']).toBeTruthy();
    expect(costValidator['required']).toBeTruthy();
    expect(weightValidator['required']).toBeTruthy();
    expect(typeValidator['required']).toBeTruthy();
  });
});
