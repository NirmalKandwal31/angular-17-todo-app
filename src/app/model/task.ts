export interface ITask {
  itemId: number;
  taskName: string;
  taskDescription: string;
  dueDate: Date;
  createdOn: Date;
  isCompleted: boolean;
  tags: string;
  completedOn: Date;
}

export class Task {
  itemId: number;
  taskName: string;
  taskDescription: string;
  dueDate: Date;
  createdOn: Date;
  isCompleted: boolean;
  tags: string;
  completedOn: Date;

  constructor() {
    this.itemId = 0;
    this.taskName = '';
    this.taskDescription = '';
    this.dueDate = new Date();
    this.createdOn = new Date();
    this.isCompleted = true;
    this.tags = '';
    this.completedOn = new Date();
  }
}

export interface APIResponseModel {
  message: string;
  result: string;
  data: any;
}
