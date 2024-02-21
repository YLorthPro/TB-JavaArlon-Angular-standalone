import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class DemoPostService {

  apiUrl = "https://jsonplaceholder.typicode.com/"

  constructor(private readonly _httpClient: HttpClient) {
  }

  getAll(){
    return this._httpClient.get<User[]>(this.apiUrl + "users")
  }

  insert(utilisateur: User){
    return this._httpClient.post(this.apiUrl, utilisateur)
  }

  getOne(){
    return this._httpClient.get<User>(this.apiUrl + "users/" + 1);
  }
}
