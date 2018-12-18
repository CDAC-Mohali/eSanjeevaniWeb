import { Injectable } from '@angular/core';

@Injectable()

export class AppConfig {
    config = {
        name: 'My HealthRecord',
        // title: 'Smart Agency is web app for websites analysis',
        // description: 'Smart Agency is web app for websites analysis',
        version: '1.0',
        apiurl: 'http://localhost:3000/api/',
        apiloginurl: 'http://localhost:3000',
        debug: true,
        limit: 20,

    };

    constructor() {
    }
    getConfig(): Object {
        return this.config;
    }
}

export function closest(el, selector) {
    let matchesFn: string;
    ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
        if (typeof document.body[fn] == 'function') {
            matchesFn = fn;
            return true;
        }
        return false;
    })
    var parent;
    // traverse parents
    while (el) {
        parent = el.parentElement;
        if (parent && parent[matchesFn](selector)) {
            return parent;
        }
        el = parent;
    }
    return null;
}
export function fullLoader(typ) { if (typ == true) { document.getElementsByTagName("body")[0].classList.add('full_loader'); } else { document.getElementsByTagName("body")[0].classList.remove('full_loader'); } }
export function getuser(params) {
    //    var user = localStorage.getItem('currentUser');
    //    user = JSON.stringify(user);
    //    var data = [];    
    //    for(let x of params){
    //        data.push(user.user_id);
    //    }
}
