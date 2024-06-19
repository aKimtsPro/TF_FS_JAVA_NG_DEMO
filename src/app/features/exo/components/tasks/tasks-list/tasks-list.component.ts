import {Component, inject} from '@angular/core';
import {Store} from "@ngrx/store";
import {selectTasks} from "../../../store/tasks/tasks.selector";
import {ITask} from "../../../models/task.model";
import {TasksActions} from "../../../store/tasks/tasks.action";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.scss'
})
export class TasksListComponent {
  private readonly $store= inject(Store)
  tasks = this.$store.selectSignal(selectTasks)

  handleCompleteTask(task: ITask) {
    this.$store.dispatch( TasksActions.completeTask({taskId: task.id}) )
  }
}
