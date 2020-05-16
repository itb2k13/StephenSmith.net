import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContentProviderComponent } from './content-provider/content-provider.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { LoginComponent } from './login/login.component';
import { OktaCallbackComponent } from '@okta/okta-angular';

const routes: Routes = [
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: HomeComponent,
    data: { section: 'base', contentpath: 'home' }
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
    path: 'projects/other',
    component: ContentProviderComponent,
    data: { section: 'projects', contentpath: 'other' }
  },
  {
    path: 'projects/personal/:id',
    component: ProjectDetailsComponent,
    data: { section: 'projects', contentpath: 'personal' }
  },
  {
    path: 'projects/commercial/:id',
    component: ProjectDetailsComponent,
    data: { section: 'projects', contentpath: 'commercial' }
  },
  {
    path: 'projects/other/:id',
    component: ProjectDetailsComponent,
    data: { section: 'projects', contentpath: 'other' }
  },
  {
    path: 'academic',
    component: ContentProviderComponent,
    data: { section: 'base', contentpath: 'academic' }
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
