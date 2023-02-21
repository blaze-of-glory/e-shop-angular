import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Product } from "../../../../shared/interfaces/product";
import { ROUTER_NAMES } from '../../../../shared/constants/router-names';
import { ApiService } from "../../../../core/api.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit{
  product!: Product;
  itemType!: 'product';

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) {  }

  ngOnInit(): void {
    switch (this.route.snapshot.routeConfig?.path) {
      case ROUTER_NAMES.PRODUCT : {
        this.itemType = 'product';
        this.apiService.getProductById(this.route.snapshot.params['product']).subscribe(selectedProduct => {
          this.product = selectedProduct;
        });
        break;
      }
    }
  }
}
