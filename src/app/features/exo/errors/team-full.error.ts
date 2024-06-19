import {GenericError} from "../../../handlers/errors/generic.error";

export class TeamFullError extends GenericError {

  constructor() {
    super('team-full', 'error');
  }
}
