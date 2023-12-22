import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderNavComponent } from './header-nav/header-nav.component'
import { HeroComponent } from './hero/hero.component';
import { ValuesComponent } from './values/values.component';
import { AboutComponent } from './about/about.component';
import { TitleComponent } from './title/title.component';
import { OfertsPreviewComponent } from './oferts-preview/oferts-preview.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { OfertsComponent } from './oferts/oferts.component';
import { CompanyComponent } from './company/company.component';
import { HomeComponent } from './home/home.component';
import { ExpandedNavComponent } from './header-nav/expanded-nav/expanded-nav.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    HeroComponent,
    ValuesComponent,
    AboutComponent,
    TitleComponent,
    OfertsPreviewComponent,
    OurWorkComponent,
    ContactComponent,
    FooterComponent,
    OfertsComponent,
    CompanyComponent,
    HomeComponent,
    ExpandedNavComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FontAwesomeModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}