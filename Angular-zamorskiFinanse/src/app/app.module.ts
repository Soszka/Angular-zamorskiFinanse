import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeroComponent } from './hero/hero.component';
import { ValuesComponent } from './values/values.component';
import { AboutComponent } from './about/about.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeroComponent,
    ValuesComponent,
    AboutComponent
  ],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}