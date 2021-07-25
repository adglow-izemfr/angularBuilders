import { TrackerStoreService } from '@ab/global';
import {
  HttpErrorResponse,
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TrackerInterceptor implements HttpInterceptor {

  constructor(private tracker: TrackerStoreService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.tracker.trackerEntry({
          category: 'ERROR',
          event: 'HTTP',
          label: error.message,
          value: error.status
        });
        return throwError(error);
      })
    );
  }
}
