import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ViewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  title = 'angular-practice';
  parentMessage: string = 'Message from parent dude!';
  childMessage: string;
  childMessageViaOuput: string;

  constructor(private detector: ChangeDetectorRef) {}

  @ViewChild(ChildComponent) childComp: any;

  ngAfterViewInit(): void {
    this.childMessage = this.childComp.childMessage;
    this.detector.detectChanges();
  }

  receiveMessage(event: string) {
    this.childMessageViaOuput = event;
  }
}
