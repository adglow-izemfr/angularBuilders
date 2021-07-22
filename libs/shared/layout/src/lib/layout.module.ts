import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarWidget } from './navbar/navbar.widget';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    NavbarWidget,
    FooterComponent
  ],
  exports: [
    NavbarWidget,
    FooterComponent
  ],
})
export class LayoutModule {}
