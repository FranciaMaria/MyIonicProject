import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()

export class TodoService {
	todos: Array<{title: string, date: string, time: string, done: boolean}>;

	constructor(private storage: Storage){}

	public push(todo){
		/*if (!this.todos) {
			this.todos = [];
		}
		this.todos.push(todo);*/
		return this.getAll().then((todos) => {
			todos.push(todo);
			return this.storage.set('todos', todos);
		});
	}

	public getAll(){
		//return this.todos;
		return this.storage.get('todos').then((todos) => {
			return todos || [];
		});
	}
}