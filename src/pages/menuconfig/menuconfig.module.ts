import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuconfigPage } from './menuconfig';

@NgModule({
  declarations: [
    MenuconfigPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuconfigPage),
  ],
})
export class MenuconfigPageModule {}
