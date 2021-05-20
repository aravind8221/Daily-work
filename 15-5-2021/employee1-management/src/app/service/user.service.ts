import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../model/user";

@Injectable({
    providedIn: 'root'
  })
  export class UserService {
    baseUrl = 'http://localhost:8000/api/users';
    constructor(private httpClient: HttpClient) { }
    getAllEmployees(): Observable<User[]> {
      return this.httpClient.get<User[]>(this.baseUrl);
    }
}