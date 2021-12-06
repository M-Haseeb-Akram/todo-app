import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  items: {title: string, status: boolean}[] = []
  constructor() { }

  ngOnInit(): void {
  }

  onItemAdded = (title: string) => {
    this.items.push({
      title: title,
      status: false
    });
  }

  onItemDel = (index: number) => {
    this.items.splice(index, 1);
  }

  onItemUpdate = (index: number) => {

    this.items[index].status === true ? this.items[index].status = false : this.items[index].status = true;
  }
}
