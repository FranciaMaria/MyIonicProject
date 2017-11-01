import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { TodoService } from '../../shared/todo.service'; 
import { HomePage } from '../home/home';

@Component({
  selector: 'page-add-todo',
  templateUrl: 'add-todo.html'
})
export class AddTodoPage {

  title: string;
  date: string;
  time: string;
  done: boolean;


  constructor(
    public todoService: TodoService,
    public alertController: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams) {}

  public addTodo(){
    this.todoService.push({
      title: this.title,
      date: this.date,
      time: this.time,
      done: false
    });
    this.showSuccessMessage();
    this.navCtrl.push(HomePage);

  }

  public showSuccessMessage(){
    this.alertController.create({
      title: 'Success',
      subTitle: 'You have created new Todo!',
      buttons: ['Dismiss']
    }).present();
  }


}
