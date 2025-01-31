import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Products } from '../../app/interfaces/products';
import { ProductsService } from '../../app/services/products.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [RouterLink,JsonPipe],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent  {
   productId!:number
  prod:Products[]=[] as Products[] 
  constructor(private _ActivatedRoute:ActivatedRoute,private _ProductsService:ProductsService){
    this._ActivatedRoute.paramMap.subscribe((paramMap)=>{   
      this.productId=Number(paramMap.get("id"))
      this._ProductsService.getProductsByID(this.productId).subscribe(item=>this.prod.push(item))
})
  }
 
 }
 
 

 

