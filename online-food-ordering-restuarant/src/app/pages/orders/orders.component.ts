import { Component, OnInit } from '@angular/core';
import { OrdersServiceService } from 'src/app/service/orders-service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders: any[] = [];
  order: any;
  cartDetails: any;
  bookings: any;
  complete:any[] = [];
Delivering:any[] = [];
approved:any[] = []
  constructor(private orderService: OrdersServiceService) {}

  public selector(id: any) {
    this.orderService.getOrderById(id).subscribe((booking: any) => {
      this.order = booking.data;
      this.cartDetails = this.order.attributes.cartDetails;
      console.log(this.cartDetails, 'qwerty');
    });
  }

  tab: string = 'order';

  setTab(tab: string){
    // alert(tab)
    this.tab = tab;
  }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((booking: any) => {
      console.log(booking.data);
      this.orders = booking.data.filter((order: any) => order.attributes.status === "Pending");
      this.approved = booking.data.filter((order: any) => order.attributes.status === "Approved");
    this.complete = booking.data.filter((order: any) => order.attributes.status === "Completed");
    this.Delivering = booking.data.filter((order: any) => order.attributes.status === "Delivering");
      console.log(this.orders,"orders");
      console.log(this.approved,"approved");
      console.log(this.complete,"complete");
      console.log(this.Delivering,"on going");
    });
  }

  approveItem(booking: any) {
    const id = booking.id;
    const status = 'Approved';
    const index = this.orders.findIndex((r: any) => r.id === booking.id);
    console.log(index);

    this.orderService.updateItemStatus(id, status).subscribe(
      (res) => {
        console.log(res, 'see console');
        window.location.reload();
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
