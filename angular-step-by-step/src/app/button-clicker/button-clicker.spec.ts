import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonClicker } from './button-clicker';

describe('ButtonClicker', () => {
  let component: ButtonClicker;
  let fixture: ComponentFixture<ButtonClicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonClicker],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonClicker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
