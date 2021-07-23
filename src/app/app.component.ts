import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	constructor(private router: ActivatedRoute){}
  title = 'theRealCarneiro';
	public gitLink = window.location.href.split("/").pop();

	@HostBinding('class') className = '';
	toggleControl = new FormControl(false);
	icon: string = ''

	darkModeToggle(): void{
			if (this.icon == "brightness_5"){
				this.icon = "bedtime";
				this.className = 'darkMode';
			}else{
				this.icon = "brightness_5";
				this.className = '';
			}
	}

	gitLinkToggle(name: string): void {
		this.gitLink = name;
	}

	ngOnInit(): void {
		this.className = 'darkMode';
		this.icon = 'bedtime'
	}
}
