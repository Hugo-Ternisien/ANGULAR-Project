import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantListComponentComponent } from './restaurant-list-component/restaurant-list-component.component';
import { DisplayResultPageComponent } from './display-result-page/display-result-page.component';
const routes: Routes = [
  { path: 'sushi', component: RestaurantListComponentComponent },
  { path: 'pizza', component: RestaurantListComponentComponent },
  { path: 'ramen', component: RestaurantListComponentComponent },
  { path: 'burger', component: RestaurantListComponentComponent },
  { path: 'display-result-page', component: DisplayResultPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
