import { Component } from '@angular/core';

interface Ofert {
  title: string;
  description: string;
  image: string;
  imageSm: string;
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
  isMediumScreen!: boolean;

  ngOnInit() {
    this.isMediumScreen = window.innerWidth <= 768; 
    window.addEventListener('resize', () => {
      this.isMediumScreen = window.innerWidth <= 768; 
    });
  }
  oferts: Ofert[] = [
    {
      title: 'Ubezpieczenie na życie',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit',
      image: '../../assets/OfertsPhoto1.jpg',
      imageSm: '../../assets/OfertsPhoto11.jpg',
      isActive: false,
      delay: 0
    },
    {
      title: 'Ubezpieczenie zdrowotne',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit',
      image: '../../assets/OfertsPhoto2.jpg',
      imageSm: '../../assets/OfertsPhoto12.jpg',
      isActive: false,
      delay: 150
    },
    {
      title: 'Inwestycje kapitału',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit',
      image: '../../assets/OfertsPhoto3.jpg',
      imageSm: '../../assets/OfertsPhoto13.jpg',
      isActive: false,
      delay: 300
    },
    {
      title: 'Programy oszczędnościowe',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit',
      image: '../../assets/OfertsPhoto4.jpg',
      imageSm: '../../assets/OfertsPhoto14.jpg',
      isActive: false,
      delay: 450
    },
    {
      title: 'Ubezpieczenie majątkowe',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit',
      image: '../../assets/OfertsPhoto5.jpg',
      imageSm: '../../assets/OfertsPhoto15.jpg',
      isActive: false,
      delay: 600
    },
    {
      title: 'Ubezpieczenie komunikacyjne',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit',
      image: '../../assets/OfertsPhoto6.jpg',
      imageSm: '../../assets/OfertsPhoto16.jpg',
      isActive: false,
      delay: 300
    },
    {
      title: 'Kredyty',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit',
      image: '../../assets/OfertsPhoto7.jpg',
      imageSm: '../../assets/OfertsPhoto17.jpg',
      isActive: false,
      delay: 300
    },
    {
      title: 'Nieruchomości',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit',
      image: '../../assets/OfertsPhoto8.jpg',
      imageSm: '../../assets/OfertsPhoto18.jpg',
      isActive: false,
      delay: 300
    },
    {
      title: 'Leasing',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit',
      image: '../../assets/OfertsPhoto9.jpg',
      imageSm: '../../assets/OfertsPhoto19.jpg',
      isActive: false,
      delay: 300
    },
    {
      title: 'Oferta dla firm',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit',
      image: '../../assets/OfertsPhoto10.jpg',
      imageSm: '../../assets/OfertsPhoto20.jpg',
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
