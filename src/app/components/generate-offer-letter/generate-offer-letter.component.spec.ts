import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateOfferLetterComponent } from './generate-offer-letter.component';

describe('GenerateOfferLetterComponent', () => {
  let component: GenerateOfferLetterComponent;
  let fixture: ComponentFixture<GenerateOfferLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateOfferLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateOfferLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
