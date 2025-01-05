import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./layout/footer/footer.component";
import {HeaderComponent} from "./layout/header/header.component";
import {SplitDescriptionPipe} from "./pipes/split-description.pipe";



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SplitDescriptionPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SplitDescriptionPipe
  ]
})
export class SharedModule { }
