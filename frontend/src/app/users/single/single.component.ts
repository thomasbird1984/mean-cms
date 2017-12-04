import { Http, HttpModule, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  private apiUrl = 'http://localhost:3000/api';
  user: any = {};

  constructor(
    private http: Http,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    const id = this.route.snapshot.paramMap.get('id');

    this.http.get(this.apiUrl + '/users/'+ id)
      .map((res: Response) => res.json())
      .subscribe(user => {
        console.log(user);
        this.user = user;
      });
  }
}
