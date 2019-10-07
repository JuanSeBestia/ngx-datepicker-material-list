import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatepickerMaterialListModule } from './datepicker-material-list/datepicker-material-list.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DatepickerMaterialListModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
