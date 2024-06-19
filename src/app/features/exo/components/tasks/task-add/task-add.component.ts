import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ADD_TASK_FORM} from "../../../form/add-task.form";
import {Store} from "@ngrx/store";
import {GenericError} from "../../../../../handlers/errors/generic.error";
import {TasksActions} from "../../../store/tasks/tasks.action";

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrl: './task-add.component.scss'
})
export class TaskAddComponent {

  form: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private readonly $store: Store
  ) {
    this.form = formBuilder.group(ADD_TASK_FORM)
  }

  handleAddTask(){
    console.log(this.form)
    if( this.form.invalid )
      throw new GenericError('invalid task', 'warn')

    this.$store.dispatch( TasksActions.addTask({task: this.form.value}) )
  }
}
