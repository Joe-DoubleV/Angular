import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
/**
 * run
 */
  public run() {
      alert('Header.run()');
  }
  public info:string="Header";
  ngOnInit() {
  }

}
