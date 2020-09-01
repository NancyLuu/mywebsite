import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {
    path: '', 
    component: AboutComponent, 
    pathMatch: 'full'
  },
  {
    path: '', 
    component: AboutComponent,
    outlet: 'about-content'
  },
  {
    path: '', 
    component: PortfolioComponent,
    outlet: 'portfolio-content'
  },
  {
    path: '', 
    component: ResumeComponent,
    outlet: 'resume-content'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
