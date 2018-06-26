import { Component,  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from
'@angular/forms';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.scss']
})
export class HireComponent {

  contactForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.contactForm = fb.group({
            contactFormName: ['', Validators.required],
            contactFormEmail: ['', [Validators.required, Validators.email]],
            contactFormSubject: ['', Validators.required],
            contactFormMessage: ['', Validators.required]
        });
    }
  }