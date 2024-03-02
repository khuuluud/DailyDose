
import { Component } from '@angular/core';
import { AllordersService } from 'src/app/services/allorders.service';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.scss']
})
export class AllordersComponent {
  orderList: any[] = [];
orderDetailsList:any[]=[];
  userId: any = this._auth.userId;
  constructor(private _order: AllordersService, private _auth: AuthService) {
    this.getUserOrders();
  }

  getUserOrders() {
    this._order.getUserOrders(this.userId.getValue()).subscribe({
      next: (response) => {
       
        for (let i = 0; i < response.length; i++) {
       
          for(let y = 0; y < response[i].cartItems.length; y++){
            this.orderDetailsList.push(response[i].cartItems[y])
          }
        }
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


}