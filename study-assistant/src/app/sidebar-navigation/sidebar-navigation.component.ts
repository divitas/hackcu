import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-navigation',
  templateUrl: './sidebar-navigation.component.html',
  styleUrl: './sidebar-navigation.component.css'
})
export class SidebarNavigationComponent {
  isCollapsed = false;

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
