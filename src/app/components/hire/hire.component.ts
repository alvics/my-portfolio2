import { Component,  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.scss']
})
export class HireComponent {
  name = "Hire me";
  itemName = '';
  itemEmail = '';
  itemSubject = '';
  itemMessage = '';
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
      }
  }