import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  modalForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.modalForm = fb.group({
      modalFormNameEx: ['', Validators.required],
      modalFormEmailEx: ['', [Validators.email, Validators.required]],
      modalFormSubjectEx: ['', Validators.required],
      modalFormTextEx: ['', Validators.required]
    });
  }
}
