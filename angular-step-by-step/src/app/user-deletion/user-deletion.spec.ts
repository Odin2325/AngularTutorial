import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeletion } from './user-deletion';

describe('UserDeletion', () => {
  let component: UserDeletion;
  let fixture: ComponentFixture<UserDeletion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDeletion],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDeletion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
