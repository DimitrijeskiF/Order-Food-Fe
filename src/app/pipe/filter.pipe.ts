import { Pipe, PipeTransform } from '@angular/core';
import {Item} from "../interfaces/ingredients.model";

@Pipe({
  name: 'FilterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, input: any): any {
    if (input) {
      return value.filter((val: Item) => val.name.toLowerCase().indexOf(input.toLowerCase()) >= 0);
    } else {
      return value;
    }
  }

}
