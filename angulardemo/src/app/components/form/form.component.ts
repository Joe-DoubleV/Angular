import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public peopleInfo:any={
    userName:" 请输入真实姓名",
    sex:"1",    
    city:"武汉",
    lang:[{
            langType:"Java",
            flag:false
          },
          {
            langType:"Python",
            flag:false
          },
          {
            langType:"Go",
            flag:false
          },
          {
            langType:"JavaScript",
            flag:true
          }],
    mark:""

  }
  public cityList:any=["北京","上海","广州","深圳","武汉"]

  constructor(public storage:StorageService) { 
      // console.log(storage.get())
  }
  public doSubmit(){
    alert(this.peopleInfo.userName);
  }

  /*          */
  public keyWord:string='';

  public historyList:any[]=[];
  // public finishList:any[]=[];

  public doAdd(e){
    console.log(this.keyWord.length)
    if(e.keyCode==13 && this.keyWord.trim().length>0){
      if(!this.keyWordinList(this.keyWord,this.historyList)){
              this.historyList.push({
                name:this.keyWord,
                status:0
              });
              this.storage.set("todolist",this.historyList);
      }
      this.keyWord="";
    }
  }
  public deleteHistory(index){
      this.historyList.splice(index,1)
      this.storage.set("todolist",this.historyList);
  }
  /**
   * changeStatus
   */
  public changeStatus() {
    this.storage.set("todolist",this.historyList);
  }


  /**
   * name
   */
  public keyWordinList(key:any,list:any):boolean {
    // list.forEach(element => {
    //   if(element.name==key){
    //     return true;
    //   }
    // });
    for (let index = 0; index < list.length; index++) {
      if(list[index].name==key){
        return true;
      }
    }
    return false;
  }

  ngOnInit() {
    var list = this.storage.get("todolist");
    if(list){
      this.historyList = list;
    }
  }

}
