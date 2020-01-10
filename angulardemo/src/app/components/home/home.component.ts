import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public title:string="HOME";

  public start() {
    alert("this is home`s start()");
  }
  /**
   * footerOut
   */
  public footerOut(e) {
    console.log("this is footerOut()");
    console.log(e);
    alert(e);
  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    console.log("home4==ngAfterViewInit()");
  }
  ngOnChanges(){
    console.log("ngOnChanges()");
  }
  ngDoCheck(){console.log("home1==ngDoCheck()");}
  ngAfterContentInit(){console.log("home2==ngAfterContentInit()");}
  ngAfterContentChecked(){console.log("home3==ngAfterContentChecked()");}
  ngAfterViewChecked(){console.log("home5==ngAfterViewChecked()");}
  ngOnDestroy(){console.log("home6==ngOnDestroy()");}
}
