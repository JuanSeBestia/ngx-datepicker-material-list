import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatSelectModule,
  MatRadioModule,
  MatGridListModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCardModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { DatepickerMaterialListComponent } from './datepicker-material-list.component';
@NgModule({
  declarations: [DatepickerMaterialListComponent],
  imports: [
    BrowserModule,
    MatDatepickerModule,
    NoopAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatRadioModule,
    MatGridListModule,
    MatInputModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatCardModule
    // FlexLayoutModule
  ],
  providers: [],
  exports: [DatepickerMaterialListComponent]
  // entryComponents: [DatepickerMaterialListComponent]
})
export class DatepickerMaterialListModule {}
