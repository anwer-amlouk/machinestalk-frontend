import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MachinestalkUser } from '../models/model';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private PATH = environment.basePath + '/machinestalk';
  constructor(private httpClient: HttpClient) {}

  getAllUsers(): Observable<MachinestalkUser[]> {
    return this.httpClient.get<MachinestalkUser[]>(this.PATH + '/users');
  }
}
