import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeroComponent } from './hero/hero.component';
import { ValuesComponent } from './values/values.component';
import { AboutComponent } from './about/about.component';
import { TitleComponent } from './title/title.component';
import { OfertsPreviewComponent } from './oferts-preview/oferts-preview.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeroComponent,
    ValuesComponent,
    AboutComponent,
    TitleComponent,
    OfertsPreviewComponent,
    OurWorkComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FontAwesomeModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}