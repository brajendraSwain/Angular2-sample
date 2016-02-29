import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HTTPTestService{

	constructor(private _http: Http){}

	getTitle(){
		return this._http.get('http://jsonplaceholder.typicode.com/posts/1')
				.map(res => res.json())
	}

	postJSON(){
		// var url = 'http://jsonplaceholder.typicode.com/posts';
		// var json = JSON.stringify({
		// 	"userId": 10,
		// 	"id": 100,
		// 	"title": "at nam consequatur ea labore ea harum",
		// 	"body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
		// });
		// var headers = new Headers();
		// headers.append('Content-Type', 'application/json');

		// var options = {
		// 	headers: headers
		// };
		// var params = 'json = ' + json;
		// return this._http.post(url, params, options)
		// 		.map(res => res.json());

		return $.ajax('http://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			data: {
				"userId": 10,
				"id": 100,
				"title": "at nam consequatur ea labore ea harum",
				"body": "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
			}
		});
	}
}