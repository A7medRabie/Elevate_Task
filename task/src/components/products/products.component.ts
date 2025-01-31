import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../app/services/products.service';
import { Router } from '@angular/router';
import { Products } from '../../app/interfaces/products';
 
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products:Products[]=[] as Products[]  

  constructor(private _ProductsService:ProductsService,private router:Router)
     {}
  
  ngOnInit() {
    
    this._ProductsService.getAllProducts().subscribe({
      next:(res)=>{
        this.products=res
 
      },
      error:(error)=>{
         
      }
    })
   }
    navigate(id:number){
   
  this.router.navigateByUrl(`productdetails/${id}`)
 }
}
