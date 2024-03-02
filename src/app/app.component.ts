import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

  }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    if (isPlatformBrowser(this.platformId)) {  
      gsap.to(".gsaplogo", {
        x: "52vw",
        y: "15vh",
        scale: 2.5,
        opacity: 1,
        scrollTrigger: {
          trigger: ".gsaplogo",
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        }
      });
      gsap.to(".sublogo", {
        x: "-52vw",
        y: "15vh",
        scale: 2.5,
        rotate: 360,
        scrollTrigger: {
          trigger: ".sublogo",
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        }
      });
    }
  }
 
}
