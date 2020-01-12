import { Component, OnInit ,Input } from '@angular/core';
import { CommtempService } from '../../services/commtemp.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public comm:CommtempService) { }
/**
 * run
 */
  public run() {
      alert('Header.run()');
  }
  public info:string="Header";
  //子组件中接收父组件
  @Input() public title_header:string;
  @Input() public func_header(){};
  @Input() public home:any;
  public start(){
    //调用父组件方法
    this.func_header();
  }

  public all() {
    alert(this.home.title);
    this.home.start();
  }
  public title:string=this.comm.title;
  public inputs:string;
  /**
   * getT
   */
  public getT() {
    this.title=this.comm.getTitle()
  }
  public setT(){
    this.comm.setTitle(this.inputs)
  }
  ngOnInit() {
  }
  ngOnChanges(){
    console.log("header===ngOnChanges()");
  }
  ngDoCheck(){console.log("header1==ngDoCheck()");}
  ngAfterContentInit(){console.log("header2==ngAfterContentInit()");}
  ngAfterContentChecked(){console.log("header3==ngAfterContentChecked()");}
  ngAfterViewInit() {console.log("header4==ngAfterViewInit()");}
  ngAfterViewChecked(){console.log("header5==ngAfterViewChecked()");}
  ngOnDestroy(){console.log("header6==ngOnDestroy()");}
}
