import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo2';
  public isShow:boolean= true;

  constructor(private route:Router){

  }

  
  onClickOfAdmsn(){
    console.log("Hello this is comp.ts");
    if(this.isShow== true){
      // this.route.navigate(['admi']);

      this.route.navigateByUrl('admi');
    }
  }
}
