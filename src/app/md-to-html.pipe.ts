import { ContentfulService } from './contentful.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mdToHtml'
})
export class MdToHtmlPipe implements PipeTransform {

  constructor(private contenful: ContentfulService) {}

  transform(value: any, args?: any): any {
    return this.contenful.markdownToHtml(value);
  }

}
