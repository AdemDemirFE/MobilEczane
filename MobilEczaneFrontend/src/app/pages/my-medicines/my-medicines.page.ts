import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-medicines',
  templateUrl: './my-medicines.page.html',
  styleUrls: ['./my-medicines.page.scss'],
})
export class MyMedicinesPage implements OnInit {

  ilacList: any = [];
  constructor() { }

  ngOnInit(){
    this.ilacList = [
    {
      name: 'Arvales',
      icon: 'home'
    },
    {
      name: 'Arvales',
      icon: 'person'
    },
    {
      name: 'Arvales',
      icon: 'person'
    },
    {
      name: 'Arvales',
      icon: 'person'
    },
    {
      name: 'Arvales',
      icon: 'person'
    },
    ]
  }


  addMedicine(ilac: any) {

  }
}
