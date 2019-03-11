import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {IndexComponent} from './index/index.component';
import {ExperienceComponent} from './experience/experience.component'; 
import {CameraComponent} from './camera/camera.component'; 

const routes: Routes = [
	{path:'profile',component: ProfileComponent},
	{path:'experience',component: ExperienceComponent},
	{path:'index',component: IndexComponent},
	{path:'camera',component:CameraComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
