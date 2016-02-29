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
		<button (click) = "onPostDetailsClick()">Post Details</button>
		<p>{{postData}}</p>
	`,
	providers: [HTTPTestService]
})

/**
 * 	
 */
export class httpTestComponent {
	getData: string;
	postData: string;

	constructor(private _httpService: HTTPTestService){}

	onGetDetailsClick(){
		this._httpService.getTitle()
			.subscribe(
			data => { console.log('data', data); this.getData = JSON.stringify(data) },
				error => console.log('error', error),
				() => console.log('finished')
				);
	}

	onPostDetailsClick() {
		// this._httpService.postJSON()
		// 	.subscribe(
		// 	data => { console.log('data', data); this.postData = JSON.stringify(data) },
		// 	error => console.log('error', error),
		// 	() => console.log('finished')
		// 	);

		this._httpService.postJSON()
			.then(data => { console.log('data', data); this.postData = JSON.stringify(data)});
	}
}