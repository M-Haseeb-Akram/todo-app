import { TodoValues } from './../../models/todo.model';
import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo_value: TodoValues = {title:"", status: false};
  @Input() id: number = -1;
  @Output() sendId: EventEmitter<number> = new EventEmitter();
  @Output() sendTaskId: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendTaskIdforDelete = () => {
    this.sendId.emit(this.id);
  }

  sendTaskIdforUpdate = () => {
    this.sendTaskId.emit(this.id);
  }
}
