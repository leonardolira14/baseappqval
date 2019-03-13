import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CuestionarioPage } from './cuestionario';

@NgModule({
  declarations: [
    CuestionarioPage,
  ],
  imports: [
    IonicPageModule.forChild(CuestionarioPage),
  ]
})
export class CuestionarioPageModule {}
