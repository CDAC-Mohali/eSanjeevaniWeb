
import { Injectable } from '@angular/core';
//import { Http, Headers, Response } from '@angular/http';



import { StorageService,Client } from '../services/index';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PublicService {

  config: any;
  constructor(private http: Client, private storageService: StorageService) {
    
   
    this.config = http.BaseURL; 
    
  
  }


  login(username: string, password: string) {



    return this.http.post('/adminauthentication', { userName: username, password: password });
        
}

logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
}



}
