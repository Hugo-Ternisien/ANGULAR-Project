import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YelpService {
  private apiKey = 'KBVR5WhF6xIsZdlIH7pEsDKpEDtajzXzvQB4gogqTD9luWLm5mm_S_GodUe6zreTUR5bqosG7LKL83GEHLFMbf7WPehTzmcY1zzNw4HAEHkESG90uFCxw8XNm1abZHYx';
  private apiUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search';

  constructor(private http: HttpClient) { }

  public getRestaurants(selectedAddress: string): Observable<any> {
    console.log('address: ' + selectedAddress)
    const url = `${this.apiUrl}?term=restaurant&location=${selectedAddress}`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.apiKey}`);

    return this.http.get(url, { headers })
      .pipe(
        catchError(error => {
          return throwError('Une erreur s\'est produite lors de la recherche des restaurants.');
        })
      );
  }
}
