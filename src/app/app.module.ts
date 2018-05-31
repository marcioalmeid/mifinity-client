import { UserService } from './shared/user/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CarEditComponent } from './car-edit/car-edit.component';
import { UserEditComponent } from './user-edit/user-edit.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/car-list', pathMatch: 'full' },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'user-add',
    component: UserEditComponent
  },
  {
    path: 'user-edit/:id',
    component: UserEditComponent
  }
];
=======
import { CarEditComponent } from './car-edit/car-edit.component';
import { UserEditComponent } from './user-edit/user-edit.component';
>>>>>>> a67583186309795da861d2d0a5c49a1f3317507a

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
<<<<<<< HEAD
=======
    CarEditComponent,
>>>>>>> a67583186309795da861d2d0a5c49a1f3317507a
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
