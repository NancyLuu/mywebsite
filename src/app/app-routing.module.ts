import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '', component: AboutComponent, pathMatch: 'full'
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'portfolio', component: PortfolioComponent
  },
  {
    path: 'resume', component: ResumeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
