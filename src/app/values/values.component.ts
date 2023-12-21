import { Component } from '@angular/core';
import { faUserTie,
  faHandshake,
  faBalanceScale,
  faShieldAlt, 
  faSmile, 
  faHandsHelping }
from '@fortawesome/free-solid-svg-icons';

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
}
