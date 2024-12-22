import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {SendingOrderService} from "../../services/sending-order.service";

@Component({
  selector: 'order-component',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{
  private subscription: Subscription | null = null;
  public subscriptionOrder: Subscription | null = null;
  public successRequest: boolean = false;
  public errorRequest: boolean = false;

  orderForm = new FormGroup({
    name:  new FormControl('', [Validators.required, this.validate('^[а-яА-ЯёЁa-zA-Z]+$')]),
    lastName: new FormControl('', [Validators.required, this.validate('^[а-яА-ЯёЁa-zA-Z]+$')]),
    phone: new FormControl('', [Validators.required, this.validate('^\\+?\\d{11}$')]),
    country: new FormControl('', Validators.required),
    index: new FormControl(0),
    address: new FormControl('', [Validators.required, this.validate('^[а-яА-ЯёЁa-zA-Z\\d\\s\\-\\/]+$')]),
    product: new FormControl({value: '', disabled: true}),
    comment: new FormControl('')
  })

  get name() { return this.orderForm.get('name'); }
  get lastName() { return this.orderForm.get('lastName'); }
  get phone() { return this.orderForm.get('phone'); }
  get country() { return this.orderForm.get('country'); }
  get index() { return this.orderForm.get('index'); }
  get address() { return this.orderForm.get('address'); }
  get product() { return this.orderForm.get('product'); }
  get comment() { return this.orderForm.get('comment'); }

  constructor(private activatedRoute: ActivatedRoute, private sendingOrderService: SendingOrderService) {

  }

  ngOnInit() {
    this.subscription = this.activatedRoute.queryParams.subscribe(params => {
      if (params['product']) {
        this.orderForm.patchValue({
          product: params['product'],
        });
      }
    });
  }

  public createOrder(): void {
    if (this.orderForm.valid) {
      this.subscriptionOrder = this.sendingOrderService.createOrder({
        name: String(this.name?.value),
        last_name: String(this.lastName?.value),
        phone: String(this.phone?.value),
        country: String(this.country?.value),
        zip: String(this.index?.value),
        product: String(this.product?.value),
        address: String(this.address?.value),
        comment: String(this.comment?.value),
      })
        .subscribe(response => {
          if (response.success && !response.message) {
            this.successRequest = true;
          } else {
            this.successRequest = false;
            this.errorRequest = true;
          }
        })
    }
  }

  validate(pattern: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const result = new RegExp(pattern).test(control.value);
      return result ? null : {pattern: {value: control.value}};
    }
  }
}
