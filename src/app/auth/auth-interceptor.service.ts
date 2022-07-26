import { Injectable } from "@angular/core";
import { HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { AuthService } from "./auth.service";
import { exhaustMap, take } from "rxjs";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  //Interceptor used to add token to authenticated user when we store and fetch data from backend

  constructor(private authService: AuthService) {}


  intercept(req: HttpRequest<any>, next: HttpHandler) {

    //rxjs 'take' goes to observable for one instance of user and unsubscribes(getting the token)
    //rxjs 'exhaustMap' then changes observable into http so only sending one observable but getting
    //user and http information

    return this.authService.user.pipe(
      take(1), //takes 1 user then unsubscribes, then converts observable to http
      exhaustMap(user => {

        if(!user) {
          return next.handle(req);
        }
        const modifiedReq = req.clone({
          params: new HttpParams().set('auth', user.token)
          //sets auth token as query parameter --> specific to firebase, other API could utilize header
        });
        return next.handle(modifiedReq);
      })
    );
    
  }
}