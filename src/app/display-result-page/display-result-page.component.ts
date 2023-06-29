import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YelpService } from '../service/yelp.service';

@Component({
  selector: 'app-display-result-page',
  templateUrl: './display-result-page.component.html',
  styleUrls: ['./display-result-page.component.css']
})
export class DisplayResultPageComponent implements OnInit {
  public category: string = '';
  public restaurants: any[] = [];
  public errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private yelpService: YelpService
  ) { }

  ngOnInit(): void {
    const address = this.route.snapshot.queryParams['address'];
    this.searchRestaurants(address);
  }

  public searchRestaurants(address: string): void {
    this.yelpService.getRestaurants(address)
      .subscribe(
        (data: { businesses: any[]; }) => {
          this.restaurants = data.businesses;
        },
        (error: string) => {
          this.restaurants = [];
          this.errorMessage = error;
          console.error(error);
        }
      );
  }

  getStarRating(rating: number): string {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return '★'.repeat(fullStars) + (hasHalfStar ? '½' : '') + '☆'.repeat(emptyStars);
  }

}
