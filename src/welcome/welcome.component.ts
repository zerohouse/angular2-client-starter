import {HTTP_PROVIDERS} from 'angular2/http';
import {Component} from 'angular2/core';

@Component({
	selector: 'welcome',
	providers: [
		HTTP_PROVIDERS,
	],
	templateUrl:'./welcome.html'
})
export class WelcomeComponent {
	public header:string = 'Welcome';
}
