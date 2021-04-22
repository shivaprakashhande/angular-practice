import { Injectable } from '@angular/core';

console.log('In Service A');

@Injectable({
  providedIn : 'root'
})

export class ServiceAService {

  constructor() { }
}
