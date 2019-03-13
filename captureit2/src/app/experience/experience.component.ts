import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {FormBuilder, FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  
  messageForm: FormGroup;
  submitted=false;
  success=false;

  constructor(private formBuilder: FormBuilder) {
  	this.messageForm= this.formBuilder.group({
  			title:['',Validators.required],
  			hash:['',Validators.required],
  			mood:['',Validators.required],
  			comment:['',Validators.required]
  		})
   }

  onSubmit(){
  	this.submitted=true;

  	if (this.messageForm.invalid){
  		return;
  	}

  	this.success=true;
  }

  ngOnInit() {
  }

 

}
