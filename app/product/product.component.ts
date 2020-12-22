import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  template: `
    <p>
      product works!
    </p>
    <ul>
  <li (click)="onSelect(product)"*ngFor="let product of products">
    <span>{{product.id}}</span> {{product.name}}
  </li>
</ul>

  `,
  styles: []
})
export class ProductComponent implements OnInit {
  public products = [
    {"id": 1, "name": "monitors"},
    {"id": 2, "name": "mouse"},
    {"id": 3, "name": "keyboard"},
    {"id": 4, "name": "laptop"},
    {"id": 5, "name": "speakers"}
  ]
  constructor(private rounter: Router) { }

  ngOnInit() {
  }
  onSelect(product){

    this.rounter.navigate(['/products', product.id]);
  }

}
