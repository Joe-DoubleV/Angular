import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommtempService {
  public title:any;
  public setTitle(t){
    this.title = t;
  }

  public getTitle(){
    return this.title;
  }
  constructor() { }
}
