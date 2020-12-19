import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = new FormControl();
  password = new FormControl();
  formControls = {
    "username": this.username,
    "password": this.password
  }

  loginFormGroup = new FormGroup(this.formControls, [Validators.required]);

  constructor(private router: Router) { }

  verifyCredentials(): void {
    if (this.password.value == '' || this.username.value == '') {
      this.fireValidation();
    } else {
      this.router.navigate(['dashboard']);
    }
  }

  fireValidation() {
    alert("invalid credentials");
  }

  ngOnInit(): void {
  }

}
