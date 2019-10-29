import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { ExpensesPage } from './expenses.page';
import { viewAnalyticsPage } from './view-analytics/view-analytics.page';
import { FiltersPage } from './filters/filter.page';
import { TranslateModule } from '@ngx-translate/core';
import { addExpensesPage } from './add-expenses/add-expenses.page';
import { viewSummaryPage } from './view-summary/view-summary.page';
import { DatePipe } from '@angular/common';
import { CalendarModule } from 'ion2-calendar';
import { Toast } from '@ionic-native/toast/ngx';

const routes: Routes = [
  {
    path: '',
    component: ExpensesPage
  },{
    path: 'view-analytics',
    component: viewAnalyticsPage
  },
  {
    path: 'add-expenses',
    component: addExpensesPage
  },
  {
    path: 'view-summary',
    component: viewSummaryPage
  },
  {
    path: 'filters',
    component: FiltersPage
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
  declarations: [ExpensesPage,viewAnalyticsPage,addExpensesPage,viewSummaryPage, FiltersPage],
  providers: [DatePipe,Toast]
})
export class ExpensesPageModule {}
