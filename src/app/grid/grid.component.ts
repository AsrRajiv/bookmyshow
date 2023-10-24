import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Movies } from '../app.model';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit, OnChanges {

    @Input() appTitle: string = "";
    @Output() childEmitter = new EventEmitter();
    @Input() movies: Movies[] = [];


    ngOnChanges() {
        console.log('ng on changes triggered -->', this.appTitle);
    }

    ngOnInit() {
        console.log('child components loaded');
        console.log('Movies -->', this.movies);
    }

    emitData() {
        this.childEmitter.emit({ text: "event is emitted" });
    }

}
