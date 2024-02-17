import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OfertsComponent } from './oferts/oferts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'oferty', component: OfertsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}