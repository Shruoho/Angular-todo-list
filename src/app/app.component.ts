import { Component } from '@angular/core';

import { Todo } from '../app/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Spring cleaning todo-list';
  
  todoValue!:string;
  list!: Todo[];

  ngOnInit() {
    this.list = [];

    //Tämä määrittää sen, ettei valuessa ole aluksi mitään
    this.todoValue = "";
  }

  addItem() {
    //Tämä varmistaa että syötetty task ei ole tyhjä
    if(this.todoValue !== "") {
      const newItem: Todo = {
        id: Date.now(),
        value: this.todoValue,
        isDone: false
      };

      this.list.push(newItem);
    }

    this.todoValue = "";
  }

  deleteItem(id:number) {
    this.list = this.list.filter(item => item.id !== id);
  }
}
