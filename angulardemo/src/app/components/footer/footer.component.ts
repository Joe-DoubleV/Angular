import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommtempService } from '../../services/commtemp.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public title_footer:string;
  //暴露自定义事件
  @Output() outer = new EventEmitter<any>();

  public inputs:string;

  /**
   * changes
   */
  public changes() {
    console.log("子组件changes()");
    this.outer.emit(this.inputs)
  }
  /**
   * keyup
   */
  public keyUp(e) {
    console.log(e.keyCode)
    if(e.keyCode==13) {
      this.outer.emit(this.inputs)
    }
    
  }

  constructor(public comm:CommtempService) { }

  ngOnInit() {
  }
  
  ngOnChanges(){
    console.log("footer===ngOnChanges()");
  }
  ngDoCheck(){console.log("footer1==ngDoCheck()");}
  ngAfterContentInit(){console.log("footer2==ngAfterContentInit()");}
  ngAfterContentChecked(){console.log("footer3==ngAfterContentChecked()");}
  ngAfterViewInit() {console.log("footer4==ngAfterViewInit()");}
  ngAfterViewChecked(){console.log("footer5==ngAfterViewChecked()");}
  ngOnDestroy(){console.log("footer6==ngOnDestroy()");}
  
  /**
   * getT
   */
  public getT() {
    this.title_footer=this.comm.getTitle()
  }
  public setT(){
    this.comm.setTitle(this.inputs)
  }
}
