import { Component, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  public title:any = "ImageComponent"
  //定义对象
  public userInfo:object = {
    name : "Joe",
    age : 29 
  }

  public content:any = "<h2>angular绑定Html</h2>"
  //定义数组
  public list:any[]=['qwertyiop','asdfghjkl','zxcvbnm,./']

  public userlist:any[] = [
    {
      name : "QWERTY",
      age : 6,
      ar :['q','p']  
    },
    {
      name : "ASDFGHJKL",
      age : 9,
      ar :['a','l']
    },
    {
      name : "ZXCVBNM",
      age : 7,
      ar :['z','m']
    },
  ]

  flag=true

  public switchList:Array<number>=[0,1,2,3]

  public imageUrl:string="https://p0.ssl.qhimg.com/t01f75cb8fe6e2fc36a.jpg"

  public today:Date=new Date()

  public keywords:any;

  constructor() { 
    console.log(this.today)
  }

  run(){
    alert("running flag:"+this.flag)
  }
  getData(){
    this.flag = !this.flag
    alert("flag:"+this.flag)
  }
  runEvent(e){
    var dom:any=e.target;
    dom.style.color='red'
    let temp:any = this.keywords
    this.keywords = this.today.toString()
  }

  keyDown(e){
    console.log(e.keyCode)
    console.log(e.target.value)
  }
  ngOnInit() {
  }

}
