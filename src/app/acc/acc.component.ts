import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acc',
  templateUrl: './acc.component.html',
  styleUrls: ['./acc.component.css']
})
export class AccComponent implements OnInit {
nav:any;
  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  navigateachat() {
    this.router.navigate(['rachat']);
    var interval = setInterval(function(){
      let timesRun=0;
     timesRun  += 1;
      if(timesRun === 2){
          clearInterval(interval);
      }
      //do whatever here..
  }, 2000);

}
navigatevente() {
 this.router.navigate(['rvente']);

}
 navigatecomp() {
  this.router.navigate(['rcomf']);
  var interval = setInterval(function(){
    let timesRun=0;
   timesRun  += 1;
    if(timesRun === 2){
        clearInterval(interval);
    }
    //do whatever here..
}, 2000);

}

}
