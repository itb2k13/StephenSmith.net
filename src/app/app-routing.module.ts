import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContentProviderComponent } from './content-provider/content-provider.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'List of Projects' }
  },
  {
    path: 'contact',
    component: ContentProviderComponent,
    data: { section: 'base', contentpath: 'contact' }
  },
  {
    path: 'projects/personal',
    component: ContentProviderComponent,
    data: { section: 'projects', contentpath: 'personal' }
  },
  {
    path: 'projects/commercial',
    component: ContentProviderComponent,
    data: { section: 'projects', contentpath: 'commercial' }
  },
  {
    path: 'projects/personal/:id',
    component: ProjectDetailsComponent,
    data: { title: 'Project Details' }
  },
  {
    path: 'dissertations',
    component: ContentProviderComponent,
    data: { section: 'base', contentpath: 'dissertations' }
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
