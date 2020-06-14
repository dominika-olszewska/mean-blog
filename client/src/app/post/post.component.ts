import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Post, postData} from "../post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  postId = null;
  post: Post;

  constructor(activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      this.postId = params.id;
    });
  }

  ngOnInit(): void {
    this.post = this.getPost();
  }

  getPost(): Post {
    if (this.postId === null) {
      return null;
    } else {
      return postData.find(post => post.id === this.postId);
    }
  }

}
