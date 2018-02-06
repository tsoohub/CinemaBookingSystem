import { Injectable } from '@angular/core';
import {
  HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent,
  HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent
} from '@angular/common/http';
import { } from '@angular/common/http/src/request';
import { Observable } from 'rxjs/Observable';

/*Molomjamts 02/05/2018
  Token Interceptor. It will read token from localstorage and 
  create new req with token and send it to express application
*/
@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<any> {
      const tokenId = localStorage.getItem('id_token');
      console.log('token in interceptor',tokenId);
      if(tokenId){
        const newReq = req.clone({
          headers:req.headers.set("Authorization","Bearer "+tokenId)
        })

        return next.handle(newReq);
      }else
      {
        return next.handle(req);
      }
  }

  constructor() { }

}
