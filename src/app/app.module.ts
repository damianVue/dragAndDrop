import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DragDropDirective } from './drag-drop.directive';
import { UploadFilesComponent } from './upload-files/upload-files.component';

@NgModule({
  declarations: [
    AppComponent,
    DragDropDirective,
    UploadFilesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
