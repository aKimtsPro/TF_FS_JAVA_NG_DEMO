import {GenericError} from "../../../handlers/errors/generic.error";

export class PlayerNotFoundError extends GenericError {

  constructor() {
    super("player-not-found", "error");
  }

}
