import {Component} from '@angular/core';
import {faClock, faCheck, faBan, faTrashAlt} from '@fortawesome/free-solid-svg-icons';

enum Status {
  Active,
  Done,
  Canceled
}

interface ToDo {
  task: string;
  status: Status;
  created: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faClock = faClock;
  faCheck = faCheck;
  faBan = faBan;
  faTrashAlt = faTrashAlt;
  todos: Array<ToDo> = [
    {
      task: 'clean the dishes',
      status: Status.Active,
      created: Date.now()
    },

    {
      task: 'Vacuum the carpet',
      status: Status.Active,
      created: Date.now()

    }
  ];

  clearTodos() {
    this.todos.splice(0);
  }

  addToDo(input) {
    const task = input.value;
    input.value = '';
    if (task) {
      this.todos.push(
        {
          task: task,
          status: Status.Active,
          created: Date.now()
        });
    }
  }

  deleteTask(index: number) {
    this.todos.splice(index, 1);
  }

  setStatus(index: number, statusOrdinal: number) {
    this.todos[index].status = Status[Status[statusOrdinal]];
  }

  sortTasks(by = 'task') {
    switch (by) {
      case 'task':
        this.todos.sort((a, b) => {
          if (a.task.toLowerCase() > b.task.toLowerCase()) {
            return 1;
          }
          if (a.task.toLowerCase() < b.task.toLowerCase()) {
            return -1;
          }
          return 0;
        });
        break;
      case 'created':
        this.todos.sort((a, b) => {
          if (a.created > b.created) {
            return 1;
          }
          if (a.created < b.created) {
            return -1;
          }
          return 0;
        });
        break;
      case 'status':
        this.todos.sort((a, b) => {
          if (a.status > b.status) {
            return 1;
          }
          if (a.status < b.status) {
            return -1;
          }
          return 0;
        });
        break;
    }
  }
}
