import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ViewChild(SidebarComponent) sidebarComponent!: SidebarComponent;
  sidebarOpened = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    console.log("Side bar toggle", this.sidebarComponent);
    this.sidebarComponent.toggle();
  }
}
