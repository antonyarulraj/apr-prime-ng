import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeIntlTelInputComponent } from './prime-intl-tel-input.component';

describe('PrimeIntlTelInputComponent', () => {
  let component: PrimeIntlTelInputComponent;
  let fixture: ComponentFixture<PrimeIntlTelInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeIntlTelInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeIntlTelInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
