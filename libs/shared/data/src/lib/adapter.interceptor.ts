/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable()
export class AdapterInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      filter((event) => event instanceof HttpResponse),
      map((event) => event as HttpResponse<any>),
      map((httpResponse) => {
        const body = httpResponse.body;
        const adaptedBody = body['data'] || [];
        const adaptedResponse = httpResponse.clone({ body: adaptedBody });
        return adaptedResponse;
      })
    );
  }
}
