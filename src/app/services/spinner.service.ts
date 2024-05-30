// spinner.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private spinnerSubject = new BehaviorSubject<boolean>(false);
  spinnerState = this.spinnerSubject.asObservable();

  show() {
    console.log('Spinner show');
    this.spinnerSubject.next(true);
  }

  hide() {
    console.log('Spinner hide');
    this.spinnerSubject.next(false);
  }
}
