import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QueesPage } from './quees';

@NgModule({
  declarations: [
    QueesPage,
  ],
  imports: [
    IonicPageModule.forChild(QueesPage),
  ],
})
export class QueesPageModule {}
