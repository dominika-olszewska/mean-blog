import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {PostsComponent} from './posts/posts.component';
import {PostComponent} from './post/post.component';
import {AdminComponent} from './admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
  },
  {
    path: 'post/:id',
    component: PostComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
