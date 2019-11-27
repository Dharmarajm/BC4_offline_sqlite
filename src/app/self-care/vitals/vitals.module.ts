import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VitalsPage } from './vitals.page';
import { TranslateModule } from '@ngx-translate/core';
import { AddVitalsPage } from './add-vitals/add-vitals.page';
import { AnalyticsPage } from './analytics/analytics.page';
import { FilterPage } from './filters/filter.page';
import { VitalReadingPage } from './vital-reading/vital-reading.page';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';  
import { Toast } from '@ionic-native/toast/ngx';
import { CalendarModule } from 'ion2-calendar';
import { DataBaseSummaryProvider } from '../../sqlite-database/database_provider';

const routes: Routes = [
  {
    path: '',
    component: VitalsPage
  },
  {
    path: 'add-vitals',
    component: AddVitalsPage
  },
  {
    path: 'analytics',
    component: AnalyticsPage
  },
  {
    path: 'filter',
    component: FilterPage
  },
  {
    path: 'vital-reading',
    component: VitalReadingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    CalendarModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[DatePipe,Toast,DataBaseSummaryProvider],
  declarations: [VitalsPage,
                 AddVitalsPage,
                 AnalyticsPage,
                 FilterPage,
                 VitalReadingPage
  ]
})
export class VitalsPageModule {}
