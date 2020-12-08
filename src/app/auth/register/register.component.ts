import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Register } from '../interface/register';

import { AuthServiceService } from "../Services/auth-service.service"

import { AuthModule  } from "../auth.module";

import { Validators} from '@angular/forms';

import {
  faEnvelope,
  faLock,
  faUser,
  faPhone} from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],

})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup | any;
  constructor(private formBuilder: FormBuilder, private authservice: AuthServiceService, private toastr: ToastrService) { 
    
    this.registerForm = formBuilder.group({
    fullname: new FormControl(),
    username: new FormControl(),
    contact: new FormControl(),
    gender: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    cpassword: new FormControl(),
    iagree: new FormControl(),
    })

  }

  ngOnInit(): void {
  }
  faEnvelope = faEnvelope;
  faLock =   faLock;
  faUser =   faUser;
  faPhone = faPhone;
  
  
  registerPost(){

    let newVendor = {
      full_name: this.registerForm.value.fullname,
      username: this.registerForm.value.username,
      country_code: "+91",
      contact: this.registerForm.value.contact,
      gender: 1,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      //cpassword: this.registerForm.value.cpassword,
      //iagree: this.registerForm.value.iagree
    };

    
    let resp:string = "";

    this.authservice.registerVendor(newVendor).subscribe( (data) => {
      resp = data.message;
      console.log(resp);
      if(resp === "registered")
      {
        this.toastr.success('Registered');
      }
      else{
        this.toastr.warning('Internal Server Error');
      }
      }
    );
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  
}
