import {Component} from 'angular2/core';
import {HTTPTestService} from './http-test.services';

/**
 * [Component description]
 * @param {``,}} {	selector [description]
 */
@Component({
	selector: 'http-test',
	template: `
		<button (click) = "onGetDetailsClick()">Get Details</button>
		<p>{{getData}}</p>
	`,
	providers: [HTTPTestService]
})

/**
 * 	
 */
export class httpTestComponent {
	getData: string;

	constructor(private _httpService: HTTPTestService){}

	onGetDetailsClick(){
		this._httpService.getTitle()
			.subscribe(
			data => { console.log('data', data); this.getData = JSON.stringify(data) },
				error => console.log('error', error),
				() => console.log('finished')
				);
	}
}