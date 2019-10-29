import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TermsConditionsPage } from './login/terms-conditions/terms-conditions.page';
import { AboutPage } from './login/about/about.page';
import { NavGuard } from './core/guards/nav.guard';

const routes: Routes = [
  { path: '',redirectTo: '/self-care-tabs/tabs/tab1', pathMatch: 'full'},
  { path: '',redirectTo: '/care-giver-tabs/tabsc/tab1c', pathMatch: 'full'},
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'self-care-tabs', loadChildren: './self-care/tabs/tabs.module#TabsPageModule',canActivate: [NavGuard] ,data: { role: "1" }  },
  { path: 'care-giver-tabs', loadChildren: './care-giver/tabscg/tabscg.module#TabsPageModule', canActivate: [NavGuard], data: { role: "2" } },
  { path: 'register', loadChildren: './register/register.module#registerPageModule' },
  { path: 'terms_conditions',component: TermsConditionsPage},
  { path: 'about',component: AboutPage},
  /*{ path: 'medications', loadChildren: './self-care/alerts/medications/medications.module#MedicationsPageModule' },
  { path: 'vitals', loadChildren: './self-care/alerts/vitals/vitals.module#VitalsPageModule' },
  { path: 'others', loadChildren: './self-care/alerts/others/others.module#OthersPageModule' }*/
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
}) 
export class AppRoutingModule {}
