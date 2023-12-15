import { Component } from '@angular/core';
import { faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  sectionName: string = 'Kontakt';
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faFacebook = faFacebook;
  faEnvelope = faEnvelope;
}
