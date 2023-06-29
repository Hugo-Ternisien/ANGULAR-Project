import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-address-search',
  templateUrl: './address-search.component.html',
  styleUrls: ['./address-search.component.css']
})
export class AddressSearchComponent {
  searchQuery: string = '';
  addressResults: string[] = [];

  constructor(private http: HttpClient) {}

  searchAddress(event: any) {
    if (this.searchQuery && this.searchQuery.length >= 2) {
      const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(this.searchQuery)}&key=2113491f695749d28c0fe42ca9fb6cee`;
      this.http.get(apiUrl).subscribe((data: any) => {
        if (data.results && data.results.length > 0) {
          this.addressResults = data.results.map((result: any) => result.formatted);
        }
        else {
          this.addressResults = [];
        }
      });
    }
    else {
      this.addressResults = [];
    }
  }

  selectAddress(address: string) {
    this.searchQuery = address;
    this.addressResults = [];
  }

  validateAddress() {
    if (this.searchQuery) {
      const url = `/display-result-page?address=${encodeURIComponent(this.searchQuery)}`;
      // window.open(url, '_blank');
    }
  }
}
