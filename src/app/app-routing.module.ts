import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayResultPageComponent } from './display-result-page/display-result-page.component';

const routes: Routes = [
  { path: 'display-result-page', component: DisplayResultPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
