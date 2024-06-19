import {Validators} from "@angular/forms";

export interface AddPlayer{
  firstname: string,
  lastname: string,
}

export const ADD_PLAYER_FORM = {
  'firstname': ['',[Validators.required, Validators.maxLength(20)]],
  'lastname': ['',[Validators.required, Validators.maxLength(20)]],
}
