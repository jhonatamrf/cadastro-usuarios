import { Component } from '@angular/core';
import { DefaultRegisterLayoutComponent } from '../../components/default-register-layout/default-register-layout.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    DefaultRegisterLayoutComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
