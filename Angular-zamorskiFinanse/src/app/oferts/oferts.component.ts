import { Component } from '@angular/core';

interface Ofert {
  title: string;
  description: string;
  image: string;
  isActive: boolean;
  delay: number
}

@Component({
  selector: 'app-oferts',
  templateUrl: './oferts.component.html',
  styleUrl: './oferts.component.scss'
})
export class OfertsComponent {
  sectionName: string = 'Oferty';
  oferts: Ofert[] = [
    {
      title: 'Ubezpieczenie na życie',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit',
      image: '../../assets/OfertsPhoto1.jpg',
      isActive: false,
      delay: 0
    },
    {
      title: 'Ubezpieczenie zdrowotne',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit',
      image: '../../assets/OfertsPhoto2.jpg',
      isActive: false,
      delay: 200
    },
    {
      title: 'Inwestycje kapitału',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit',
      image: '../../assets/OfertsPhoto3.jpg',
      isActive: false,
      delay: 400
    },
    {
      title: 'Programy oszczędnościowe',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit',
      image: '../../assets/OfertsPhoto4.jpg',
      isActive: false,
      delay: 600
    },
    {
      title: 'Ubezpieczenie majątkowe',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit',
      image: '../../assets/OfertsPhoto5.jpg',
      isActive: false,
      delay: 100
    },
    {
      title: 'Ubezpieczenie komunikacyjne',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit',
      image: '../../assets/OfertsPhoto6.jpg',
      isActive: false,
      delay: 200
    },
    {
      title: 'Kredyty',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit',
      image: '../../assets/OfertsPhoto7.jpg',
      isActive: false,
      delay: 300
    },
    {
      title: 'Nieruchomości',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit',
      image: '../../assets/OfertsPhoto8.jpg',
      isActive: false,
      delay: 300
    },
    {
      title: 'Leasing',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit',
      image: '../../assets/OfertsPhoto9.jpg',
      isActive: false,
      delay: 300
    },
    {
      title: 'Oferta dla firm',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit',
      image: '../../assets/OfertsPhoto10.jpg',
      isActive: false,
      delay: 300
    },
  ]

  toggleActive(selectedOfert: Ofert) {
    this.resetActiveStates();
    selectedOfert.isActive = !selectedOfert.isActive;
  }

  private resetActiveStates() {
    this.oferts.forEach(ofert => ofert.isActive = false);
  }
}
