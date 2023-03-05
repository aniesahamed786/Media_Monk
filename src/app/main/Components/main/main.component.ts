import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { resolve } from 'dns';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  currentRoutepath: string = "";
  btn: boolean = true;

  constructor(private router: Router,private route2:ActivatedRoute,private location:Location){
    console.log(route2.url)
    console.log(router.url);
    console.log(router.url.charAt(router.url.length-1))
    this.currentRoutepath = router.url.charAt(router.url.length-1);
    // console.log(router);
    // router.events.filter((event:any) => event instanceof NavigationEnd)
    //       .subscribe((event:any) => 
    //        {
    //           this.currentRoutepath = event.url;          
    //           console.log(event);
    //        });
    }
  pathtext:string = "";
  ComponentNum:number=0;
  content:boolean = false
  positionx:string = "";
  num:number= 0;
  dataloaded = new Promise((resolve,reject)=> {
    setTimeout(()=>{
      resolve("loaded")
      this.router.navigateByUrl("main/F")
    },5000)
  })
  ngOnInit(): void {
   this.content = false;
  this.router.navigateByUrl("main")
  }
  leftscroll(e:any){
    this.btn = true;
    this.location.back();
    if(this.num == 0){
       this.num = 0;
       this.positionx = "0%"
    }
    else{
      this.positionx = "%"
    this.num = this.num - 12.5;
    this.positionx = this.num+"%"
    }
  }
  rightscroll(e:any){
    this.btn = true;
    var n:any = 1;
    console.log(e);
    console.log(this.num)
    this.positionx = "%"
    this.num = this.num + 12.5;
    this.positionx = this.num+"%";

  
   
    if(this.num == 100){
      // this.num = 0;
      this.positionx = "100%";
      this.content = true;
      this.pathtext = "8";
      this.router.navigateByUrl("main/c8")
   }
   else if( this.num == 12.5){
     this.content = true;
     this.pathtext = "1";
     this.router.navigateByUrl("main/c1")
   }
   else if( this.num == 25){
    this.content = true;
    this.pathtext = "2";
    this.router.navigateByUrl("main/c2")
  }
  else if( this.num == 37.5){
    this.content = true;
    this.pathtext = "3";
    this.router.navigateByUrl("main/c3")
  }
  else if( this.num == 50){
    this.content = true;
    this.pathtext = "4";
    this.router.navigateByUrl("main/c4")
  }
  else if( this.num == 62.5){
    this.content = true;
    this.pathtext = "5";
    this.router.navigateByUrl("main/c5")
  }
  else if( this.num == 75){
    this.content = true;
    this.pathtext = "6";
    this.router.navigateByUrl("main/c6")
  }
  else if( this.num == 87.5){
    this.content = true;
    this.pathtext = "7";
    
    this.router.navigateByUrl("main/c7")
  }
  else if( this.num == 112.5){
    this.content = false;
    this.btn = false;
    this.pathtext = "8";
    this.positionx = "110%";
    this.router.navigateByUrl("main/L")
  }

  }


  start(){
    this.btn = true
    this.content = false;
    this.num = 0;
    this.positionx = "0%"
  }
  end(){
    this.btn = false
    this.content = false;
    this.num = 112.5;
    this.positionx = "110%"
  }
  navigate(e:string){
    console.log(e)
    this.btn = true;
    if(e == '1'){
      this.content = true;
      this.pathtext = e;
      this.num = 12.5;
      this.positionx = "12.5%"
    }
    else if(e == '2'){
      this.content = true;
      this.pathtext = e;
      this.num = 25;
      this.positionx = "25%"
    }
    else if(e == '3'){
      this.content = true;
      this.pathtext = e;
      this.num = 37.5;
      this.positionx = "37.5%"
    }
    else if(e == '4'){
      this.content = true;
      this.pathtext = e;
      this.num = 50;
      this.positionx = "50%"
    }
    else if(e == '5'){
      this.content = true;
      this.pathtext = e;
      this.num = 62.5;
      this.positionx = "62.5%"
    }
    else if(e == '6'){
      this.content = true;
      this.pathtext = e;
      this.num = 75;
      this.positionx = "75%"
    }
    else if(e == '7'){
      this.content = true;
      this.pathtext = e;
      this.num = 87.5;
      this.positionx = "87.5%"
    }
    else if(e == '8'){
      this.content = true;
      this.pathtext = e;
      this.num = 100;
      this.positionx = "100%"
    }
  }
}
