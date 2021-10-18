import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {RegisterFormComponent} from '../../component/user/register-form/register-form.component';
import {LoginFormComponent} from '../../component/user/login-form/login-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {EditAccountComponent} from '../../component/user/edit-account/edit-account.component';
import {UserEditAccountComponent} from '../../component/user/user-edit-account/user-edit-account.component';
import {EditComponent} from '../../component/user/edit/edit.component';


@NgModule({
  declarations: [
    RegisterFormComponent,
    LoginFormComponent,
    EditAccountComponent,
    UserEditAccountComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,

  ],
    exports: [
        RegisterFormComponent,
        LoginFormComponent,
    ]
})
export class UserModule {
}
