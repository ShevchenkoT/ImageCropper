import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ImageCropperModule } from 'ngx-image-cropper';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DndDirective } from './shared/Dnd.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DndDirective,
  ],
  imports: [
    BrowserModule,
    ImageCropperModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
