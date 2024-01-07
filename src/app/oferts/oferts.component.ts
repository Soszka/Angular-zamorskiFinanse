import { Component } from '@angular/core';

interface Ofert {
  title: string;
  description: string;
  image: string;
  imageSm: string;
  isActive: boolean;
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
      description: 'Zabezpiecz swoją przyszłość. Oferuję ubezpieczenia na życie dostosowane do Twoich potrzeb, zapewniające spokój i bezpieczeństwo.',
      image: '../../assets/OfertsPhoto1.jpg',
      imageSm: '../../assets/OfertsPhoto11.jpg',
      isActive: false,   },
    {
      title: 'Ubezpieczenie zdrowotne',
      description: 'Dla Ciebie i Twojego zdrowia. Znajdę ubezpieczenie dopasowane do Twoich potrzeb, dbając o Twój komfort i bezpieczeństwo.',
      image: '../../assets/OfertsPhoto2.jpg',
      imageSm: '../../assets/OfertsPhoto12.jpg',
      isActive: false,
    },
    {
      title: 'Inwestycje kapitału',
      description: 'Twój kapitał, Twój rozwój. Oferuję spersonalizowane inwestycje, dostosowane do Twoich celów finansowych i planów na przyszłość.',
      image: '../../assets/OfertsPhoto3.jpg',
      imageSm: '../../assets/OfertsPhoto13.jpg',
      isActive: false,
    },
    {
      title: 'Programy oszczędnościowe',
      description: 'Oszczędzaj mądrze, ja pomogę. Znajdę dla Ciebie program oszczędnościowy, który wspiera Twoje cele finansowe.',
      image: '../../assets/OfertsPhoto4.jpg',
      imageSm: '../../assets/OfertsPhoto14.jpg',
      isActive: false,
    },
    {
      title: 'Ubezpieczenie majątkowe',
      description: 'Ochrona Twojego majątku. Znajdę dla Ciebie ubezpieczenie majątkowe, dostosowane do  potrzeb i wartości posiadanych dóbr.',
      image: '../../assets/OfertsPhoto5.jpg',
      imageSm: '../../assets/OfertsPhoto15.jpg',
      isActive: false,
    },
    {
      title: 'Ubezpieczenie komunikacyjne',
      description: 'Bezpieczna podróż ze mną. Oferuję ubezpieczenia komunikacyjne, zapewniające kompleksową ochronę dla Ciebie i Twojego pojazdu.',
      image: '../../assets/OfertsPhoto6.jpg',
      imageSm: '../../assets/OfertsPhoto16.jpg',
      isActive: false,
    },
    {
      title: 'Kredyty',
      description: 'Oferuję elastyczne kredyty, dostosowane do Twoich potrzeb i planów, abyś mógł osiągnąć zamierzone cele.',
      image: '../../assets/OfertsPhoto7.jpg',
      imageSm: '../../assets/OfertsPhoto17.jpg',
      isActive: false,
    },
    {
      title: 'Nieruchomości',
      description: 'Twój dom, Twoje bezpieczeństwo. Pomagam w realizacji marzeń o nieruchomości, oferując wsparcie i dostosowane rozwiązania finansowe.',
      image: '../../assets/OfertsPhoto8.jpg',
      imageSm: '../../assets/OfertsPhoto18.jpg',
      isActive: false,
    },
    {
      title: 'Leasing',
      description: 'Rozwijaj się ze mną. Oferuję elastyczne opcje leasingu, dostosowane do Twoich potrzeb , wspierając rozwój Twojej działalności.',
      image: '../../assets/OfertsPhoto9.jpg',
      imageSm: '../../assets/OfertsPhoto19.jpg',
      isActive: false,
    },
    {
      title: 'Oferta dla firm',
      description: 'Twoja firma, moje rozwiązania. Oferuję kompleksową ofertę dla firm, dostosowaną do indywidualnych potrzeb i celów biznesowych.',
      image: '../../assets/OfertsPhoto10.jpg',
      imageSm: '../../assets/OfertsPhoto20.jpg',
      isActive: false,
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
