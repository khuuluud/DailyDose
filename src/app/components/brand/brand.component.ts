import { Component } from '@angular/core';
import { BrandService } from 'src/app/services/brand.service';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent {

constructor(private _brand:BrandService ){}

brandList:any[]=[];
selectedBrand:any;

ngOnInit(): void {
 this.getAllBrands()
}
getAllBrands(){
this._brand.getBrand().subscribe({

  next:(response)=>{
    this.brandList = response.data;
    console.log(response.data);
  },
  error:(err)=>{console.log(err);
  }
})
}

getSelectedBrands(id:string):void{
  this._brand.getSelectedBrand(id).subscribe({
    next:(response)=>{
      this.selectedBrand = response.data;
      console.log(this.selectedBrand);
      
    },
    error:(err)=>{console.log(err);
    },
    complete:()=>{
      document.querySelector('#getDetails')?.classList.remove('d-none');
     

    }
  })
}




closeBtn(){
  document.querySelector('#getDetails')?.classList.add('d-none');


}
}