import { Component } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faBuilding, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  faBriefcase = faBriefcase;
  faLinkedin = faLinkedin;
  faBuilding = faBuilding;
  faEnvelope = faEnvelope;
}
