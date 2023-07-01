import {Component, ElementRef, OnInit} from '@angular/core';
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
    private yelpService: YelpService,
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const address = params['address'];
      this.searchRestaurants(address);
    });
  }

  public searchRestaurants(address: string): void {
    this.yelpService.getRestaurants(address)
      .subscribe(
        (data: { businesses: any[]; }) => {
          this.restaurants = data.businesses;
          setTimeout(() => {
            this.scrollToTop();
          }, 0);
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

  public scrollToTop(): void {
    const element = this.elementRef.nativeElement.querySelector('.restaurants-list-div');
    const top = element.offsetTop;
    window.scrollTo({ top, behavior: 'smooth' });
  }

}
