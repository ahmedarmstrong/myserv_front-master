import { Component, OnInit } from '@angular/core';
import { loggedin } from 'src/app/services/models/loggedin';
import { AuthService } from 'src/app/services/service/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css'],
})
export class AdminLayoutComponent implements OnInit {
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
