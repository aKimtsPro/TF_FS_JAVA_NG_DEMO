import {createFeatureSelector, createSelector} from "@ngrx/store";
import {FEATURE_TASKS, TaskState} from "./tasks.state";


const featureSelector = createFeatureSelector<TaskState>(FEATURE_TASKS)

export const selectTasks = createSelector(
  featureSelector,
  tasks => tasks
)
