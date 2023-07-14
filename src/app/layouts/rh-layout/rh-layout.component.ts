import { Component, OnInit } from '@angular/core';
import { loggedin } from 'src/app/services/models/loggedin';
import { AuthService } from 'src/app/services/service/auth.service';

@Component({
  selector: 'app-rh-layout',
  templateUrl: './rh-layout.component.html',
  styleUrls: ['./rh-layout.component.css'],
})
export class RhLayoutComponent implements OnInit {
  connectedUser: loggedin = {};

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.connectedUser = this.auth.getConnectedUser();
  }

  data = JSON.parse(localStorage.getItem('token')!!);
  logout() {
    this.auth.logOut();
  }
}
