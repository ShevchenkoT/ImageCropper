import { Component } from '@angular/core';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  imageChangedEvent!: Event | null;
  croppedImage: string = '';

  constructor() { }

  imageCropped({ base64 }: any): void {
    this.croppedImage = base64;
    localStorage.setItem('croppedImg', this.croppedImage);
  }

  saveImage(): void {
    const croppedImg = localStorage.getItem('croppedImg');
    if (croppedImg) {
      saveAs(croppedImg, `croppedImage.jpg`);
    }
  }

  removeImage(): void {
    this.imageChangedEvent = null;
    this.croppedImage = '';
    localStorage.removeItem('croppedImg');
  }

  fileBrowseHandler(event: Event) {
    this.imageChangedEvent = event;
  }

}
