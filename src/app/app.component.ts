import { Component } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { RouterModule } from "@angular/router";

@Component({
  standalone: true,
  selector: "app-root",
  template: `
    <nav class="fixed navbar bg-base-100 top-0 left-0 right-0 z-50 h-20">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl" [routerLink]="['/']">comet</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li><a class="btn ">Add Job</a></li>
        </ul>
      </div>
    </nav>
    <main class="min-h-screen pt-20">
      <router-outlet/>
    </main>
  `,
  imports: [HomeComponent, RouterModule],
})
export class AppComponent {
  title = "comet";
}
