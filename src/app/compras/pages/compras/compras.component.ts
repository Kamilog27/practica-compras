import { Component, OnInit } from '@angular/core';
import { ComprasService } from '../../services/compras.service';
import { products } from '../../interfaces/compras.interface';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styles: [
    `
    img{
      width:200px;
      height:200px;
      
    }
    `
  ]
})
export class ComprasComponent implements OnInit{
  products:products[]=[];
  constructor(private comprasService:ComprasService){

  }
  ngOnInit(): void {
    this.comprasService.getProducts().subscribe(products=>{
      this.products=products;
    })
  }
}
