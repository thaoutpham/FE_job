import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginFormComponent} from '../../component/user/login-form/login-form.component';
import {RegisterFormComponent} from '../../component/user/register-form/register-form.component';
import {MatSliderModule} from '@angular/material/slider';
import {HttpClientModule} from '@angular/common/http';
import {EditAccountComponent} from '../../component/user/edit-account/edit-account.component';
import {UserEditAccountComponent} from '../../component/user/user-edit-account/user-edit-account.component';
import {EditComponent} from '../../component/user/edit/edit.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'register',
    component: RegisterFormComponent
  }, {
    path: 'account',
    component: EditAccountComponent
  }, {
    path: 'edit-account',
    component: UserEditAccountComponent
  },
  {
    path: 'edit',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatSliderModule, HttpClientModule],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
