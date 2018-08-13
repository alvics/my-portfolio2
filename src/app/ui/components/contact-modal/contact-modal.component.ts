import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss']
})
export class ContactModalComponent {
  form;
  itemName = '';
  itemEmail = '';
  itemSubject = '';
  itemMessage = '';
  items: Observable<any[]>;
  myForm: FormGroup;
  
 constructor(private fb: FormBuilder, private db: AngularFireDatabase) { 

  this.myForm = fb.group({
    contactFormName: ['', Validators.required],
    contactFormEmail: ['', [Validators.required, Validators.email]],
    contactFormSubject: ['', Validators.required],
    contactFormMessage: ['', Validators.required]
});

    this.items = db.list('messages').valueChanges();
    }

  onSubmit() {
    this.db.list('/messages').push({ name: this.itemName, email: this.itemEmail, subject: this.itemSubject, message: this.itemMessage});
    alert('Thank you for contacting me, your message has gone through and I will get back to you ASAP!')
    }
}
