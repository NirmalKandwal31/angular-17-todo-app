import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoAppService } from './services/todo-app-services.service';
import { DatePipe } from '@angular/common';
import { ITask, Task } from './model/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatePipe, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  toDoAPIService = inject(TodoAppService);

  taskObject: Task = new Task();
  taskList: ITask[] = [];
  ngOnInit(): void {
    this.loadAllTask();
  }

  loadAllTask() {
    this.toDoAPIService.getAllTaskList().subscribe((result: any) => {
      console.log('result', result);
      this.taskList = result.data;
    });
  }

  addTask() {
    this.toDoAPIService.addNewTask(this.taskObject).subscribe(
      (result: any) => {
        if (result.result) {
          alert('Task Created ');
          this.loadAllTask();
          this.taskObject = new Task();
        }
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  edit(item: Task) {
    this.taskObject = { ...item };
    setTimeout(() => {
      const date = new Date(this.taskObject.dueDate);
      const day = ('0' + date.getDate()).slice(-2);
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const today = date.getFullYear() + '-' + month + '-' + day;
      (<HTMLInputElement>document.getElementById('textDate')).value = today;
      console.log(today);
    }, 1000);
  }

  updateTask() {
    this.toDoAPIService.updateTask(this.taskObject).subscribe(
      (result: any) => {
        if (result.result) {
          alert('Task Updated ');
          this.loadAllTask();
          this.taskObject = new Task();
        }
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  delete(id: number) {
    const isConfirm = confirm('Are You Sure');
    if (isConfirm) {
      this.toDoAPIService.deleteTask(id).subscribe(
        (result: any) => {
          if (result.result) {
            alert('Task Deleted ');
            this.loadAllTask();
          }
        },
        (error) => {
          console.log('error', error);
        }
      );
    }
  }
}
