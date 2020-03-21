import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentLanguage = ""
  constructor(
    public translate: TranslateService
  ) {}
  public async ngOnInit() {
    // 语言初始化(若未设置语言, 则取浏览器语言)
    this.currentLanguage = await localStorage.getItem('currentLanguage') || this.translate.getBrowserCultureLang()
    // 当在assets/i18n中找不到对应的语言翻译时，使用'zh-CN'作为默认语言
    this.translate.setDefaultLang('zh-CN');
    this.translate.use(this.currentLanguage);
    // 记录当前设置的语言
    localStorage.setItem('currentLanguage', this.currentLanguage)
    console.log(this.langage)
    this.langage = this.currentLanguage
  }
  langChinese = true 
  langage = ""

  langChanges(event){
    console.log(event)
    console.log(this.langage)
    this.currentLanguage = this.langage
    this.translate.use(this.currentLanguage);
    localStorage.setItem('currentLanguage', this.currentLanguage)
  }
  change(){
      this.langChinese = !this.langChinese
      if(this.langChinese){
        this.currentLanguage =  'zh-CN'   
      }else{
        this.currentLanguage = 'en-US'
      }
      this.translate.use(this.currentLanguage);
    // 记录当前设置的语言
        localStorage.setItem('currentLanguage', this.currentLanguage)
  }
//   ngAfterViewChecked(){
//       console.log("lang",this.langage)
//       console.log("this.currentLanguage",this.currentLanguage)
//   }

}
