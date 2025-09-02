import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { ThemeService } from '../../services/theme-switcher.service';
@Component({
  selector: 'lib-ngx-smart-theme-switcher',
  standalone: true,
  imports: [NzSwitchModule, FormsModule],
  templateUrl: './ngx-smart-theme-switcher.component.html',
  styleUrl: './ngx-smart-theme-switcher.component.scss',
})
export class NgxSmartThemeSwitcherComponent {
  switchValue: boolean = false;
  @Input() label: string = '';
  constructor(private readonly themeServ: ThemeService) {}

  toggleTheme(event: boolean) {
    this.themeServ.toggleTheme(event);
  }
}
