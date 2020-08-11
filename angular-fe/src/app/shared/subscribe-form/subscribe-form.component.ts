import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.scss']
})
export class SubscribeFormComponent implements OnInit {


  subscribeForm = this.fb.group({
    nameField: ['', [Validators.required, Validators.min(4)]],
    emailField: ['', [Validators.required]]
  });

  constructor(public fb: FormBuilder) {
    this.subscribeForm.valueChanges.subscribe(val => {
      console.log('the incoming value is: ', val)
    })
  }

  ngOnInit(): void {
  }

  handleSubscribeData() {
    alert(`the subscription data is:  ${this.subscribeForm.value}`)
  }

}
