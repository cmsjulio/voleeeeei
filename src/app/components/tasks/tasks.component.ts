import { Sorteio } from './../../sorteio';
import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  tasksParaSorteio: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks.sort((a, b) => (a.nivel < b.nivel ? 1 : -1));
      this.tasksParaSorteio = this.tasks.filter((t) => t.reminder == true);
    });
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
      this.tasks = this.tasks.sort((a, b) => (a.nivel < b.nivel ? 1 : -1));
    });
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.tasksParaSorteio = this.tasks.filter((t) => t.reminder == true);
    this.tasks = this.tasks.sort((a, b) => (a.nivel < b.nivel ? 1 : -1));
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => {
      this.tasks.push(task);
      this.tasksParaSorteio = this.tasks.filter((t) => t.reminder == true);
      this.tasks = this.tasks.sort((a, b) => (a.nivel < b.nivel ? 1 : -1));
    });
  }

  realizarSorteio(): void {
    const teste = new Sorteio(this.tasksParaSorteio);
    teste.teste();
  }
}
