import { Router, NavigationEnd } from "@angular/router";
import { HeaderService } from "./../../header.service";
import { DataService } from "./../../data.service";
import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  HostListener
} from "@angular/core";
import { transition, trigger, useAnimation } from "@angular/animations";
import { fadeInUp, flipInX } from "ng-animate";
import { filter } from "rxjs/operators";
import { Subscription } from "rxjs";
import { Observable } from "rxjs";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
  animations: [
    trigger("fadeInUp", [
      transition(
        "* => *",
        useAnimation(fadeInUp, {
          params: { timing: 1, delay: 0 }
        })
      )
    ]),
    trigger("flipInX", [
      transition(
        "* => *",
        useAnimation(flipInX, {
          params: { timing: 2, delay: 0 }
        })
      )
    ])
  ]
})
export class BlogComponent implements OnInit, OnDestroy {
  defaultImage =
    "https://res.cloudinary.com/ewebdesigns/image/upload/v1569452391/img2_p_nwm71i.jpg";
  image = "/assets/images/img2_p.jpg";

  title = "Blog";
  selectedPost;
  posts$: Observable<any[]>;
  windowScrolled: boolean;

  @HostListener("window:scroll", [])
  subsciption: Subscription;
  constructor(
    private headerService: HeaderService,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.headerService.currentTitle.subscribe(title => (this.title = title));

    this.posts$ = this.dataService.getPosts();

    this.subsciption = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => window.scrollTo(5, 5));
  }

  ngOnDestroy() {
    this.subsciption.unsubscribe();
  }

  newTitle() {
    return this.headerService.changeTitle("Blog");
  }

  onWindowScroll() {
    if (
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop > 100
    ) {
      this.windowScrolled = true;
    } else if (
      (this.windowScrolled && window.pageYOffset) ||
      document.documentElement.scrollTop ||
      document.body.scrollTop < 10
    ) {
      this.windowScrolled = false;
    }
  }
  scrollToTop() {
    (function smoothscroll() {
      const currentScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - currentScroll / 8);
      }
    })();
  }
}
