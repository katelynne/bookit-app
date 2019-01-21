import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule, Router} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserProfileVenueComponent } from './user-profile-venue/user-profile-venue.component';
import { ProfilePhotoComponent } from './profile-photo/profile-photo.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import {UserProfileArtistComponent} from './user-profile-artist/user-profile-artist.component';
import { CommentsComponent } from './comments/comments.component';
import { RatingsComponent } from './ratings/ratings.component';

const routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin', component: AdminComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    UserProfileVenueComponent,
    ProfilePhotoComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    CommentsComponent,
    RatingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
