import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFilterImpure'
})
export class ArrayFilterImpurePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
