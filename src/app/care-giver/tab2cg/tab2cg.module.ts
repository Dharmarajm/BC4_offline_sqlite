import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2cPage } from './tab2cg.page';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { addPatientPage } from './add-patient/add-patient.page';
import { Toast } from '@ionic-native/toast/ngx';
import { DataBaseSummaryProvider } from '../../sqlite-database/database_provider';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: Tab2cPage },
      { path: 'add_patient',component:addPatientPage}
    ])
  ],
  declarations: [Tab2cPage,addPatientPage],
  providers:[Toast,DataBaseSummaryProvider]
})
export class Tab2PageModule {}
