# began video "Front End Setup - Angular 17" (Codefi with German Cruz)

# PickupSports2Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.0.

# set up

you'll want to have Visual Studio Code installed

already did a lot for Backend API using Ruby on Rails (see pickup_sports_2_api)

had already globally installed/updated to Angular 17.2

opened Command Prompt terminal on my computer

cd to folder I want to keep this project in

ng new pickup_sports_2_client

selected SCSS for styling

Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? n

wait for all files to be created

open in VS Code

code pickup_sports_2_client

# making first file, generating our models (class, not component)

open terminal in VS Code

ng g class shared/models/user

if you don't want to generate the spec files here, you can add --skip-tests flag, or manually delete, or just ignore them

# src/app/shared/models/user.ts

export class User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  username: string;

constructor(user:any) {
  this.id = user.id || 0
  this.first_name = user.first_name || ""
  this.last_name = user.last_name || ""
  this.email = user.email || ""
  this.username = user.username || ""
  }
}

# src/app/shared/models/post.ts
ng g class shared/models/post

import { User } from "./user";

export class Post {
  id: number;
  content: string;
  created_at: string;
  user?: User;

  constructor(post:any) {
    this.id = post.id || 0
    this.content = post.content || ""
    this.created_at = post.created_at || ""
    this.user = post.user || null;
  }
}

# create a component

ng g c features/timeline

this is going to represent a list of posts

# src/app/features/timeline.component.ts

in video he creates dummy post to see in browser to test

# src/app/features/timeline.component.html
container, main and 2 side columns
# src/app/features/timeline.component.scss
styled side columns at 20%

# app.routes.ts

# app.component.html

router-outlet

# post component
ng g c shared/components/posts/post

# app/shared/components/posts/post.component.ts
# app/shared/components/posts/post.component.html
# app/shared/components/posts/post.component.scss

concludes video "Front End Setup - Angular 17"

# begin video "Angular to Rails API - Fetching Posts from Back End"

set up environments

ng g environments

# src/environments/environment.development.ts

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000'
};

# src/environments/environment.ts

export const environment = {
  production: true,
  // TODO
  apiUrl: 'http://www.production.com'
};

# post service

ng g s core/services/post

# src/app/core/services/post.service.ts

see pickup_sports_2_api for more changes

concludes video "Angular to Rails API - Fetching Posts from Back End"

# begin video "Rails Seeds File - Populate users and posts"

# db/seeds.rb (pickup_sports_2_api)

concludes video "Rails Seeds File - Populate users and posts"

# begin video "Fetching Events with Pagination"









