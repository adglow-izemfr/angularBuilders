import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarWidget } from './navbar/navbar.widget';

@NgModule({
  imports: [CommonModule, RouterModule],
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
