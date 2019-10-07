import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { DatepickerMaterialListComponent } from './datepicker-material-list.component';
@NgModule({
  declarations: [DatepickerMaterialListComponent],
  imports: [MatDatepickerModule],
  providers: [],
  exports: [DatepickerMaterialListComponent],
  // entryComponents: [DatepickerMaterialListComponent]
})
export class DatepickerMaterialListModule {}
