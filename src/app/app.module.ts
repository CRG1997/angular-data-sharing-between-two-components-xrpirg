import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SampleModule } from './sample/sample.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { SharedService } from './shared.service';
import { EventService } from './event-args';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, SecondComponent, FirstComponent],
  bootstrap: [AppComponent],
  providers: [SharedService,EventService],
  entryComponents: []
})
export class AppModule { }
