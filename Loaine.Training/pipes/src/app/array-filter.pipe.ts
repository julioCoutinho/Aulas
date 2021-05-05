import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFilter'
})
export class ArrayFilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let filter = args.toString();
    return value.filter(
      v => v.toString().indexOf(filter) != -1
    );
  }

}
