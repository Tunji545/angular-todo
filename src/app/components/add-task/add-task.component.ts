import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from "../../task";
import { Subscription } from "rxjs"
import {UiService} from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() addNewTask: EventEmitter<Task> = new EventEmitter()
  showAddTask!: boolean
  subscription!: Subscription;
  constructor(private uiService: UiService) {
    this.subscription = this.uiService.toggleTask().subscribe((isShowAddTask: boolean) => this.showAddTask = isShowAddTask);
  }
  text!: string;
 day!: string;
 reminder: boolean = false;

  onSubmit(): void {
    if(!this.text) {
      alert("Please, enter the task title.")
    
      return;
    }
  
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
  
   this.addNewTask.emit(newTask);

  this.text = "";
  this.day = "";
  this.reminder = false;

  }

}
