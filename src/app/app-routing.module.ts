import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'List of Projects' }
  },
  {
    path: 'projects/personal',
    component: ProjectsComponent,
    data: { projectType: 'Personal' }
  },
  {
    path: 'projects/commercial',
    component: ProjectsComponent,
    data: { projectType: 'Commercial' }
  },
  {
    path: 'project-details/:id',
    component: ProjectDetailsComponent,
    data: { title: 'Project Details' }
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
