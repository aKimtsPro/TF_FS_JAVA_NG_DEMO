import {CanActivateFn} from "@angular/router";
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {map} from "rxjs";

export function authGuard(shouldBeLoggedIn: boolean) {
  return () => {
    const auth = inject(AuthService);

    if( shouldBeLoggedIn ){
      return auth.isConnected$
    }

    return auth.isConnected$.pipe(
      map(isConnected => !isConnected),
    )
  }
}
