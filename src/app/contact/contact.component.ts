import { Component } from '@angular/core';
import { faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

interface contactItem {
  link: string,
  aosDelay: number,
  icon: IconDefinition,
  name: string
}


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

  contactItems: contactItem[] = [
    {
      link: 'https://www.instagram.com/zamorski.finanse',
      aosDelay: 0,
      icon: faInstagram,
      name: 'Instagram'
    },
    {
      link: 'https://www.linkedin.com/in/jakub-zamorski-25a257189',
      aosDelay: 250,
      icon: faLinkedin,
      name: 'LinkedIn'
    },
    {
      link: 'https://www.facebook.com/profile.php?id=61555214611076',
      aosDelay: 500,
      icon: faFacebook,
      name: 'Facebook'
    },
    {
      link: 'mailto:jakub.zamorski@phinance.pl',
      aosDelay: 750,
      icon: faEnvelope,
      name: 'Email'
    }
  ]
}
