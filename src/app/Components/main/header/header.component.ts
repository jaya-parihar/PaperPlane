import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  sidebarMenuOpened:boolean = true;
  ngOnInit() {
   
  }
  constructor(private renderer: Renderer2){}
 
  toggleMenuSidebar() {
    if (this.sidebarMenuOpened) {
      this.renderer.removeClass(
        document.querySelector('app-root'),
        'sidebar-open'
      );
      this.renderer.addClass(
        document.querySelector('body'),
        'sidebar-collapse'
      );
      this.sidebarMenuOpened = false;
    } else {
      this.renderer.removeClass(
        document.querySelector('body'),
        'sidebar-collapse'
      );
      this.renderer.addClass(
        document.querySelector('app-root'),
        'sidebar-open'
      );
      this.sidebarMenuOpened = true;
    }

    
  }


}
