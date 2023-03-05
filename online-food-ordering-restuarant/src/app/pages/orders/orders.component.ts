import { Component, OnInit } from '@angular/core';
import { OrdersServiceService } from 'src/app/service/orders-service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: any[] = [];

  constructor(private orderService: OrdersServiceService) { }

  ngOnInit(): void {
    // this.orderService.getOrders().subscribe(
    //   orders => {
    //     this.orders = orders;
    //     console.log(this.orders); // console log orders data here
    //   },
    //   error => console.log(error)
    // );
    this.orderService.getOrders().subscribe((booking: any) =>{
      this.orders = booking.data;
      console.log(this.orders)
    })
  }
  

}
