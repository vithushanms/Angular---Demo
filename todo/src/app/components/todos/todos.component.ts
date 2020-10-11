import { Todo } from './../../model/todo';
import { TodoserviceService } from './../../services/todoservice.service';
import { Component, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  faTrashAlt = faTrashAlt;

  todos : Todo[];

  constructor(private todoService : TodoserviceService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(x => {
      this.todos = x;
    });
  }

  chnageTodo(todo : Todo){
    this.todoService.changeStatus(todo);
  }

  addTodo(todo : Todo){
    this.todoService.addToDo(todo);
  }

  deleteTodo(todo : Todo){
    this.todoService.deleteTodo(todo);
  }
}
