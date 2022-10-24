import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeng',
  templateUrl: './primeng.component.html',
  styleUrls: ['./primeng.component.scss']
})
export class PrimengComponent implements OnInit {

  constructor() { }

  cols : any

  products : any=[
    {
      "code" : 1,
      "name" : "yogesh",
      "category" : "any",
      "quantity" : "any"
    },
    {
      "code" : 2,
      "name" : "deva",
      "category" : "any",
      "quantity" : "any"
    },
    {
      "code" : 3,
      "name" : "stalin",
      "category" : "any",
      "quantity" : "any"
    }
    
  ]

  ngOnInit(): void {
    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'quantity', header: 'Quantity' }
  ];
  }

}
