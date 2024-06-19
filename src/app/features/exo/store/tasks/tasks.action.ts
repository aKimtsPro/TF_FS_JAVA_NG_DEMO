import {createActionGroup, props} from "@ngrx/store";
import {ITask} from "../../models/task.model";


export const TasksActions = createActionGroup({
  source: 'Tasks',
  events: {
    'addTask': props<{ task: ITask }>(),
    'completeTask': props<{ taskId: number }>(),
    'cancelTask': props<{ taskId: number }>(),
  }
})
