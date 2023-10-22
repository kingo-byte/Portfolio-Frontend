import { Component, OnInit } from '@angular/core';
import { User } from '../../services/models/User';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  user: User | null = { id: 0, userName: '', email: 'An Error has Occurred' };

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.userService
      .getUserById(1)
      .subscribe((response) => ((this.user = response), this.handleError));
  }

  private handleError(err: any) {
    console.log('Response Error. Status: ', err.status);
    console.log('Response Error. Status Text: ', err.statusText);
    console.log(err);
  }
}
