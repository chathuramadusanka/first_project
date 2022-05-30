import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public firstProductItemName = "White Basemathi Rice";
  
  public getPriceofRice(){
    return 350
  }

  public isLowInventory = false;
  public dhalStorage = 10;

  public getDhalStorage(){

    if(this.dhalStorage < 50){
      this.isLowInventory = true;
    }

    return this.dhalStorage;
  }

}
