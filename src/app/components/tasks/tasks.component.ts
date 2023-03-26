import { Component, OnInit } from '@angular/core';
import { Task } from "../../task";
import { TaskService } from "../../services/task.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit{
tasks: Task[] = [];

constructor(private taskService: TaskService) {}
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=> {
      this.tasks = tasks;
    })
  }
 
  onDeleteTask(task: Task): void {
    this.taskService.deleteSingTask(task).subscribe(()=> this.tasks =  this.tasks.filter((item: Task) => item.id !== task.id ))
  }

  onToggleReminder(task: Task): void {
    task.reminder = !task.reminder
    this.taskService.updateTaskReminder(task).subscribe()
  }

  onAddNewTask(task: Task): void {
    this.taskService.onAddNewTask(task).subscribe(task => this.tasks.push(task))
  }
}
