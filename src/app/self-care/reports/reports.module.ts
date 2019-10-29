import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReportsPage } from './reports.page';
import { TranslateModule } from '@ngx-translate/core';
//import { PipesModule } from '../self-common-service/pipe.module';

import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { AddReportPage } from './add-report/add-report.page';
import { EditReportPage } from './edit-report/edit-report.page'
import { ViewReportPage } from './view-report/view-report.page'
import { ReportModalPage } from './report-modal/report-modal.page';

import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File  } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { DataBaseSummaryProvider } from '../../sqlite-database/database_provider';


const routes: Routes = [
  {
    path: '',
    component: ReportsPage
  },
  {
    path: 'add-report',
    component: AddReportPage
  },
  {
    path: 'edit-report',
    component: EditReportPage
  },
  {
    path: 'view-report',
    component: ViewReportPage
  },
  {
    path: 'report-modal',
    component: ReportModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //PipesModule,
    TranslateModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
  ReportsPage,
  AddReportPage,
  EditReportPage,
  ViewReportPage,
  ReportModalPage
  ],
  providers:[DatePipe,
      ImagePicker,
      Crop,
      FileTransfer,
      File,
      WebView,
      Camera,
      Toast,
      DataBaseSummaryProvider
  ]
})
export class ReportsPageModule {}
