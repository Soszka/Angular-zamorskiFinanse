import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertsPreviewComponent } from './oferts-preview.component';

describe('OfertsPreviewComponent', () => {
  let component: OfertsPreviewComponent;
  let fixture: ComponentFixture<OfertsPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfertsPreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfertsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
