import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantListComponentComponent } from './restaurant-list-component/restaurant-list-component.component';

const routes: Routes = [
  { path: 'sushi', component: RestaurantListComponentComponent },
  { path: 'pizza', component: RestaurantListComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
