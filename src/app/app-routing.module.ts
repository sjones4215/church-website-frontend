import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindUsComponent } from './find-us/find-us.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'videos', component: VideosComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'find', component: FindUsComponent},
  { path: 'sign-up', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
