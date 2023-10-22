import { Component, OnInit } from '@angular/core';
import { User } from '../../services/models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user: User | null = null;

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
