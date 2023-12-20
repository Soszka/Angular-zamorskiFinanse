import { Component } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'Angular-zamorskiFinanse';
  
  ngOnInit() {
    AOS.init({
      once: true,
      duration: 1500
    });
  }
}