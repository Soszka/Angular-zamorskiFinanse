import { Component, HostListener } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.scss'
})
export class HeaderNavComponent {
  faBars = faBars;
  faTimes = faTimes;
  isNavExpanded: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkAndCloseNav();
  }

  toggleNav(): void {
    this.isNavExpanded = !this.isNavExpanded;
    if (this.isNavExpanded) {
      document.body.classList.add('overflowY-hidden');
    } else {
      document.body.classList.remove('overflowY-hidden');
    }
    setTimeout(() => {
      AOS.refresh();
    }, 750); 
  }

  private checkAndCloseNav(): void {
    const screenWidth = window.innerWidth;
    const breakpointWidth = 1024;
    if (screenWidth >= breakpointWidth && this.isNavExpanded) {
      this.isNavExpanded = false;
      document.body.classList.remove('overflowY-hidden');
      AOS.refresh();
    }
  }

  handleClickedLink() {
    this.toggleNav();
  }
}
