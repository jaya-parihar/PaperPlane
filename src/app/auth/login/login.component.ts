import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  faLock,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import { faFacebookSquare,
faGooglePlus, } from "@fortawesome/free-brands-svg-icons";
import { AuthServiceService } from '../Services/auth-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | any;
  constructor(private router:Router,
    private formBuilder: FormBuilder,
    private authService: AuthServiceService,
    private toastr: ToastrService
    ){
      this.loginForm = formBuilder.group({
        email: new FormControl(),
        password: new FormControl(),
        remember: new FormControl(),
      })
    }
    resourceLoad:boolean = false;
  ngOnInit(): void {
  }

  faLock = faLock;
  faEnvelope = faEnvelope;
  faFacebookSquare = faFacebookSquare;
  faGooglePlus = faGooglePlus;

  goTo(): void{
    this.router.navigate(['vendor/register']);
  }

  

  onLogin()
  {
    this.resourceLoad = true;
    let loginVendor = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    }

    this.authService.loginVendor(loginVendor).subscribe(
      (res => {
        //console.log(res);
        if(res.message == "Login Success!" && res.token)
        {
          localStorage.setItem("token", res.token);
          localStorage.setItem("login", res.message);
          this.toastr.success("Login success!");
          this.router.navigateByUrl("/vendor/home")
        }
        else
        {
          this.resourceLoad = false;
          this.toastr.error("Inavalid Email or Password");
        }
        
      }),
      (err) => {
        this.resourceLoad = false;
        console.log(err);
        this.toastr.error("Something Went Wrong!");
      }
    );
  }
}
