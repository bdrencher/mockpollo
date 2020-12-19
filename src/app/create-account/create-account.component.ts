import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  username = new FormControl();
  firstPass = new FormControl();
  secondPass = new FormControl();
  formControls = {
    "username": this.username,
    "firstPass": this.firstPass,
    "secondPass": this.secondPass,
  };

  createAccountFormGroup = new FormGroup(this.formControls, [Validators.required]);

  constructor(private router: Router) { }

  createAccount() {
    if (this.firstPass.value != this.secondPass.value || this.firstPass.value == '') {
      alert("The passwords do not match or are invalid, please enter a different password");
    } else {
      this.router.navigate(['collectData']);
    }
  }

  ngOnInit(): void {
  }

}
