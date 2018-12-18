import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()
export class Client {
  config: any;
  BaseURL: string;
  PublicUrl: string;
  Token: string;
  User: any;
  loading: any;
  ImageUrl: any;
  constructor(private http: HttpClient, private storage: StorageService) {
    let currentUser = this.storage.get("gtcomp");
    this.User = currentUser;
    // local Serve
    this.BaseURL = "http://10.228.1.42:81";
    this.PublicUrl = "http://10.228.1.42:81";

    // Live Server
    // this.BaseURL = "http://api.etruckingsolution.com/api";
   // this.PublicUrl = "http://api.etruckingsolution.com/public";
    if (currentUser != null)
      this.Token = currentUser['auth'];
    this.ImageUrl = "http://tc.etruckingsolution.com";
    // this.ImageUrl =  "http://localhost:57207";
  }

  createAuthorizationHeader() {
    let currentUser = this.storage.get("gtcomp");
    if (currentUser != null)
      this.Token = currentUser['auth'];
    this.User = currentUser;
    var reqheaders = new HttpHeaders();
    //  headers.append('token', btoa(JSON.stringify(currentUser['user'])));
    if (currentUser != null)
      reqheaders = reqheaders.append('Authorization', 'Bearer ' + currentUser['auth']);
    var reqHeader = { headers: reqheaders };
    // console.log("header", currentUser['auth'], reqHeader);
    return reqHeader;
  }

  get(url) {
    var self = this;
    let headers = {};
    headers = this.createAuthorizationHeader();
    //console.log("Get All Companies", headers);
    // Processing("#Processing", "block");
    return this.http.get(this.BaseURL + url, headers).pipe(map(res => self.handlerData(res)));


  }
  getWithoutHeader(url) {
    var self = this;

    // Processing("#Processing", "block");
    return this.http.get(this.BaseURL + url, {}).pipe(map(res => self.handlerData(res)));


  }
  delete(url) {
    var self = this;
    let headers = {};
    headers = this.createAuthorizationHeader();
    return this.http.delete(this.BaseURL + url, headers).pipe(map(res => self.handlerData(res)));

  }
  post(url, data) {
    var self = this;
    let headers = {};
    headers = this.createAuthorizationHeader();
    return this.http.post(this.BaseURL + url, data, headers).pipe(map(res => self.handlerData(res)));

  }
  postWithoutHeader(url, data) {
    var self = this;
    return self.http.post(self.BaseURL + url, data, {}).pipe(map(res => self.handlerData(res)));

  }
  postfree(url, data) {
    var self = this;
    return self.http.post(self.BaseURL + url, data, {}).pipe(res => self.handlerData(res));

  }
  put(url, data) {
    var self = this;
    let headers = {};
    headers = this.createAuthorizationHeader();
    return this.http.put(this.BaseURL + url, data, headers).pipe(map(res => self.handlerData(res)));

  }
  private handleError(error: Response) {

    return Observable.throw({ requestStatus: 0, msg: "Server error", arr: [] });
  }

  private handlerData(error: any) {
    // console.log("result", error)
    //  Processing("#Processing", "none");
    return error;
  }
}
