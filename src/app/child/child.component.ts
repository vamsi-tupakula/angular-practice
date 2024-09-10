import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculateService } from '../calculate.service';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule, CommonModule, FormComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  // providers: [CalculateService],
})
export class ChildComponent {
  products: string[] = [];
  @Input() FromParent = '';
  isRed: boolean = true;

  inputVal: string;
  fruits: string[] = ['Apple', 'Banano', 'Carrot', 'Grape', 'Mango'];

  childMessage = 'Child Message Dude!';
  childMessageViaOutput = 'Child message using output and event emmiter';

  imgUrl =
    'https://farm4.staticflickr.com/3928/33137499263_37938c1387_k.jpg?momo_cache_bg_uuid=b0dae760-3f7a-4c54-a6e5-19ca3d03a2f4';

  @Output() messageEvent = new EventEmitter();

  constructor() {
    // this.products = inject(CalculateService).getProducts();
    // this.products = service.getProducts();
    let service = new CalculateService();
    this.products = service.getProducts();
  }

  sendMessage() {
    this.messageEvent.emit(this.childMessageViaOutput);
  }

  handleTextColor() {
    this.isRed = !this.isRed;
  }

  keyUp(value: string) {
    alert(value);
  }
}
