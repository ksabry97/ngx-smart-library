import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import {
  NgxSmartTableComponent,
  TableColumn,
  TableAction,
  NgxSmartNumberInputComponent,
  NgxSmartFileUploaderComponent,
  NgxSmartPasswordComponent,
  NgxSmartDatePickerComponent,
  NgxSmartSelectComponent,
  ToastMessages,
  NgxSmartAlertComponent,
  NgxSmartConfirmationComponent,
  NgxSmartSpinnerComponent,
  NgxSmartModalComponent,
  ModalService,
} from 'ngx-dashboard-kit';
import { NgxSmartSearchComponent } from '../../../projects/ngx-dashboard-kit/src/lib/components/ngx-smart-search/ngx-smart-search.component';
import { NgxSmartInputComponent } from '../../../projects/ngx-dashboard-kit/src/lib/components/ngx-smart-input/ngx-smart-input.component';
import { AddFormComponent } from '../add-form/add-form.component';
import { NgxSmartThemeSwitcherComponent } from '../../../projects/ngx-dashboard-kit/src/lib/components/ngx-smart-theme-switcher/ngx-smart-theme-switcher.component';

@Component({
  selector: 'app-banks',
  standalone: true,
  imports: [
    CommonModule,
    NzButtonModule,
    NzInputModule,
    NgxSmartTableComponent,
    NgxSmartInputComponent,
    NgxSmartNumberInputComponent,
    ReactiveFormsModule,
    NgxSmartFileUploaderComponent,
    NgxSmartSearchComponent,
    FormsModule,
    NgxSmartPasswordComponent,
    NgxSmartDatePickerComponent,
    NgxSmartSelectComponent,
    NgxSmartAlertComponent,
    NgxSmartConfirmationComponent,
    NgxSmartSpinnerComponent,
    NgxSmartModalComponent,
    NgxSmartThemeSwitcherComponent,
  ],
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.scss'],
})
export class BanksComponent {
  columns: TableColumn[] = [
    { field: 'id', header: 'Bank ID', width: '100px' },
    { field: 'name', header: 'Bank Name', sortable: true },
    { field: 'status', header: 'Status', template: 'boolean', width: '120px' },
    { field: 'scheme', header: 'Card Scheme', sortable: true },
    { field: 'terminals', header: 'Terminals', sortable: true },
    { field: 'country', header: 'Country', sortable: true },
  ];

  actions: TableAction[] = [
    {
      label: 'View Details',
      icon: 'eye',
      severity: 'info',
    },
    {
      label: 'Edit Bank',
      icon: 'edit',
      severity: 'primary',
    },
  ];

