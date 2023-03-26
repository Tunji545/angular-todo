import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import {Task} from "../task"
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private privateUrl: string = "http://192.168.33.10:4000/tasks"
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
  return this.http.get<Task[]>(this.privateUrl)
  }

  deleteSingTask(task: Task): Observable<Task> {
    const url = `${this.privateUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.privateUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions)
  }

  onAddNewTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.privateUrl, task, httpOptions);
  }
}
