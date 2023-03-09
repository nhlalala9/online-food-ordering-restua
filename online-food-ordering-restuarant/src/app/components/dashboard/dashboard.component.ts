import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';
import { OrdersServiceService } from 'src/app/service/orders-service.service';
import { BookingsService } from 'src/app/service/bookings.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  product: any;
  isLoading = false;
  orders: any[] = [];
  products: any[] = [];
  searchTerm: string = '';
  bookings: any[] = [];

  nothing: any[] = [];
  final: any[] = [];

  constructor(
    private http: HttpClient,
    private bookingServices: BookingsService,
    private ProductsService: ProductsService,
    private orderService: OrdersServiceService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.ProductsService.getProducts().subscribe((products: any) => {
      this.isLoading = true;
      this.product = products.data;
      console.log(products.data);
      this.isLoading = false;
    });
    this.orderService.getOrders().subscribe((booking: any) => {
      this.orders = booking.data;
      console.log(this.orders, 'why');
    });

    this.bookingServices.getBookings().subscribe((booking: any) => {
      this.bookings = booking.data;
      this.nothing = booking.data.filter((order: any) => order.attributes.status === "Pending");
      console.log(this.nothing,"null");
    });
  }

 
}
