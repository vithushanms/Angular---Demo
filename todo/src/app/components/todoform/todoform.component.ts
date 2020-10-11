import { TodoserviceService } from './../../services/todoservice.service';
import { Todo } from './../../model/todo';
import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit {
  Task : string;

  constructor(private todoService : TodoserviceService) { }

  ngOnInit(): void {
  }

  addTodo(){
    const newTodo : Todo = {
      id : uuidv4(),
      task : this.Task,
      isCompleted : false,
      date : new Date()
    }
    this.todoService.addToDo(newTodo);
    this.Task = "";
  }

}
