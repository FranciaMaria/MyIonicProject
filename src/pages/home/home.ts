import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { TodoService } from '../../shared/todo.service';
import { AddTodoItemPage } from '../add-todo-item/add-todo-item';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  selectedItem: any;
  items: any;


  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams, 
  			  public modalCtrl: ModalController,
  			  public todoService: TodoService) {

  	this.selectedItem = navParams.get('item');

  	this.items = todoService.getAll();  	
  }



  public showTodoDetails(todo){
  	this.modalCtrl.create(
  		AddTodoItemPage,
  		{ todo }
  	).present();
  }

}
