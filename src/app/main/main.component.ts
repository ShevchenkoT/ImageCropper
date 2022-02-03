import { Component } from '@angular/core';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  imageChangedEvent!: Event;
  croppedImage: string = '';

  constructor() { }

  fileChangeEvent(event: Event): void {
    this.imageChangedEvent = event;
  }

  imageCropped({ base64 }: any): void {
    this.croppedImage = base64;
    localStorage.setItem('croppedImg', this.croppedImage);
  }
  saveImage() {
    const croppedImg = localStorage.getItem('croppedImg');
    if (croppedImg) {
      saveAs(croppedImg, `km.jpg`);
    }
  }
}
