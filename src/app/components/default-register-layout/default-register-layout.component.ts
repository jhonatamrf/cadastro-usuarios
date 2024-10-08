import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-register-layout',
  standalone: true,
  imports: [],
  templateUrl: './default-register-layout.component.html',
  styleUrl: './default-register-layout.component.scss'
})
export class DefaultRegisterLayoutComponent {
  @Input() title: string = "";
  @Input() registerBtnText: string = "";
  @Input() disableRegisterBtn: boolean = true;
  @Output("submit") onSubmit = new EventEmitter();

  submit(){
    this.onSubmit.emit();
  }
}
