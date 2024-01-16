import { timer } from 'rxjs';

timer(2000, 1000).forEach(value => console.log(value));