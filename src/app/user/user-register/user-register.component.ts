import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UserServiceService } from '../../Service/user-service.service';
import { User } from '../../model/user';
import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';

import { AlertifyService } from '../../Service/alertify.service';

import * as alertify from 'alertifyjs';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registerationForm!: FormGroup;
  user!: User;
  userSubmitted!: boolean;

  constructor(private userservice: UserServiceService,private alertify:AlertifyService, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    this.createRegisterationForm();
  }

  createRegisterationForm() {
    this.registerationForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)]),
      confirmPassword: new FormControl(null, Validators.required)
    }, { validators: this.passwordMatchingValidator });
  }

  passwordMatchingValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { notmatched: true };
  }

  onSubmit() {
    console.log(this.registerationForm.value);
    this.userSubmitted = true;
  
    if (this.registerationForm.valid) {
      if (typeof window !== 'undefined') {
        import('alertifyjs').then((alertify) => {
          // Use alertify.js functionality here
          const userData = this.userData(); // Call the function to get the User object
          this.userservice.addUser(userData);
          this.registerationForm.reset();
          this.userSubmitted = false;
          // alertify.success('Congratulations, You are successfully registered');
        }).catch((error) => {
          console.error('Error loading alertify.js:', error);
          // Handle the error or show a fallback message
        });
      }
    } else {
      // Handle the case where the form is not valid
      // this.alertify.error('Kindly provide the required fields');
    }
  }
  
  
  userData: () => User = () => {
    return {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      confirmPassword: this.confirmPassword.value,
      mobile: this.mobile.value,
    };
  }
  
  get userName() {
    return this.registerationForm.get('userName') as FormControl;
  }

  get email() {
    return this.registerationForm.get('email') as FormControl;
  }

  get password() {
    return this.registerationForm.get('password') as FormControl;
  }

  get confirmPassword() {
    return this.registerationForm.get('confirmPassword') as FormControl;
  }

  get mobile() {
    return this.registerationForm.get('mobile') as FormControl;
  }

}
