import {Component, inject} from '@angular/core';
import {Store} from "@ngrx/store";
import {selectTasks} from "../../store/tasks/tasks.selector";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {

}
