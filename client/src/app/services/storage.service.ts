import { Injectable, Inject } from '@angular/core';
declare var jQuery: any;
@Injectable()
export class StorageService {
  constructor() {
    console.log("constructor: :  StorageService ");
  }
  contentComponentIdList: any = [];

  add(key: string, value: any) {
    console.log("key: ", key);
    this.remove(key);
    if (value) {
      value = JSON.stringify(value);
    }
    localStorage.setItem(key, value);
  }

  get<T>(key: string): T {
    let value: string = localStorage.getItem(key);

    if (value && value !== "undefined" && value !== "null") {
      try {
        return <T>JSON.parse(value);
      } catch (ex) {
        return null;
      }
    }
    return null;
  }

  remove(key: string) {
    console.log("remove is called!!");
    localStorage.removeItem(key);
  }

  IsValid(key) {
    let value: string = localStorage.getItem("gtcomp");

    if (value && value !== "undefined" && value !== "null") {
      try {
        var User = JSON.parse(value);
        if (User != null && User.userType== key)
          return true;
      } catch (ex) {
        return false;
      }
    }
    return false;
  }

  // theme change on dropdown------

  // text style //



}
