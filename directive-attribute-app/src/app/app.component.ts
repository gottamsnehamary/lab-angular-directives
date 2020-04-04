import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showColor: any =false;

  constructor(){}

  public changeColor(): void{

    this.showColor = this.showColor;
  }

}
