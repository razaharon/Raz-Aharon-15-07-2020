import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToastsComponent } from './components/toasts/toasts.component';
import { NgbToastModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    ToggleButtonComponent,
    NavbarComponent,
    ToastsComponent
  ],
  imports: [
    CommonModule,
    NgbCollapseModule,
    RouterModule,
    NgbToastModule
  ],
  exports: [
    ToggleButtonComponent,
    NavbarComponent,
    ToastsComponent
  ]
})
export class SharedModule { }
