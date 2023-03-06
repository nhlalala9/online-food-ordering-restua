import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RatingService } from 'src/app/service/rating.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
})
export class ReviewsComponent implements OnInit {
  rati: any[] = [];
  constructor(private ratings: RatingService) {}

  ngOnInit(): void {
    this.ratings.getRating().subscribe((products: any) => {
      this.rati = products.data;
      console.log(this.rati);
    });
  }
}
