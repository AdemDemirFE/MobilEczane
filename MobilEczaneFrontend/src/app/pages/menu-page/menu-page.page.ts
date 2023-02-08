import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MenuButtonsService } from 'src/providers/service/menuButtonsService';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.page.html',
  styleUrls: ['./menu-page.page.scss'],
})
export class MenuPagePage implements OnInit {
  public menuButtons: any = [];

  constructor(
    public buttons: MenuButtonsService,
    public navController: NavController
  ) { }

  ngOnInit() {
    this.menuButtons = this.buttons.getMenuButtons();
  }
  goMenu(button:any) {
    this.navController.navigateForward(button.url);
  }
  
}
