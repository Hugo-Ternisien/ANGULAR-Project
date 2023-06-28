import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  query: string = "";

  @Output() searchEvent = new EventEmitter<string>();

  onSearch(value: string): void {
    if (value) {
      this.searchEvent.emit(value);
    }
  }
}
