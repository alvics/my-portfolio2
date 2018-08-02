import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

itemName = '';
  itemEmail = '';
  itemSubject = '';
  itemMessage = '';
  items: Observable<any[]>;

   contactFormModalName = new FormControl('', Validators.required);
   contactFormModalEmail = new FormControl('', Validators.email);
   contactFormModalSubject = new FormControl('', Validators.required);
   contactFormModalMessage = new FormControl('', Validators.required);

constructor(private db: AngularFireDatabase) { 
    this.items = db.list('messages').valueChanges();
   
  }

 onSubmit() {
    this.db.list('/messages').push({ name: this.itemName, email: this.itemEmail, subject: this.itemSubject, message: this.itemMessage});
    }
}  
