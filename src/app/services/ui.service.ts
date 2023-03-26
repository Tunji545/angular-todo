import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private subject = new Subject<any>();
  showAddTask: boolean = false;
  
  constructor() { }

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask
    this.subject.next(this.showAddTask)
  }

  toggleTask(): Observable<any> {
    return this.subject.asObservable()
  }
}
