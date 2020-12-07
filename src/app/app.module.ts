import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';
import { AboutComponent } from './about/about.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AnouncementsComponent } from './anouncements/anouncements.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FindUsComponent } from './find-us/find-us.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideosComponent,
    AboutComponent,
    ToolbarComponent,

    AnouncementsComponent,

    FooterComponent,

    SignInComponent,

    SignUpComponent,

    FindUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
