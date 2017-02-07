import { Component } from '@angular/core';
import { DiveLogEntry } from './dive-log-entry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public dives: DiveLogEntry[] = [];
  private index = 0;

  private stockDives = DiveLogEntry.stockDives;

  public enableAdd() {
    return this.index < this.stockDives.length;
  }

  public addDive() {
    if (this.enableAdd()) {
      this.dives.push(this.stockDives[this.index++]);
    }
  }

  public clearDives() {
    this.dives = [];
    this.index = 0;
  }
}
