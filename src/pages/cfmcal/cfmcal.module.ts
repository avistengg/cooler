import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CfmcalPage } from './cfmcal';

@NgModule({
  declarations: [
    CfmcalPage,
  ],
  imports: [
    IonicPageModule.forChild(CfmcalPage),
  ],
})
export class CfmcalPageModule {}
