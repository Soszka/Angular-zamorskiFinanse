import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faBuilding, faEnvelope, faHome} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-expanded-nav',
  templateUrl: './expanded-nav.component.html',
  styleUrl: './expanded-nav.component.scss',
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: '0',
        opacity: '0',
      })),
      state('expanded', style({
        height: '100vh',
        opacity: '1',
      })),
      transition('collapsed <=> expanded', animate(750)),
    ])
  ],
})
export class ExpandedNavComponent {
  faBriefcase = faBriefcase;
  faLinkedin = faLinkedin;
  faBuilding = faBuilding;
  faEnvelope = faEnvelope;
  faHome = faHome;

  @Input() isNavExpanded!: boolean;
  @Output() clickedLinkEvent = new EventEmitter<void>();

  get stateName(): string {
    return this.isNavExpanded ? 'expanded' : 'collapsed';
  }

  clickedLink() {
    this.clickedLinkEvent.emit();
  }
}
