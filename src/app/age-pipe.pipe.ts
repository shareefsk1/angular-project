import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agePipe'
})
export class AgePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value + " Years";
  }

}
