import { Injectable } from '@angular/core';
import { of, VirtualTimeScheduler } from 'rxjs';
import { Todo } from '../model/todo'

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  todos : Todo[];

  constructor() {
    this.todos = [
      {
        id : '111',
        task : "learn cpp",
        isCompleted : true,
        date : new Date()
      },
      {
        id : '112',
        task : "learn angular",
        isCompleted : false,
        date : new Date()
      },
      {
        id : '113',
        task : "learn cpp",
        isCompleted : true,
        date : new Date()
      }
    ]  
  }

  getTodos(){
    return of(this.todos)
  }

  addToDo(todo : Todo){
    this.todos.push(todo);
  }

  changeStatus(todo : Todo){
    this.todos.map(singleTodo => {
      if(singleTodo.id === todo.id){
        todo.isCompleted = !todo.isCompleted
      }
    });
  }

  deleteTodo(todo : Todo){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
  }
}
 