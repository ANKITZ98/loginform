import { Component } from '@angular/core';
import {FormGroup,FormControl,FormBuilder, NgForm,Validators} from '@angular/forms'

import { from } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'style';
  signupForm:FormGroup;
  

  


constructor(private fb:FormBuilder) { };



ngOnInit(){
  this.signupForm=this.fb.group({

    username:"",
    password:""



  })
  this.signupForm.valueChanges.subscribe(console.log)

}

signupForm=new FormGroup({
username:new FormControl('',Validators.required),
password:new  FormControl ('')

})
get username(){return this.signupForm.get('username')}


}


