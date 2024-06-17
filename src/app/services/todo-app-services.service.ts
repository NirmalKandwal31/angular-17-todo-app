import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel, Task } from '../model/task';

@Injectable({
  providedIn: 'root',
})
export class TodoAppService {
  apiUrl: string = 'http://freeapi.gerasim.in/api/JWT/';
  constructor(private http: HttpClient) {}

  getAllTaskList(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(this.apiUrl + 'GetAllTaskList');
  }

  addNewTask(obj: Task): Observable<APIResponseModel> {
    return this.http.post<APIResponseModel>(this.apiUrl + 'CreateNewTask', obj);
  }

  updateTask(obj: Task): Observable<APIResponseModel> {
    return this.http.put<APIResponseModel>(this.apiUrl + 'UpdateTask', obj);
  }

  deleteTask(id: number): Observable<APIResponseModel> {
    return this.http.delete<APIResponseModel>(
      this.apiUrl + 'DeleteTask?itemId=' + id
    );
  }
}
