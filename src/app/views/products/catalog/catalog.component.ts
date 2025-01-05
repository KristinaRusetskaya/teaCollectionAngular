import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {ProductsService} from "../../../shared/services/products.service";
import {ProductType} from "../../../../types/product.type";

@Component({
  selector: 'catalog-component',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit{
  public products: ProductType[] = [];
  private subscription: Subscription | null = null;

  constructor(private productsService: ProductsService, private router: Router) {

  }

  ngOnInit() {
    this.subscription = this.productsService.getProducts()
      .subscribe(
        {
          next: (data: ProductType[]) => {
            this.products = data;
          },
          error: (error) => {
            console.log(error);
            this.router.navigate(['/']).then();
          }
        }
      )
  }
}
