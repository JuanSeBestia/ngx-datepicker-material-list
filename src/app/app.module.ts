import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatepickerMaterialListModule } from './datepicker-material-list/datepicker-material-list.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DatepickerMaterialListModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
