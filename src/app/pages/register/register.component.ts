import { Component } from '@angular/core';
import { DefaultRegisterLayoutComponent } from '../../components/default-register-layout/default-register-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { RegisterService } from '../../service/register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    DefaultRegisterLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers:[
    RegisterService
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerForm!: FormGroup;

  constructor(
    private router: Router,
    private registerService: RegisterService

  ){
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
    })
  }

  submit(){
    this.registerService.register(
      this.registerForm.value.name,
      this.registerForm.value.email,
      this.registerForm.value.password
    ).subscribe(
      {
        next: () => console.log("sucesso"),
        error: () => console.log("error")
      }
    )
  }

}
