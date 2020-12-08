import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorComponent } from './vendor.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from '../Components/main/footer/footer.component';
import { HeaderComponent } from '../Components/main/header/header.component';
import { MessagesDropdownMenuComponent } from '../Components/main/header/messages-dropdown-menu/messages-dropdown-menu.component';
import { NotificationsDropdownMenuComponent } from "../Components/main/header/notifications-dropdown-menu/notifications-dropdown-menu.component";
import { UserDropdownMenuComponent } from "../Components/main/header/user-dropdown-menu/user-dropdown-menu.component";
import { MenuSidebarComponent } from "../Components/main/menu-sidebar/menu-sidebar.component"
@NgModule({
  declarations: [VendorComponent, HomeComponent,
    HeaderComponent,
    FooterComponent,
    MenuSidebarComponent,
    MessagesDropdownMenuComponent,
    NotificationsDropdownMenuComponent,
    UserDropdownMenuComponent],
  imports: [
    CommonModule,
    VendorRoutingModule,
    
  ],
  exports: [VendorComponent]
})
export class VendorModule { }
