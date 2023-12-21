import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oferts-preview',
  templateUrl: './oferts-preview.component.html',
  styleUrl: './oferts-preview.component.scss'
})
export class OfertsPreviewComponent {
  constructor(private router: Router, private el: ElementRef) {}

  navigateToOferts() {
    this.router.navigate(['/oferts']).then(() => {
      this.el.nativeElement.ownerDocument.body.scrollTop = 0;
    });
  }
}
