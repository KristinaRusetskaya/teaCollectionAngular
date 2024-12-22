import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../types/product.type";
import {ProductsService} from "../../services/products.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  public product: ProductType;

  constructor(private productsService: ProductsService, private router: Router, private activatedRoute: ActivatedRoute) {

    this.product = {
      id: 0,
      image: '',
      title: '',
      price: 0,
      description: ''
    }
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.productsService.getProduct(+params['id'])
          .subscribe({
            next: (data: ProductType) => {
              this.product = data;
            },
            error: (error) => {
              this.router.navigate(['/']).then();
            }
          })
      }
    });
  }
}
