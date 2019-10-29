import { Component, OnInit, NgZone, ViewChild, OnDestroy } from '@angular/core';
import { MediaCapture, MediaFile, CaptureError, CaptureAudioOptions, CaptureImageOptions } from '@ionic-native/media-capture/ngx';
import { File, FileEntry, IFile } from '@ionic-native/file/ngx';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { Platform, AlertController, ToastController, ModalController } from '@ionic/angular';
import { settingsService } from '../../self-common-service/settings/settings.service';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { environment } from '../../../../environments/environment';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { stringify } from 'querystring';
import { UploadPage } from '../upload/upload.page';
import { Toast } from '@ionic-native/toast/ngx';
import { untilDestroyed } from '../../untilDestroyed/until-destroyed'
import { DatabaseProvider } from '../../../sqlite-database/database';
import { DataBaseSummaryProvider } from '../../../sqlite-database/database_provider';

@Component({
  selector: 'app-health-diary-record',
  templateUrl: 'health-diary-record.page.html',
  styleUrls: ['../health-diary.page.scss'],
})
export class healthDiaryRecord {
  @ViewChild('name_auto', { static: true }) input;


  recording: boolean = false;
  fileuri: any[];
  filePath: string;
  fileName: string;
  OriginalFileName: any;
  audioRecordPath: any;
  audio: MediaObject;
  audioList: any[] = [];
  sec: number = 0;
  time: any = "00:00:00";
  interval: any;
  zero: any;
  show: any;
  description: any;
  playURI: any;
  isenabled: boolean = true;
  audioTrack: boolean = false;
  recordStart: boolean = false;
  Stop: boolean = false;
  Pause: boolean = false;
  tabBar: any;
  event_name: any;
  progress?: number = 0;
  proBar: boolean = false;
  public unsubscribeBackEvent: any;
  alert: any;
  alertcontrol: any;
  public resetBackButton: any;
  statement: any = "record";
  myModal: any;
  counter: number = 0;
  localPlayURL:any;
  currentPath = '/self-care-tabs/tabs/tab1/health-diary/health-diary-record'

  constructor(private toast: Toast, public modalCtrl: ModalController, private router: Router, public toastController: ToastController, private transfer: FileTransfer, private mediaCapture: MediaCapture, private media: Media, private file: File, public platform: Platform, public alertController: AlertController, public service: settingsService, public _zone: NgZone, private statusBar: StatusBar,private database: DatabaseProvider,private databaseSummary: DataBaseSummaryProvider) {
    this.tabBar = document.getElementById('myTabBar');
    this.tabBar.style.display = 'none';
  }

  ngOnInit() {
  }
  ngOnDestroy() { }


  ionViewDidEnter() {
    this.platform.backButton.pipe(untilDestroyed(this)).subscribe(() => {
      if (this.router.url === this.currentPath && this.statement === "record") {
        this.router.navigate(['self-care-tabs/tabs/tab1/health-diary'], { skipLocationChange: true })
      }
      if (this.router.url === this.currentPath && this.statement === "pause") {
        this.recordBack();
      }
      if (this.router.url === this.currentPath && this.statement === "stop") {
        this.recordBack();
        this.myModal.dismiss();
      }
    });
  }

  ionViewWillEnter() {
    this.statusBar.backgroundColorByHexString('#ff68ab');
    this.show = 3;
    this.statement = "record";
  }

  start() {

    if (this.audioTrack == false && this.recordStart == false) {
      this.statement = "pause"
      this.fileName = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.mp3';

      this.file.createFile(this.file.externalDataDirectory, this.fileName, true).then(() => {
        this.filePath = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.fileName;
        localStorage.setItem("play", this.filePath);
        this.audio = this.media.create(this.filePath);
        this.audioTrack = true;
        this.Stop = true;
        this.Pause = true;
        this.show = 1;
        this.audio.startRecord();

        this.audio.onSuccess.subscribe(() => console.log('Action is successful'));

        this.audio.onError.subscribe(error => console.log('Error!', error));
        this.recording = true;


        this.time = "00:00:00";
        this.sec = 0;
        this.interval = setInterval(() => {
          this.sec += 1;
          this.time = this.secondsToTime(this.sec)
        }, 1000);
        this.recording = true;
      }).catch(e => console.log(e));
    } else {
      if (this.recordStart == false) {
        this.audioTrack = false;
        this.Pause = false;
        this.recordStart = true;
        this.audio.pauseRecord();
        clearInterval(this.interval);

      } else {
        this.audioTrack = true;
        this.recordStart = false;
        this.Pause = true;
        this.audio.resumeRecord();
        this.interval = setInterval(() => {
          this.sec += 1;
          this.time = this.secondsToTime(this.sec)
        }, 1000);

      }
    }
  }

