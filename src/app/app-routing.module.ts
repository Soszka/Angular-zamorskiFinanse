import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { OfertsComponent } from './oferts/oferts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'firma', component: CompanyComponent },
  { path: 'oferty', component: OfertsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}