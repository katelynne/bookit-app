import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileArtistDetailsComponent } from './user-profile-artist-details.component';

describe('UserProfileArtistDetailsComponent', () => {
  let component: UserProfileArtistDetailsComponent;
  let fixture: ComponentFixture<UserProfileArtistDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileArtistDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileArtistDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
