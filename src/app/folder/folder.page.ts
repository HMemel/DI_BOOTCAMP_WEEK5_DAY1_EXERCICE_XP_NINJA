import { Posts } from './../models/post.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { log } from 'console';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public posts!:Posts[];

  constructor(private service : ApiService) { }

  ngOnInit() {
    // this.posts = this.service.fetchData();
    console.log(this.service.fetchData())
  }

}
