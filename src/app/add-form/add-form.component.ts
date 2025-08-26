import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  NgxSmartDatePickerComponent,
  NgxSmartFileUploaderComponent,
  NgxSmartInputComponent,
  NgxSmartModalFooterComponent,
  NgxSmartModalHeaderComponent,
  NgxSmartNumberInputComponent,
  NgxSmartPasswordComponent,
  NgxSmartSearchComponent,
  NgxSmartSelectComponent,
  NgxSmartTableComponent,
  ToastMessages,
} from 'ngx-dashboard-kit';

@Component({
  selector: 'app-add-form',
  standalone: true,
  imports: [
    CommonModule,
    NgxSmartTableComponent,
    NgxSmartInputComponent,
    NgxSmartNumberInputComponent,
    ReactiveFormsModule,
    NgxSmartFileUploaderComponent,
    NgxSmartSearchComponent,
    NgxSmartPasswordComponent,
    NgxSmartDatePickerComponent,
    NgxSmartSelectComponent,
    NgxSmartModalHeaderComponent,
    NgxSmartModalFooterComponent,
  ],
  templateUrl: './add-form.component.html',
  styleUrl: './add-form.component.scss',
})
export class AddFormComponent {
  testForm!: FormGroup;
  constructor(
    private readonly fb: FormBuilder,
    private readonly msgServ: ToastMessages
  ) {
    this.testForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      date: ['', Validators.required],
      gender: ['', Validators.required],
      age: ['', Validators.required],
      file: [''],
    });
  }
  genders = [
    {
      text: 'Male',
      value: '1',
    },
    {
      text: 'Female',
      value: '2',
    },
  ];
  submitForm() {
    // console.log(this.testForm.controls['name'].invalid, 'validation');
    // console.log(this.testForm.value, this.ageModel);
    this.msgServ.createToastMsg('loading', 'hey', 1000);
  }
}
