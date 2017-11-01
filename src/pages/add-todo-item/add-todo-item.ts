import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { TodoService } from '../../shared/todo.service'; 

@Component({
  selector: 'page-add-todo-item',
  templateUrl: 'add-todo-item.html'
})
export class AddTodoItemPage {

  todo: any;


  constructor(
    public todoService: TodoService,
    public alertController: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.todo = this.navParams.get('todo');
  }

  public close(){
    this.navCtrl.pop();
  }


}
