import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileArtistComponent } from './user-profile-artist.component';

describe('UserProfileArtistComponent', () => {
  let component: UserProfileArtistComponent;
  let fixture: ComponentFixture<UserProfileArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
