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

  /**
   * changes
   */
  public changes() {
    console.log("子组件changes()");
    this.outer.emit(this.inputs)
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
  public inputs:string;
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
