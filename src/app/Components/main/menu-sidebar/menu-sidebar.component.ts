
import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';

import { 
  faBoxOpen,
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss'],
})
export class MenuSidebarComponent implements OnInit, AfterViewInit {
  @ViewChild('mainSidebar', { static: false }) mainSidebar:any;
  @Output() mainSidebarHeight: EventEmitter<any> = new EventEmitter<any>();
 

  faBoxOpen = faBoxOpen;
  

  ngOnInit() {

    console.log(this.isDropdown);
  }

  ngAfterViewInit() {
    this.mainSidebarHeight.emit(this.mainSidebar.nativeElement.offsetHeight);
  }
  
  
  isDropdown:boolean = true;
  toggleDropdown(doc:string): void{
    {
      if(this.isDropdown)
      {
        document.getElementById(doc)?.classList.add("menu-open");
        this.isDropdown = false;
      }
      else
      {
        document.getElementById(doc)?.classList.remove("menu-open");
        this.isDropdown = true;
      }
    }
  }


}

