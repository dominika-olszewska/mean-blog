import { Component, OnInit } from '@angular/core';
import {postData} from "../post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  postData = [];

  constructor() {
    this.postData = postData;
  }

  ngOnInit(): void {
  }

}
