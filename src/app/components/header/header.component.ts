import { Component } from '@angular/core';
import { UiService } from "../../services/ui.service";
import { Subscription } from 'rxjs';
import { Router } from "@angular/router"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = "Task Tracker"
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.toggleTask().subscribe(isShowValueTask => this.showAddTask = isShowValueTask)
  }
  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  isRouteMatch(route: string): boolean {
    console.log(this.router.url);
    return this.router.url === route
  }
}
