import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { Title, Meta } from '@angular/platform-browser';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeInUp, flipInX } from 'ng-animate';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.scss'],
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
export class HireComponent implements OnInit {
  defaultImage =
    'https://ewebdesigns.com.au/wp-content/uploads/2019/09/blurred-min.jpg';
  image = '/assets/images/hero1.jpeg';

  name = 'Hire me';
  itemName = '';
  itemEmail = '';
  itemSubject = '';
  itemMessage = '';
  items: Observable<any[]>;
  contactForm: FormGroup;

  title = 'Hire Angular Developer | Allen Pavic';

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
    alert('Your message has been sent.');

    this.db.list('/messages').push({
      name: this.itemName,
      email: this.itemEmail,
      subject: this.itemSubject,
      message: this.itemMessage
    });
  }

  clearForm() {
    this.contactForm.reset();
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.meta.updateTag({
      name: 'keywords',
      content:
        'Hire, allen pavic, angular developer, wordpress developer from the gold coast, queensland, australia. Affordable rates!'
    });

    this.meta.updateTag({
      name: 'description',
      content:
        'Hire, allen pavic, angular developer, wordpress developer from the gold coast, queensland, australia. Great cheap rates!'
    });
  }
}
