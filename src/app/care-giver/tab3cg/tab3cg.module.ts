import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3cPage } from './tab3cg.page';
import { ImagePicker, ImagePickerOptions  } from '@ionic-native/image-picker/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File, FileEntry, IFile } from '@ionic-native/file/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';

import { FilePath } from '@ionic-native/file-path/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { AlertController } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
//import { Base64 } from '@ionic-native/base64/ngx';
import { EditCGProfilePage } from './cg-edit-profile/cg-edit-profile.page';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { Toast } from '@ionic-native/toast/ngx';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: Tab3cPage },{path: 'cg-edit-profile', component: EditCGProfilePage}])
  ],
  declarations: [Tab3cPage,EditCGProfilePage],
   providers: [
  ImagePicker,
  Crop,
  Camera,
  FileTransfer,
  File,
  FilePath,
  FileChooser,
 // Base64,
  WebView,
  Clipboard,
  AlertController,
  Toast
  ]
})
export class Tab3PageModule {}
