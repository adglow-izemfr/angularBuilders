import { TrackerStoreService } from '@ab/global';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Notification } from '../models/notification';

@Component({
  selector: 'ab-navbar',
  templateUrl: './navbar.widget.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarWidget {
  notification$!: Observable<Notification>;

  constructor(tracker: TrackerStoreService) {
    this.notification$ = tracker
      .selectAnyErrors$()
      .pipe(map(() => ({ class: 'is-danger', message: 'Houston!!!' })));
  }
}
