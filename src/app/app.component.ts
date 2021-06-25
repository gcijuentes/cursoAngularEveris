import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Beca intensiva!!';

  cantidad:number= 22;

  sumar(){
    this.cantidad = this.cantidad +1;
  }

  restar(){
    this.cantidad = this.cantidad -1;
  }

}
