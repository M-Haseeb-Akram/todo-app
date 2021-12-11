import { TodoValues } from './../../models/todo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  list_todo_items: TodoValues[] = []
  constructor() { }

  ngOnInit(): void {
  }

  onItemAdded = (title: string) => {
    this.list_todo_items.push({
      title: title,
      status: false
    });
  }

  onItemDelete = (index: number) => {
    this.list_todo_items.splice(index, 1);
  }

  onItemUpdate = (index: number) => {

    this.list_todo_items[index].status === true ? this.list_todo_items[index].status = false : this.list_todo_items[index].status = true;
  }
}