  stop() {
    this.statement = "stop";
    this.isenabled = false;
    this.Stop = false;
    this.show = 2;
    clearInterval(this.interval);
    this.audio.stopRecord();
    this.audio.release();
    let fromDirectory = this.file.externalDataDirectory;
    let toDirectory = this.file.externalDataDirectory
    let OldfileName = this.fileName;
    let NewfileName = this.fileName + 'healthdiary' + '.mp3';
    this.file.copyFile(fromDirectory, OldfileName, toDirectory, NewfileName).then((res) => {
      console.log(res)
      this.OriginalFileName = res['name'];
      let nativeFileURL = res['nativeURL'];
      this.localPlayURL = this.file.externalDataDirectory.replace(/file:\/\//g, '') + this.OriginalFileName;
      console.log(nativeFileURL)

      this.file.resolveLocalFilesystemUrl(nativeFileURL).then((fileEntry: FileEntry) => {
        return new Promise((resolve, reject) => {
          fileEntry.file(meta => resolve(meta), error => reject(error));
        });
      }).then((fileMeta: IFile) => {
        console.log(fileMeta)
        let type = fileMeta.type.split('/');
        let dir = fileMeta['localURL']
        this.audioRecordPath = dir;
        this.upload();
      }).catch(err => console.log(err));
    }, err => {
      console.log('err: ', err);
    });

  }


  startRecord() {
    if (this.platform.is('ios')) {
      this.fileName = new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.3gp';
      this.filePath = this.file.documentsDirectory.replace(/file:\/\//g, '') + this.fileName;
      this.audio = this.media.create(this.filePath);
    } else if (this.platform.is('android')) {
      this.fileName = 'record' + new Date().getDate() + new Date().getMonth() + new Date().getFullYear() + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds() + '.3gp';
      this.filePath = this.file.dataDirectory.replace(/file:\/\//g, '') + this.fileName;
      this.audio = this.media.create(this.filePath);
    }
    this.audio.startRecord();
    this.recording = true;
  }


  stopRecord() {
    this.audio.stopRecord();
    let data = { filename: this.fileName };
    this.audioList.push(data);
    localStorage.setItem("audiolist", JSON.stringify(this.audioList));
    this.recording = false;
    //this.getAudioList();
  }


  secondsToTime(secs) {
    var hours = Math.floor(secs / (60 * 60));
    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);
    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);
    if (seconds < 10) {
      this.zero = "0" + seconds;
      seconds = this.zero;
    }
    if (minutes < 10) {
      this.zero = "0" + minutes;
      minutes = this.zero;
    }
    if (hours < 10) {
      this.zero = "0" + hours;
      hours = this.zero;
    }
    var obj = hours + ":" + minutes + ":" + seconds;
    return obj;
  }


  async recordBack() {
    console.log("hi")
    this.alertcontrol = await this.alertController.create({
      header: 'Reset',
      backdropDismiss: false,
      message: 'Do you want to Discard?',
      buttons: [
        {
          text: 'Yes',
          role: 'cancel',
          handler: () => {
            console.log("delete")
            this.router.navigate(['self-care-tabs/tabs/tab1/health-diary'], { skipLocationChange: true })
          }
        }, {
          text: 'No',
          handler: () => {
            this.upload();
          }
        }
      ]

    });
    await this.alertcontrol.present();
  }
  async upload() {
    let data = { fileName: this.OriginalFileName, path: this.audioRecordPath };
    this.myModal = await this.modalCtrl.create({
      component: UploadPage,
      cssClass: 'bottom_sheet',
      showBackdrop: false,
      backdropDismiss: false,
      componentProps: data
    });
    this.myModal.onDidDismiss().then((res) => {
      if (res.data != undefined) {
        let getData = res.data;
        this.proBar = true;
        this.fileuri=[];
        this.database.createAnEvent(getData).then((res)=>{
             let event_id:any=res['event_id'];
             this.fileuri.push({ "localURI": this.localPlayURL,"globalURI": null,"cdvFilePath":this.audioRecordPath,"fileName":this.OriginalFileName })
             this.addAudioData(event_id);
        })
        .catch(error=>{ 
          this.proBar=false;
        });
        // const fileTransfer: FileTransferObject = this.transfer.create();
        // this.progress = 0;
        // fileTransfer.upload(this.audioRecordPath, getData.api, getData.options).then(res => {
        //   this.proBar = false;
        //   this.presentToast('Health diary record updated successfully')
        //   this.router.navigate(['self-care-tabs/tabs/tab1/health-diary'], { skipLocationChange: true })
        // }, error => {
        //   this.proBar = false;
        // })
        // fileTransfer.onProgress((progressEvent) => {

        //   this._zone.run(() => {
        //     if (progressEvent.lengthComputable) {
        //       var perc = Math.floor(progressEvent.loaded / progressEvent.total * 100);
        //       this.progress = perc;
        //     }
        //   })
        // });
      } else {
        this.router.navigate(['self-care-tabs/tabs/tab1/health-diary'], { skipLocationChange: true })
      }
    })


    return await this.myModal.present();
  

  }

  addAudioData(event_id){
    let data = {
      "event_options": {
        "localAudioPath": this.fileuri
      }
    }
    
    this.database.updateAnEventImage(event_id,data).then((res)=>{
        console.log(res);  
        this.proBar=false;
        this.router.navigate(['self-care-tabs/tabs/tab1/health-diary'],{skipLocationChange: true });
    })
    .catch(error=>{ 
      console.log(error)
      this.proBar=false;
    });
  }


  async presentToast(message) {
    this.toast.show(message, '2000', 'bottom').subscribe(
      toast => {
        console.log(toast);
      });
  }


  play() {
    console.log(this.filePath)
    this.audio.play();
  }


  
  ionViewWillLeave() {
    this.tabBar.style.display = 'flex';
    this.myModal.dismiss();
    this.modalCtrl.dismiss();
    //this.resetBackButton = null;
    if (this.audioTrack == true) {
      this.audioTrack = false;
      this.audio.stop();
      this.audio.release();
    }

  }

}
