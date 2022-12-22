import { Component } from '@angular/core';
import { Todo } from '../../Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        sno: 1,
        title: 'todo title 1',
        desc: 'todo desc 1',
        active: true,
      },
      {
        sno: 2,
        title: 'todo title 2',
        desc: 'todo desc 2',
        active: true,
      },
      {
        sno: 3,
        title: 'todo title 3',
        desc: 'todo desc 3',
        active: true,
      },
      {
        sno: 4,
        title: 'todo title 4',
        desc: 'todo desc 4',
        active: true,
      },
    ];
  }
  deleteTodo(todo: Todo) {
    console.log(todo);
	  const index = this.todos.indexOf(todo);
	  this.todos.splice(index, 1);
  }
  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
  }
}
