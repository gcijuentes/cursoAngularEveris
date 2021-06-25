import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  post:any = {};

  constructor(private activateRouted:ActivatedRoute,
      private postService:PostService) {

        this.activateRouted.params.subscribe(params =>{
          console.log(params['id']);
          this.post = this.postService.getPost(params['id']);
          console.log(this.post);
        });

    }

  ngOnInit(): void {
  }

}
