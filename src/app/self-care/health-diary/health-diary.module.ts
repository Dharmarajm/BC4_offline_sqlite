import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HealthDiaryPage } from './health-diary.page';
import { TranslateModule } from '@ngx-translate/core';
import { healthDiaryRecord } from './health-diary-record/health-diary-record.page';
//import { PipesModule } from '../self-common-service/pipe.module';
import { ReactiveFormsModule } from '@angular/forms';


import { MediaCapture, MediaFile, CaptureError, CaptureAudioOptions, CaptureImageOptions } from '@ionic-native/media-capture/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { StreamingMedia } from '@ionic-native/streaming-media/ngx';
import { DatePipe } from '@angular/common';
import { UploadPage } from './upload/upload.page';
import { Toast } from '@ionic-native/toast/ngx';

import { DataBaseSummaryProvider } from '../../sqlite-database/database_provider';

const routes: Routes = [
  {
    path: '',
    component: HealthDiaryPage
  },{
    path: 'health-diary-record',
    component: healthDiaryRecord
  },
  {
    path: 'upload-record',
    component: UploadPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,
    //PipesModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [MediaCapture,File,Media,FileTransfer,StreamingMedia,DatePipe,Toast,DataBaseSummaryProvider],
  declarations: [HealthDiaryPage,healthDiaryRecord,UploadPage]
})
export class HealthDiaryPageModule {}
