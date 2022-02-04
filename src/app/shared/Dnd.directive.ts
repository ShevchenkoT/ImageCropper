import { Directive, HostListener, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDnd]'
})
export class DndDirective {

  @Output() fileDropped: any = new EventEmitter();

  @HostListener('dragover', ['$event']) onDragOver(e: Event) {
    e.preventDefault();
    e.stopPropagation();
  }

  @HostListener('dragleave', ['$event']) onDragLeave(e: Event) {
    e.preventDefault();
    e.stopPropagation();
  }

  @HostListener('drop', ['$event']) onDrop(e: DragEvent | any) {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer?.files
    e.target.files = files;
    this.fileDropped.emit(e);
  }
}
