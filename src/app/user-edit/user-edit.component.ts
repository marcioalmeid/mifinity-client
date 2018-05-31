import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../shared/user/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit, OnDestroy {
  user: any = {};

  

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {
     this.route.params.takeUntil(componentDestroyed(this)).subscribe(params => {
      const id = params['id'];
      if (id) {
        this.userService.get(id).subscribe((user: any) => {
          if (user) {
            this.user = user;
            this.user.href = user._links.self.href;            
          } else {
            console.log(`User with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
  }

  gotoList() {
    this.router.navigate(['/user-list']);
  }

  save(form: NgForm) {
    this.userService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.userService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}