import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mission-filter.component.html',
  styleUrl: './mission-filter.component.css'
})
export class MissionFilterComponent {
  @Output() yearSelected = new EventEmitter<string>();

  years: string[] = Array.from({ length: 18 }, (_, i) => `${2006 + i}`);

  onYearChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.yearSelected.emit(selectElement.value);
  }
}