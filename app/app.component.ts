import {Component} from 'angular2/core';
import {CoursesComponent} from "./courses.component";

@Component({
    selector: 'my-app',
    template: '<h1>First codding</h1><br><courses></courses>',
    directives: [CoursesComponent]
})
export class AppComponent { }