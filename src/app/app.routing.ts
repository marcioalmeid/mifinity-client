import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {ListUser2Component} from "./list-user2/list-user2.component";
import {EditUserComponent} from "./edit-user/edit-user.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'list-user2', component: ListUser2Component},
  { path: 'edit-user', component: EditUserComponent },
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
