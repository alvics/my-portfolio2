import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss']
})
export class ContactModalComponent {
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
