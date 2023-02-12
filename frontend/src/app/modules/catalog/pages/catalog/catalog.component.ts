import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ROUTER_NAMES } from '../../../../shared/constants/router-names';
import { ApiService } from "../../../../core/api.service";
import { Shop } from "../../../../shared/interfaces/shop";
import { Provider } from "../../../../shared/interfaces/provider";
import { Material } from "../../../../shared/interfaces/material";
import { Product } from "../../../../shared/interfaces/product";
import { ROUTER_LINKS } from '../../../../shared/constants/router-links';
import { ItemService } from "../../../../core/item.service";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  public title!: string;
  public providers!: Provider[];
  public materials!: Material[];
  public products!: Product[];
  public shops!: Shop[];
  public readonly ROUTER_LINKS = ROUTER_LINKS;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe(resolvedData => {
      this.providers = resolvedData['providers'];
      this.materials = resolvedData['materials'];
      this.products = resolvedData['products'];
      this.shops = resolvedData['shops'];
      this.title = resolvedData['title'];
    });
  }

  private getAll() {
    switch (this.route.snapshot.routeConfig?.path) {
      case ROUTER_NAMES.PROVIDERS : {
        this.apiService.getAllProviders().subscribe(providers => {
          this.providers = providers;
        });
        break;
      }
      case ROUTER_NAMES.MATERIALS : {
        this.apiService.getFilteredMaterials(this.route.snapshot.params['provider']).subscribe(materials => {
          this.materials = materials;
        });
        break;
      }
      case ROUTER_NAMES.PRODUCTS : {
        this.apiService.getFilteredProducts(this.route.snapshot.params['provider'],this.route.snapshot.params['material']).subscribe(products => {
          this.products = products;
        });
        break;
      }
      case ROUTER_NAMES.SHOPS : {
        this.apiService.getAllShops().subscribe(shops => {
          this.shops = shops;
        });
        break;
      }
    }
  }

  public delete(id: string) {
    switch (this.route.snapshot.routeConfig?.path) {
      case ROUTER_NAMES.SHOPS: {
        this.apiService.deleteShop(id).subscribe(() => {
          this.getAll();
        });
        break;
      }
      case ROUTER_NAMES.PRODUCTS: {
        this.apiService.deleteProduct(id).subscribe(() => {
          this.getAll();
        });
        break;
      }
    }
  }

  public edit(item: any) {
    switch (this.route.snapshot.routeConfig?.path) {
      case ROUTER_NAMES.SHOPS: {
        this.itemService.selectedShop = item;
        this.router.navigate([this.ROUTER_LINKS.EDIT + '/shop']);
        break;
      }
      case ROUTER_NAMES.PROVIDERS: {
        this.itemService.selectedProvider = item;
        this.router.navigate([this.ROUTER_LINKS.EDIT + '/provider']);
        break
      }
      case ROUTER_NAMES.MATERIALS: {
        this.itemService.selectedMaterial = item;
        this.router.navigate([this.ROUTER_LINKS.EDIT + '/material']);
        break;
      }
      case ROUTER_NAMES.PRODUCTS: {
        this.itemService.selectedProduct = item;
        this.router.navigate([this.ROUTER_LINKS.EDIT + '/product']);
      }
    }
  }

  select(item: any) {
    switch (this.route.snapshot.routeConfig?.path) {
      case ROUTER_NAMES.PROVIDERS : {
        this.itemService.selectedProvider = item;
        break;
      }
      case ROUTER_NAMES.MATERIALS : {
        this.itemService.selectedMaterial = item;
        break;
      }
    }
  }
}
