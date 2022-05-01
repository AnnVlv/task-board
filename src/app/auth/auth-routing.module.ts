import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';

const paths: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', component: LoginComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(paths),
  ],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
