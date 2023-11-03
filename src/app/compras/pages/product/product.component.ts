import { Component, OnInit } from '@angular/core';
import { ComprasService } from '../../services/compras.service';
import { products } from '../../interfaces/compras.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  product!:products;
  constructor(private comprasService:ComprasService,
              private activateRoute:ActivatedRoute){}
  
  ngOnInit(): void {
    this.activateRoute.params.subscribe(({id})=>{
      this.comprasService.getProduct(id).subscribe(product=>{
        this.product=product;
      })
    })
  }
}
