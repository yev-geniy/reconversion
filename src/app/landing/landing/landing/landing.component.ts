import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  email = new FormControl();

  constructor() {
    this.email = new FormControl('', [Validators.required, Validators.email]);
  }


  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Veuillez entrer un email valide';
    }

    return this.email.hasError('email') ? 'E-mail non valide' : '';
  }

  sendEmail() {
    console.log(this.email.value);
  }
}
