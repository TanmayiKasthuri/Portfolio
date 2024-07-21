import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  isMobile : boolean = false;

  resumeURL = "https://drive.google.com/file/d/1M1ZKFflmGXrs4caMp665b2SgG9gVaGP7/view";

  ngOnInit() {

    if(screen.width <= 480) {     
      this.isMobile = true;
    }
  }

  goto(id :string)
  {
    // console.log(id)
    // console.log(document.getElementById(id));
    let node = document.getElementById(id);
    if(node !== null)
      node.scrollIntoView({ behavior: "smooth",block: "start"});
    this.closeNav()
  }

  openNav() {
    let node = document.getElementById("mySidenav");
    if(node !== null)
      node.style.width = "100%";
  }
  
  closeNav() {
    let node = document.getElementById("mySidenav");
    if(node !== null)
      node.style.width = "0";
  }

}
