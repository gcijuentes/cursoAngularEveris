import { Injectable } from '@angular/core';
import { PostResponse } from '../interfaces/post-response.interface';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts:PostResponse[] = [
    {
      "userId": 1,
      "id": 0,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      "date": "2021-01-01"
    },
    {
      "userId": 1,
      "id": 1,
      "title": "QUI EST ESSE",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      ,"date": "2021-02-01"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      ,"date": "2021-03-01"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
      ,"date": "2021-04-01"
    }];

  constructor() { }


  getPosts(){
    //simula una llamada API
    return this.posts;
  }

  getPost(index:any){
    return this.posts[index];
  }

}
