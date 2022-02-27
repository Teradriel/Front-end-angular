import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './pages/cv/cv.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

const routes: Routes = [
  { path: 'home', component: PortfolioComponent },
  //{ path: 'about', component:  },
  //{ path: 'item/:id', component: },
  //{ path: 'search/:termino', component: },
  //{ path: 'contact', component:  },
  { path: 'cv', component: CvComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
