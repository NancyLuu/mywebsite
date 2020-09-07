import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'portfolio'
})
export class PortfolioPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
