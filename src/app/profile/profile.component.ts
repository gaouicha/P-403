import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  users: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
  	this.data.getUsers().subscribe(data =>{
  		this.users=data;
  		console.log(this.users);
  	})
  }

}
