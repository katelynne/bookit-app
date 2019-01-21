import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileArtistComponent } from './user-profile-artist.component';
import { UserProfileArtistDetailsComponent } from './user-profile-artist-details/user-profile-artist-details.component';

@NgModule({
  declarations: [UserProfileArtistComponent, UserProfileArtistDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class UserProfileArtistModule { }
