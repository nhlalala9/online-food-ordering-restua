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

itemId=2;

  constructor(private http:HttpClient, private BookingsService:BookingsService) { }

  ngOnInit(): void {
    this.BookingsService.getBookings().subscribe((bookings: any) =>{
      this.bookings = bookings.data;
      console.log(bookings.data)
    })
  }

  approveItem(itemId: number) {
    this.BookingsService.updateItemStatus(itemId, 'Approved')
      .subscribe(
        res => {
          console.log(res);
          // Handle success
        },
        err => {
          console.error(err);
          // Handle error
        }
      );
  }
}


