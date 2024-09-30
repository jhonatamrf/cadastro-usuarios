import { Component } from '@angular/core';
import { DefaultRegisterLayoutComponent } from '../../components/default-register-layout/default-register-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { RegisterService } from '../../service/register.service';
import { ToastrService } from 'ngx-toastr';

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
    private registerService: RegisterService,
    private toastService: ToastrService

  ){
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
    })
  }

  submit(){
    this.registerService.register(
      this.registerForm.value.name,
      this.registerForm.value.email,
      this.registerForm.value.password,
      this.registerForm.value.confirmPassword
    ).subscribe(
      {
        next: () => this.toastService.success("Cadastro feito com sucesso!"),
        error: () => this.toastService.error("Ops!, algo inesperado aconteceu. Tente novamente em alguns instantes!")
      }
    )
  }

}
