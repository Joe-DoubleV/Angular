import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-newscontent',
  templateUrl: './newscontent.component.html',
  styleUrls: ['./newscontent.component.css']
})
export class NewscontentComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit() {
    console.log('===='+'get传值');
    console.log(this.route.queryParams);
    this.route.queryParams.subscribe((data)=>{
      console.log(data.aid);
    })


    console.log('===='+'动态路由');
    this.route.params.subscribe(data=>{
      console.log(data.aid);
    })



  }

}
