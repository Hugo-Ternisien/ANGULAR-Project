import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-list-component',
  templateUrl: './restaurant-list-component.component.html',
  styleUrls: ['./restaurant-list-component.component.css']
})
export class RestaurantListComponentComponent {
  public category: string = "";
  public restaurants: any[] = [];
  public errorMessage: string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.category = this.route.snapshot.url[0].path;
    this.searchRestaurants();
  }

  public searchRestaurants(): void {
    const apiKey = 'EqKjOzEqa9C6yy3lNnnrDyk8TmIPFK0dM4QsJGaMwkz97QgIN1JaV9OiZ_zT5sZYT161q5a8rbLdXnrDL9j2cC5a_iFF1UrekFSJ_Jb5TgLxD2SNY8-T7gUq8iqcZHYx';
    const apiUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search';
  
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${apiKey}`);
  
    const requestOptions: RequestInit = {
      method: 'GET',
      headers: headers
    };
  
    const url = `${apiUrl}?term=restaurants&categories=${this.category}&location=Paris`;
  
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => {
        this.restaurants = data.businesses;
      })
      .catch(error => {
        this.errorMessage = 'Une erreur s\'est produite lors de la recherche des restaurants.';
        console.error(error);
      });
  }
}
