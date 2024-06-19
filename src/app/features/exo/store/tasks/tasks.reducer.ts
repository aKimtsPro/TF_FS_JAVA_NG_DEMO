import {createReducer, on} from "@ngrx/store";
import {tasksInitialState} from "./tasks.state";
import {TasksActions} from "./tasks.action";

export const tasksReducer = createReducer(
  tasksInitialState,
  on( TasksActions.addTask, (state, {task}) => [...state, task] ),
  on( TasksActions.completeTask, (state, {taskId}) => {
    const task = state.find(task => task.id === taskId);
    if( task )
      task.state = 'DONE'

    return [...state];
  }),
  on( TasksActions.cancelTask, (state, {taskId}) => {
    const task = state.find(task => task.id === taskId);
    if( task )
      task.state = 'CANCELLED'

    return [...state];
  })
)
