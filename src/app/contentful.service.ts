

import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { Entry } from 'contentful';

import * as marked from 'marked';


@Injectable({
  providedIn: 'root'
})
export class ContentfulService {


private client = contentful.createClient({
  space: environment.contentful.spaceId,
  accessToken: environment.contentful.token
});

  constructor() { }

  // console logs a response for debugging
   logContent(contentId) {
     this.client.getEntry(contentId)  // retrieve the content
       .then((entry) => console.log(entry));  // returns a promise of the content we want
  } 

  // Retrieves content mapped to its data fields
  /* getContent(contentId) {
    const promise = this.client.getEntry(contentId);
    return Observable.fromPromise(promise).map(entry => entry.fields);
  } */ 

  getContents(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'layouts'
    }, query))
    .then(res => res.items);
  }

 /* getContent(layoutsId): Promise<Entry<any>> {
   return this.client.getEntries(Object.assign({
     content_type: 'layouts'
   }, {'sys.id': layoutsId }))
   .then(res => res.items[0]);
 } */

  /* getImages(query?: object): Promise<Entry<any>[]> {
  return this.client.getEntries(Object.assign({
    content_type: 'images'
  }, query))
  .then(res => res.items);
 }

 getImage(imagesId): Promise<Entry<any>> {
  return this.client.getEntries(Object.assign({
    content_type: 'images'
  }, {'sys.id': imagesId }))
  .then(res => res.items[0]);
} */

markdownToHtml(md: string) {
  return marked(md);
}

}
