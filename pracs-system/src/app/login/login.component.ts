import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { UserService } from '.././shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService,private router : Router) { }

  model={
    username :'',
    password:''
  }
  serverErrorMessages: string;
  ngOnInit() {
    if(this.userService.isLoggedIn())
    this.router.navigateByUrl('/studentprofile');
  }

  onSubmit(form : NgForm){
    this.userService.login(form.value).subscribe(
      res => {
        // console.log('form'+form.value['username']);
        var un=form.value['username'].split('');
        console.log(un);
        this.userService.setToken(res['token']);
        // if(res['work']=='student')
        if(un[0]=='t')
        this.router.navigateByUrl('/teacherprofile');
        else
        this.router.navigateByUrl('/studentprofile');
        // else if(res['work']=='teacher')
        // this.router.navigateByUrl('/teacherprofile');
      },
      err => {
        this.serverErrorMessages = err.error.message;
        console.log(this.serverErrorMessages);
      }
    );
  }


}
