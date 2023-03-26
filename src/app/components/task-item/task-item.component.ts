import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from "../../task"
import { faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})

export class TaskItemComponent {
  faTimes = faTimes;
  @Input() task!: Task;
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() toggleReminder: EventEmitter<Task> = new EventEmitter();

  onClick(task: Task) {
    this.deleteTask.emit(task);
  }

  onDoubleClick(task: Task): void {
    this.toggleReminder.emit(task);
  }
}
