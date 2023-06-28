import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  items = [
    { id: 1, title: 'Pizza', image: "assets/pizza.jpg" },
    { id: 2, title: 'Sushi', image: 'assets/sushi.jpg' },
    { id: 3, title: 'Burger', image: 'assets/burger.jpg' },
    { id: 4, title: 'Ramen', image: 'assets/ramen.jpg' },
  ];

  activeIndex = 0;
  intervalId: any;
  delay = 5000;

  ngOnInit(): void {
    this.startCarousel();
  }

  startCarousel(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, this.delay);
  }

  nextSlide(): void {
    clearInterval(this.intervalId); // Clear the existing interval
    this.activeIndex = (this.activeIndex + 1) % this.items.length;
    this.startCarousel(); // Start a new interval
  }

  previousSlide(): void {
    clearInterval(this.intervalId); // Clear the existing interval
    this.activeIndex = (this.activeIndex - 1 + this.items.length) % this.items.length;
    this.startCarousel(); // Start a new interval
  }

  getVisibleItems(): any[] {
    const visibleItems: any[] = [];
    const prevIndex = (this.activeIndex - 1 + this.items.length) % this.items.length;
    const nextIndex = (this.activeIndex + 1) % this.items.length;
    visibleItems.push({ ...this.items[prevIndex], position: 'previous' });
    visibleItems.push({ ...this.items[this.activeIndex], position: 'active' });
    visibleItems.push({ ...this.items[nextIndex], position: 'next' });
    return visibleItems;
  }
}
