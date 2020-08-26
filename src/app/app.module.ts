import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { FormsModule } from '@angular/forms';
import { TextEditorComponent } from './text-editor/text-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    TextEditorComponent
  ],
  imports: [
    BrowserModule,
    EditorModule,
    FormsModule
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'assets/tinymce/tinymce.min.js' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
