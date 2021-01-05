import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthInsuranceQuoteComponent } from './health-insurance-quote.component';

describe('HealthInsuranceQuoteComponent', () => {
  let component: HealthInsuranceQuoteComponent;
  let fixture: ComponentFixture<HealthInsuranceQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthInsuranceQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthInsuranceQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
