import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MicuentaPage } from './micuenta';

@NgModule({
  declarations: [
    MicuentaPage,
  ],
  imports: [
    IonicPageModule.forChild(MicuentaPage),
  ],
})
export class MicuentaPageModule {}
