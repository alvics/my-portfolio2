
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { resetApplicationState } from '../../../../node_modules/@angular/core/src/render3/instructions';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name = 'Contact';
  itemName = '';
  itemEmail = '';
  itemSubject = '';
  itemMessage = '';
  form;
  items: Observable<any[]>;
  

  contactForm: FormGroup;

    constructor(private fb: FormBuilder, private db: AngularFireDatabase) {
      this.items = db.list('messages').valueChanges();

        this.contactForm = fb.group({
            contactFormName: ['', Validators.required],
            contactFormEmail: ['', [Validators.required, Validators.email]],
            contactFormSubject: ['', Validators.required],
            contactFormMessage: ['', Validators.required]
        });
    }
    
    onSubmit() {
      this.db.list('/messages').push({ name: this.itemName, email: this.itemEmail, subject: this.itemSubject, message: this.itemMessage});
      alert('Thank you for contacting us, your message has gone through!')
      }

      clearForm() {
         this.contactForm.reset();
        }
  }
