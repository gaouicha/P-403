import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {IndexComponent} from './index/index.component';
import {ExperienceComponent} from './experience/experience.component'; 
import {WebcamComponent} from './webcam/webcam.component'; 

const routes: Routes = [
	{path:'profile',component: ProfileComponent},
	{path:'experience',component: ExperienceComponent},
	{path:'index',component: IndexComponent},
	{path:'camera',component:WebcamComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
