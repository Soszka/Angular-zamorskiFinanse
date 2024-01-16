import { Component } from '@angular/core';
import { faUserTie,
  faHandshake,
  faBalanceScale,
  faShieldAlt, 
  faSmile, 
  faHandsHelping }
from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

interface value {
  icon: IconDefinition,
  header: string,
  description: string
}

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrl: './values.component.scss'
})
export class ValuesComponent {
  faUserTie = faUserTie;
  faHandshake = faHandshake;
  faBalanceScale = faBalanceScale;
  faShieldAlt = faShieldAlt;
  faSmile = faSmile;
  faHandsHelping = faHandsHelping;

  values: value[] = [
    {
      icon: faHandshake,
      header: 'Zaufanie',
      description: 'Działam na bazie transparentności, uczciwości i wysokiej jakości usług.'
    },
    {
      icon: faBalanceScale,
      header: 'Niezależność',
      description: 'Współpracuje ze wszystkimi instytucjami finansowymi w Polsce.'
    },
    {
      icon: faShieldAlt,
      header: 'Bezpieczeństwo',
      description: 'Jestem licencjowanym doradcą finansowym pod nadzorem KNF.'
    },
    {
      icon: faSmile,
      header: 'Radość',
      description: 'Świadczę usługi z entuzjazmem, czerpiąc radość z pomagania i rozwiązywania problemów.'
    },
    {
      icon: faUserTie,
      header: 'Profesjonalizm',
      description: 'Znając język finansowy, sprawdzam za klienta ogólne warunki umowy.'
    },
    {
      icon: faHandsHelping,
      header: 'Współpraca',
      description: 'Wraz z moim Teamem oferuje spotkania osobiste i zdalne na terenie całej Polski.'
    }
  ]
}
