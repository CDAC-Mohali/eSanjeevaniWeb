import { Component, OnInit } from '@angular/core';

import { PublicService } from '../services/public.service';
import {Router,ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./public.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;  
username: string;
password: string;

  constructor(private router: Router,private PublicService: PublicService
   
    ) {  
    
   }

 

  ngOnInit() {

  
     
  }
  login() : void {
   
  
    this.loading = true;
    this.PublicService.login(this.username, this.password)
        .subscribe(
          
            data => {

              alert(JSON.stringify(data));
                this.router.navigate([this.returnUrl]);
            },
            error => {
              
              alert(JSON.stringify(error));
                this.loading = false;
            });
  }
  

}
