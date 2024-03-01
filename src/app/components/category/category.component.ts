import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit{
categoryList:any[]=[];
  constructor(private _product:ProductsService){ }


  ngOnInit(): void {
    this.getCategory()
  }

  getCategory(){
this._product.getCategories().subscribe({
  next:(response)=>{
    
    this.categoryList = response.data
    console.log(response.data);
  },
  error:(err)=>{
    console.log(err);
    
  }
})


  }



}
