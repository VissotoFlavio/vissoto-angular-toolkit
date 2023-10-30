import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

import { CodeViewer } from './interfaces/code-viewer.interface';
import hljs from 'highlight.js';

@Component({
  selector: 'app-code-viewer',
  templateUrl: './code-viewer.component.html',
  styleUrls: ['./code-viewer.component.scss'],
})
export class CodeViewerComponent implements AfterViewInit {
  @Input() codeViewer: CodeViewer;

  @ViewChild('code') codeElement: ElementRef;

  ngAfterViewInit(): void {
    if (this.codeViewer) {
      let highlightedCode: string;
      if (this.codeViewer.language) {
        highlightedCode = hljs.highlight(this.codeViewer.code, {
          language: this.codeViewer.language,
        }).value;
      } else {
        const auto = hljs.highlightAuto(this.codeViewer.code);
        highlightedCode = auto.value;
      }
      this.codeElement.nativeElement.innerHTML = highlightedCode;
    }
  }
}
