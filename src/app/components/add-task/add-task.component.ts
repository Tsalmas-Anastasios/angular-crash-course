import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Task } from '../../Task';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription: Subscription | undefined;

  constructor(private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddTask = value)
  }

  ngOnInit(): void {}

  onSubmit() {
    if(!this.text) {
      alert('Please add the task title!');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask)                   //add new task

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
