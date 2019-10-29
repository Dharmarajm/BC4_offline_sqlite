import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CgreportsPage } from './cgreports.page';
import { TranslateModule } from '@ngx-translate/core';

import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { CgViewReportPage } from './cg-view-report/cg-view-report.page'
import { CgReportModalPage } from './cg-report-modal/cg-report-modal.page';

import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File  } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Toast } from '@ionic-native/toast/ngx';

const routes: Routes = [
  {
    path: '',
    component: CgreportsPage
  },
  {
    path: 'cg-view-report',
    component: CgViewReportPage
  },
  {
    path: 'cg-report-modal',
    component: CgReportModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicModule,
    TranslateModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CgreportsPage,CgViewReportPage,CgReportModalPage],
  providers:[DatePipe,
      ImagePicker,
      Crop,
      FileTransfer,
      File,
      WebView,
      Toast
  ]
})
export class CgreportsPageModule {}
