import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ab-navbar',
  templateUrl: './navbar.widget.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarWidget {}
