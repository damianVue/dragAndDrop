import { Directive, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDragDrop]'
})
export class DragDropDirective {

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onFileDropped = new EventEmitter<any>();


  @HostBinding('style.background-color') private background = '#f1f2f5';
  @HostBinding('style.border-color') private border = '#d0d3dc';
  @HostBinding('style.opacity') private opacity = '1';

  // Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#d0d3dc';
    this.border = '#f1f2f5';
    this.opacity = '0.8';
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#f1f2f5';
    this.border = '#d0d3dc';
    this.opacity = '1.0';
  }

  // Drop listener
  @HostListener('drop', ['$event']) public drop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#f1f2f5';
    this.border = '#d0d3dc';
    this.opacity = '1.0';
    const files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.onFileDropped.emit(files);
    }
  }

}
