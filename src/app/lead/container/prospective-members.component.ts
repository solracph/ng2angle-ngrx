import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';


import { AppState } from '../../reducers';

@Component({
    templateUrl: './prospective-members.component.html'
  })
  export class ProspectiveMembersComponent implements OnInit {
    
    constructor(private _store: Store<AppState>){
    }
    
    ngOnInit() {
     
    }
  }