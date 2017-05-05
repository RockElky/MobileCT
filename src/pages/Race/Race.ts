import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http'
import { NavController } from 'ionic-angular';


@Component({
  selector: 'Race',
  templateUrl: 'Race.html'
})


// export class Race {
  
//  regTypeSelectedOption: string = "";
//   selectedNav: any;
//   navs = ['Human', 'Lizard'];

//   ngOnInit(){
//     this.selectedNav = 'select value';
//   }

//   setNav(nav:any){
//     	this.selectedNav = nav;
// 			if(this.selectedNav == "Human"){
// 				this.selectedNav = "Human";
// 			}
// 			else if(this.selectedNav == "Lizard"){
// 				this.selectedNav = "Lizard";
// 			}
//       console.log(nav);
//   }
// }
export class Race {
  
regTypeSelectedOption: string = "";
selectedNav: any;
navs = ['Human', 'Lizard', 'Alien'];

ngOnInit() {
    this.selectedNav = 'select value';
}
setNav(nav:any){
      this.selectedNav = nav;
			if(this.selectedNav == "Human"){
				this.regTypeSelectedOption = "Human";
			}
			else if(this.selectedNav == "Lizard"){
				this.regTypeSelectedOption = "Lizard";
			}
			else if(this.selectedNav == "Alien"){
				this.regTypeSelectedOption = "Alien";
			}
      console.log(this.regTypeSelectedOption);
		}
}