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
    const apiKey = 'WKa6NJmc_RrJCcmn04EPUnKi7wjXH_Umk5FOlYgszN7GYOFb2RGV7-RXqEYc2dJNoXspdUU8sOzq9-44Mr42dcanZ0KawyHqZZhbNN0csN6nWXBNP8qRSuw0hU-dZHYx';
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
