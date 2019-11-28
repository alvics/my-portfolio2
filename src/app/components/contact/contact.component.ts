import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
// import { resetApplicationState } from '../../../../node_modules/@angular/core/src/render3/instructions';
import { Title, Meta } from '@angular/platform-browser';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeInUp, flipInX } from 'ng-animate';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(
        '* => *',
        useAnimation(fadeInUp, {
          params: { timing: 1, delay: 0 }
        })
      )
    ]),
    trigger('flipInX', [
      transition(
        '* => *',
        useAnimation(flipInX, {
          params: { timing: 2, delay: 0 }
        })
      )
    ])
  ]
})
export class ContactComponent implements OnInit {
  defaultImage =
    'https://res.cloudinary.com/ewebdesigns/image/upload/v1569452602/gc1_fxwfgf.jpg';
  image = '/assets/images/gc1.jpg';

  name = 'Contact';
  itemName = '';
  itemEmail = '';
  itemSubject = '';
  itemMessage = '';
  form;
  items: Observable<any[]>;
  contactForm: FormGroup;

  title = 'Contact | Allen Pavic';

  constructor(
    private fb: FormBuilder,
    private db: AngularFireDatabase,
    private titleService: Title,
    private meta: Meta
  ) {
    this.items = db.list('messages').valueChanges();

    this.contactForm = fb.group({
      contactFormName: ['', Validators.required],
      contactFormEmail: ['', [Validators.required, Validators.email]],
      contactFormSubject: ['', Validators.required],
      contactFormMessage: ['', Validators.required]
    });
  }

  onSubmit() {
    this.db.list('/messages').push({
      name: this.itemName,
      email: this.itemEmail,
      subject: this.itemSubject,
      message: this.itemMessage
    });
    alert('Thanks, your message has gone through!');
  }

  clearForm() {
    this.contactForm.reset();
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);

    this.meta.updateTag({
      name: 'keywords',
      content:
        'contact, allen pavic, wordpress developer, angular developer, gold coast, queensland, australia'
    });

    this.meta.updateTag({
      name: 'description',
      content:
        'Contact Allen Pavic for your next Web Development project, WordPress or Angular development here on the Gold Coast.'
    });
  }
}
