import { ElementRef } from '@angular/core';
import { ResaltarDirective } from '../resaltar/resaltar.directive';

describe('ResaltarDirective', () => {
  const elementSpy = jasmine.createSpyObj<ElementRef>('ElementRef', {
    nativeElement: { style: { backgroundColor: ''}}
  });
  const directive = new ResaltarDirective(elementSpy);

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
