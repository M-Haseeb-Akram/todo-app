import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() status: boolean = false;
  @Input() title: string = "";
  @Input() id: number = 0;
  @Output() sendId: EventEmitter<number> = new EventEmitter();
  @Output() sendTaskId: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendTask = () => {
    this.sendId.emit(this.id);
  }

  sendTaskforUpdate = () => {
    this.sendTaskId.emit(this.id);
  }
}
