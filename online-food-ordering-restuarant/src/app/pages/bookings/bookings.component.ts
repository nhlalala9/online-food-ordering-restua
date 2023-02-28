import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookingsService } from 'src/app/service/bookings.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
bookings: any;

  constructor(private http:HttpClient, private BookingsService:BookingsService) { }

  ngOnInit(): void {
    this.BookingsService.getBookings().subscribe((data: any) =>{
      this.bookings = data as [];
      console.log(data,"all bookings")
    })
  }

}
