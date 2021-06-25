import { Component, OnInit } from '@angular/core';
import { PostResponse } from 'src/app/interfaces/post-response.interface';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  posts:PostResponse[]=[];

  constructor(private postService:PostService) {

  }

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
    console.log(this.posts);
  }

}
