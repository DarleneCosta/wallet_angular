import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const access_token = localStorage.getItem('access_token');
    let newReq = req;
    if (access_token) {
      newReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${access_token}`),
      });
    }
    return next.handle(newReq);
  }
}
