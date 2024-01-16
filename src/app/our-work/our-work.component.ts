import { Component } from '@angular/core';

interface workItem {
  icon: string,
  header: string,
  description: string
}

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrl: './our-work.component.scss'
})
export class OurWorkComponent {

  workItems: workItem[] = [
    {
      icon: 'timeline',
      header: 'Pomogę w realizacji długoterminowych celów',
      description: 'Oferuję wsparcie w planowaniu na przyszłość, abyś mógł śmiało podążać ku długoterminowym celom.'
    },
    {
      icon: 'account_balance',
      header: 'Przyjrzę się twoim produktom finansowym',
      description: 'Poprzez optymalizację umów, sprawdzam aktualne rozwiązania, dzięki czemu będę wiedział czy możemy zrobić to taniej lub korzystniej.'
    },
    {
      icon: 'security',
      header: 'Pomogę zadbać o bezpieczeństwo finansowe',
      description: 'Sprawdzone rozwiązania, jasne zasady i szeroka oferta zapewniają jakość i stabilność.'
    },
    {
      icon: 'verified_user',
      header: 'Zapewnię komfort korzystania z wszelkich usług',
      description: 'Tak dostosuję ofertę, byś doświadczył wygody i satysfakcji przy korzystaniu z moich usług.'
    }
  ]
}
