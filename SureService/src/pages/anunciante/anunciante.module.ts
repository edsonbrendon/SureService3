import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnunciantePage } from './anunciante';

@NgModule({
  declarations: [
    AnunciantePage,
  ],
  imports: [
    IonicPageModule.forChild(AnunciantePage),
  ],
})
export class AnunciantePageModule {}
