import {GenericError} from "../../../handlers/errors/generic.error";

export class LeaderDeleteError extends GenericError {

  constructor() {
    super('leader-delete', 'error');
  }
}
