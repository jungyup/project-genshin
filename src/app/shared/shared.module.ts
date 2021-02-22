import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { DividerComponent } from'./divider/divider.component';

@NgModule({
  declarations: [HeaderComponent, DividerComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
