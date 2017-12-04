import { Component, OnInit } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  loading: boolean;
  private apiUrl = 'http://localhost:3000/api';
  users: any = [];

  constructor(private http: Http) {
      this.getUsers();
  }

  ngOnInit() {
  }

  getUsers() {
    this.http.get(this.apiUrl + '/users')
      .map((res: Response) => res.json())
      .subscribe(users => {
        console.log(users);
        this.users = users;
      });
  }
}
