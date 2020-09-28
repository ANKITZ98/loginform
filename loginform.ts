import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class HomeComponent implements OnInit {
  user={email:'',password:''};
  loginForm: FormGroup;
  
  constructor(private fb: FormBuilder, private routerModule: RouterModule,private router:Router) {
    
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required,
      Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      password: ['', Validators.required]
    });
    this.loginForm.valueChanges.subscribe(console.log)
  }

  isValidInput(fieldName): boolean {
    return this.loginForm.controls[fieldName].invalid &&
      (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
  }

  login(): void {
    console.log(this.loginForm.value);
    if(this.user.email=="ankit@gmail.com" && this.user.password=="password"){
      this.router.navigate(['/dashboard'])
      
 }
 else{
   alert("login failed")

   
 }
      
    }

    
    
    
  }
  
    
  
  
  
