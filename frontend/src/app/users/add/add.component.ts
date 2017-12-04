import { Component, OnInit, Input } from '@angular/core';
import { Http, HttpModule, Response } from '@angular/http';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  private apiUrl = 'http://localhost:3000/api';
  user: any = {
    name: null,
    email: null
  };

  constructor(private http: Http, private router: Router) {}

  ngOnInit() {}

  onSubmit(f: NgForm) {
    console.log(f, this.user);

    this.http.post(this.apiUrl + '/users', this.user)
      .map((res: Response) => res.json())
      .subscribe(user => {
        console.log(user);
        this.user = user;
        this.router.navigate(['/users']);
      });
  }
}
