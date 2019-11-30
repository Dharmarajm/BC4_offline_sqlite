import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CgexpensesPage } from './cgexpenses.page';
import { TranslateModule } from '@ngx-translate/core';


import { CgExpenseAnalyticsPage } from './cg-expense-view-analytics/cg-expense-view-analytics.page';
import { CgExpenseFiltersPage } from './cg-expense-filters/cg-expense-filters.page';
import { CgExpenseviewSummaryPage } from './cg-expense-view-summary/cg-expense-view-summary.page';

import { Toast } from '@ionic-native/toast/ngx';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { CalendarModule } from 'ion2-calendar';
import { DataBaseSummaryProvider } from '../../sqlite-database/database_provider';

const routes: Routes = [
  {
    path: '',
    component: CgexpensesPage
  },{
    path: 'cg-expense-analytics',
    component: CgExpenseAnalyticsPage
  },
  {
    path: 'cg-expense-view-summary',
    component: CgExpenseviewSummaryPage
  },
  {
    path: 'cg-expense-filter',
    component: CgExpenseFiltersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    ReactiveFormsModule,
    CalendarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CgexpensesPage,CgExpenseAnalyticsPage, CgExpenseviewSummaryPage,CgExpenseFiltersPage],
  providers: [DatePipe,Toast,DataBaseSummaryProvider]
})
export class CgexpensesPageModule {}
