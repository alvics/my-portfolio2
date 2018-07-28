import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
title: string;
image: string;
h2: string;
h5: string;

   // Shared data between any unrelated components / (Any => Any) 
  // For data to be insnyc using BehaviorSubject from rxjs


  // creating a private variable titleSource to hold the current title value ("Default title")
  private titleSource = new BehaviorSubject<string>("Default title");
  // then define currentTitle variable and set it as an observable
   currentTitle = this.titleSource.asObservable();

  constructor() { }
 // create a function to call next() to change the title value
 changeTitle(title: string) {
  this.titleSource.next(title);
}



}
