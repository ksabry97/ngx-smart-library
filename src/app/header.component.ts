import { Component } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NzDropDownModule, NzButtonModule, NzIconModule, FormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  languages = [
    { label: 'En', value: 'en' },
    { label: 'Ar', value: 'ar'}
  ];
  selectedLang = this.languages[0];
  dropdownOpen = false;
  toggleDropdown(){
    this.dropdownOpen = !this.dropdownOpen;
  }
  changeLang(lang:string){
    this.selectedLang = this.languages.find(l => l.value === lang) ?? this.languages[0];
    this.dropdownOpen = false;
  }
  getSelectedLabel(): string {
    const lang = this.languages.find(l => l.value === this.selectedLang.value);
    return lang ? `${lang.label}` : '';
  }
}