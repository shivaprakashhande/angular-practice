import { Component, OnInit } from '@angular/core';
import { prodFactory, Product } from './factory_method';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css']
})
export class FactoryComponent implements OnInit {

  a: Product = prodFactory.createProd('a');
  b: Product = prodFactory.createProd('b');

  constructor() { }

  ngOnInit(): void {
    console.log(this.a.method(), this.b.method())
  }

}
