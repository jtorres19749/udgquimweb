import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImportsiauuPageRoutingModule } from './importsiauu-routing.module';

import { ImportsiauuPage } from './importsiauu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ImportsiauuPageRoutingModule
  ],
  declarations: [ImportsiauuPage]
})
export class ImportsiauuPageModule {}
