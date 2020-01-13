import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-imagecontent',
  templateUrl: './imagecontent.component.html',
  styleUrls: ['./imagecontent.component.css']
})
export class ImagecontentComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit() {
    console.log('接收get传值');
    // console.log(this.route.queryParams);
    this.route.queryParams.subscribe((data)=>{
      console.log(data.aid);
    })


    console.log('接收动态传值');
    this.route.params.subscribe(data=>{
      console.log(data.aid);
    })
  }

}
