import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DocVisitsPage } from './doc-visits.page';
import { docVisitsDiaryRecord } from './doc-visits-record/doc-visits-record.page';

import { TranslateModule } from '@ngx-translate/core';
//import { PipesModule } from '../self-common-service/pipe.module';

import { MediaCapture, MediaFile, CaptureError, CaptureAudioOptions, CaptureImageOptions } from '@ionic-native/media-capture/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { StreamingMedia, StreamingVideoOptions, StreamingAudioOptions } from '@ionic-native/streaming-media/ngx';
import { CalendarModule } from 'ion2-calendar';
import { DatePipe } from '@angular/common';
import { Toast } from '@ionic-native/toast/ngx';
import { UploadPage } from './upload/upload.page'
import { ReactiveFormsModule } from '@angular/forms';

import { DataBaseSummaryProvider } from '../../sqlite-database/database_provider';

const routes: Routes = [
  {
    path: '',
    component: DocVisitsPage
  },{
    path: 'doc-visits-record',
    component: docVisitsDiaryRecord
  },
  {
    path: 'doc-visits-upload',
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
    CalendarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DocVisitsPage,docVisitsDiaryRecord,UploadPage],
  providers: [MediaCapture,File,Media,FileTransfer,StreamingMedia,DatePipe,Toast,DataBaseSummaryProvider],
})
export class DocVisitsPageModule {}
