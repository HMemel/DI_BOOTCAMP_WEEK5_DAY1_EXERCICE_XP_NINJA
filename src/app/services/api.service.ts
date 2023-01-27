import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Posts } from '../models/post.model';
import { resolve } from 'dns';
import { rejects } from 'assert';

@Injectable({
    providedIn: 'root'
  })

export class ApiService {

  endpoint = 'https://jsonplaceholder.typicode.com/posts';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  async fetchData(): Promise<Posts[]> {
    return new Promise((resolve, rejects) => {
        this.httpClient.get(this.endpoint, this.httpOptions).subscribe((datas: any)=>{
          const posts= [datas];
          for(let data in datas){
            // let response: Posts = 
            // {
            //   title: datas[data].title,
            //   body: datas[data].body, 
            //   id: datas[data].id, 
            //   userId: datas[data].userId,
            // }
            posts.push(datas[data])
          }
          resolve(posts)
      })
    })
  }             
}
