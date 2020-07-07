import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit, OnChanges {
  @Input() stars: number;
  @Output() star = new EventEmitter();
  widthStar: number;

  constructor() {
  }

  ngOnInit() {
  }

  wStar() {

  }

  ngOnChanges() {
    this.widthStar = this.stars * 75 / 5;
  }

}
