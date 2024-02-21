import { CanActivateFn } from '@angular/router';
import {inject} from "@angular/core";
import {LoginService} from "../services/login.service";

export const GEOFFREY_ONLY: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService)

  if(loginService.connectedUser?.firstName === "Geoffrey")
    return true;

  return false;
};
