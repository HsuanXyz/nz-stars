import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tagsFilter'
})
export class TagsFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
