import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileVenueComponent } from './user-profile-venue.component';

describe('UserProfileVenueComponent', () => {
  let component: UserProfileVenueComponent;
  let fixture: ComponentFixture<UserProfileVenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileVenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
