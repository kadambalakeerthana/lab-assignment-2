import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
@Component({
  selector: 'app-prod-detail',
  template: `
  <h3>you selected product with id {{productId}}</h3>
  `,
  styles: []
})
export class ProdDetailComponent implements OnInit {
  public productId; 
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id= parseInt(this.route.snapshot.paramMap.get('id'));
    this.productId = id;
  }

}
