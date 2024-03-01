import { Products } from './interfaces/products';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(Products:Products[], searchText: string): Products[] {
    return Products.filter((product)=>{
return product.category?.name.includes(searchText) || product.title.includes(searchText)
    });
  }

}