  banks = [
    {
      id: 280122,
      name: 'WE Bank',
      status: true,
      scheme: 'Visa',
      terminals: 145,
      country: 'Egypt',
    },
    {
      id: 280121,
      name: 'VodaBank',
      status: true,
      scheme: 'Mastercard',
      terminals: 89,
      country: 'Egypt',
    },
    {
      id: 280120,
      name: 'ADCB',
      status: true,
      scheme: 'Visa',
      terminals: 234,
      country: 'UAE',
    },
    {
      id: 280119,
      name: 'LightBoxV3Bank',
      status: false,
      scheme: 'Union Pay',
      terminals: 12,
      country: 'UAE',
    },
    {
      id: 280119,
      name: 'LightBoxV3Bank',
      status: false,
      scheme: 'Union Pay',
      terminals: 12,
      country: 'UAE',
    },
    {
      id: 280119,
      name: 'LightBoxV3Bank',
      status: false,
      scheme: 'Union Pay',
      terminals: 12,
      country: 'UAE',
    },
    {
      id: 280119,
      name: 'LightBoxV3Bank',
      status: false,
      scheme: 'Union Pay',
      terminals: 12,
      country: 'UAE',
    },
    {
      id: 280119,
      name: 'LightBoxV3Bank',
      status: false,
      scheme: 'Union Pay',
      terminals: 12,
      country: 'UAE',
    },
    {
      id: 280119,
      name: 'LightBoxV3Bank',
      status: false,
      scheme: 'Union Pay',
      terminals: 12,
      country: 'UAE',
    },
    {
      id: 280119,
      name: 'LightBoxV3Bank',
      status: false,
      scheme: 'Union Pay',
      terminals: 12,
      country: 'UAE',
    },
    {
      id: 280119,
      name: 'LightBoxV3Bank',
      status: false,
      scheme: 'Union Pay',
      terminals: 12,
      country: 'UAE',
    },
    {
      id: 280119,
      name: 'LightBoxV3Bank',
      status: false,
      scheme: 'Union Pay',
      terminals: 12,
      country: 'UAE',
    },
    {
      id: 280119,
      name: 'LightBoxV3Bank',
      status: false,
      scheme: 'Union Pay',
      terminals: 12,
      country: 'UAE',
    },
    {
      id: 280119,
      name: 'LightBoxV3Bank',
      status: false,
      scheme: 'Union Pay',
      terminals: 12,
      country: 'UAE',
    },
    {
      id: 280119,
      name: 'LightBoxV3Bank',
      status: false,
      scheme: 'Union Pay',
      terminals: 12,
      country: 'UAE',
    },
    {
      id: 280119,
      name: 'LightBoxV3Bank',
      status: false,
      scheme: 'Union Pay',
      terminals: 12,
      country: 'UAE',
    },
    {
      id: 280119,
      name: 'LightBoxV3Bank',
      status: false,
      scheme: 'Union Pay',
      terminals: 12,
      country: 'UAE',
    },
    {
      id: 280119,
      name: 'LightBoxV3Bank',
      status: false,
      scheme: 'Union Pay',
      terminals: 12,
      country: 'UAE',
    },
    {
      id: 280119,
      name: 'LightBoxV3Bank',
      status: false,
      scheme: 'Union Pay',
      terminals: 12,
      country: 'UAE',
    },
    {
      id: 280119,
      name: 'LightBoxV3Bank',
      status: false,
      scheme: 'Union Pay',
      terminals: 12,
      country: 'UAE',
    },
    {
      id: 280119,
      name: 'LightBoxV3Bank',
      status: false,
      scheme: 'Union Pay',
      terminals: 12,
      country: 'UAE',
    },
    {
      id: 280119,
      name: 'LightBoxV3Bank',
      status: false,
      scheme: 'Union Pay',
      terminals: 12,
      country: 'UAE',
    },
  ];

  filteredBanks: any[] = [];
  get activeBanksCount(): number {
    return this.banks.filter((b) => b.status === true).length;
  }

  get totalTerminals(): number {
    return this.banks.reduce((sum, b) => sum + b.terminals, 0);
  }

  handleActionClick(event: {
    action: TableAction;
    rowData: any;
    rowIndex: number;
  }): void {
    console.log(
      'Action clicked:',
      event.action.label,
      'on row:',
      event.rowData
    );

    switch (event.action.label) {
      case 'View Details':
        this.viewBank(event.rowData);
        break;
      case 'Edit Bank':
        this.editBank(event.rowData);
        break;
    }
  }

  viewBank(bank: any): void {
    console.log('View bank:', bank);
    // Implement view logic
  }

  editBank(bank: any): void {
    console.log('Edit bank:', bank);
    // Implement edit logic
  }

  testForm!: FormGroup;
  ageModel = 0;
  addForm = AddFormComponent;
  ismodalVisible: boolean = false;
  constructor(
    private readonly fb: FormBuilder,
    private readonly msgServ: ToastMessages,
    public readonly modalServ: ModalService
  ) {
    this.testForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      date: ['', Validators.required],
      gender: ['', Validators.required],
      age: ['', Validators.required],
      file: [''],
    });
    this.ismodalVisible = !this.modalServ.isModalClosed();
  }
  showModal() {
    this.modalServ.isModalClosed.set(false);
  }
  submitForm() {
    // console.log(this.testForm.controls['name'].invalid, 'validation');
    // console.log(this.testForm.value, this.ageModel);
    this.msgServ.createToastMsg('loading', 'hey', 1000);
  }
  searchText = '';
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
  submitSearch(event: string | any) {
    if (event) {
      this.filteredBanks = this.banks.filter((bank) => {
        return bank.name
          .toLocaleLowerCase()
          .includes(event.toLocaleLowerCase());
      });
    } else this.filteredBanks = this.banks;
  }

  toggleTheme() {}
}
