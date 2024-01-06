import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from '@angular/common'; 

@Component({
  selector: 'app-oferts-preview',
  templateUrl: './oferts-preview.component.html',
  styleUrl: './oferts-preview.component.scss'
})
export class OfertsPreviewComponent {
  constructor(private router: Router, private viewportScroller: ViewportScroller) {}

  navigateToOferts() {
    this.router.navigate(['/oferty']).then(() => {
      this.viewportScroller.scrollToPosition([0, 0]);
    });
  }
}
