import { IonicModule } from '@ionic/angular';
import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../../core/pipe.module';

import { Tab1cPage } from './tab1cg.page';
import { TranslateModule } from '@ngx-translate/core';
import { commonCareGiverPlay } from './common-care-giver-play/common-care-giver-play.page';

import { DatePipe } from '@angular/common';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Media } from '@ionic-native/media/ngx';
import { DataBaseSummaryProvider } from '../../sqlite-database/database_provider';

const routes: Routes = [
  {  
    path: '', 
    component: Tab1cPage
  },
  { 
    path: 'cg-alerts', 
    loadChildren: '../cgalerts/cgalerts.module#CgalertsPageModule'
  },
  { 
    path: 'cg-vitals', 
    loadChildren: '../cgvitals/cgvitals.module#CgvitalsPageModule'
  },
  { 
    path: 'cg-health-diary', 
    loadChildren: '../cghealth-diary/cghealth-diary.module#CghealthDiaryPageModule'
  },
  { 
    path: 'cg-appointments', 
    loadChildren: '../cgappointments/cgappointments.module#CgappointmentsPageModule'
  },
  { 
    path: 'cg-doc-visits', 
    loadChildren: '../cgdoc-visit/cgdoc-visit.module#CgdocVisitPageModule'
  },
  { 
    path: 'cg-prescriptions', 
    loadChildren: '../cgprescriptions/cgprescriptions.module#CgprescriptionsPageModule'
  },
  { 
    path: 'cg-reports', 
    loadChildren: '../cgreports/cgreports.module#CgreportsPageModule'
  },  
  { 
    path: 'cg-expenses', 
    loadChildren: '../cgexpenses/cgexpenses.module#CgexpensesPageModule'
  },
  {
    path: 'common-care-giver-play',
    component: commonCareGiverPlay
  }
]
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule,
    PipesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab1cPage,commonCareGiverPlay],
  providers:[File,FileTransfer,Media,DatePipe,DataBaseSummaryProvider,WebView]
})
export class Tab1PageModule {}
