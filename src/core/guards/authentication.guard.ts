import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate, CanActivateChild {

    constructor(
        private activatedRoute: ActivatedRoute
    ) {

    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        console.log(childRoute)
        let id = childRoute.paramMap.get("movieId");
        console.log('Can Activate child Movie Id -->', id);
        if (id) {
            return true;
        } else {
            return false;
        }
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (localStorage.getItem("userId")) {
            return true;
        } else {
            return false;
        }
    }

}