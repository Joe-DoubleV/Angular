import { Component, OnInit ,ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  //
  @ViewChild('mybox') thisboxs:any;
  constructor() { console.log("-1===constructor()");}

  public flag:boolean=true;
  
  /**
   * changeFlag
   */
  public changeFlag() {
    //调用子组件的方法
    this.child_Header.run();
    this.flag = !this.flag;
    let oBoxs:any=document.getElementById('boxs');
    if(this.flag)
        oBoxs.style.color='blue';
    else
        oBoxs.style.color='red';
  }
  public list:any[]=[];
  ngOnInit() {

    for(var i=0;i<10;i++){
      this.list.push('这是第'+(i+1)+'条数据')
    }


    console.log("0===ngOnInit()");
    /*不建议在这里 操作dom */
    let oBox:any=document.getElementById('box');

    oBox.style.color='red';
  }
  /**
   * 视图加载完成的方法
   */
  ngAfterViewInit() {
    console.log("4==ngAfterViewInit()");
    /*建议在这里 操作dom 这时dom已经加载完毕*/
    let oBoxs:any=document.getElementById('boxs');

    oBoxs.style.color='blue';
    // this.thisboxs;
    console.log(this.thisboxs);

    this.thisboxs.nativeElement.style.width='300px';
    
    this.thisboxs.nativeElement.style.height='100px';
    
    this.thisboxs.nativeElement.style.background='red';

    console.log(this.thisboxs.nativeElement.innerText);

    //调用子组件里的方法
    // this.child_Header.run();
    // alert(this.child_Header.info);

  }
  ngOnChanges(){
    console.log("ngOnChanges()");
  }
  ngDoCheck(){console.log("1==ngDoCheck()");}
  ngAfterContentInit(){console.log("2==ngAfterContentInit()");}
  ngAfterContentChecked(){console.log("3==ngAfterContentChecked()");}
  ngAfterViewChecked(){console.log("5==ngAfterViewChecked()");}
  ngOnDestroy(){console.log("6==ngOnDestroy()");}
  //获取组件
  @ViewChild('header') child_Header:any;
  
}
