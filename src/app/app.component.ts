import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MachinestalkUser } from './models/model';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  users$!: Observable<MachinestalkUser[]>;
  constructor(private userServices: UserService) {}
  ngOnInit(): void {
    this.users$ = this.userServices.getAllUsers();
  }
}
