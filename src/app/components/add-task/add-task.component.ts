import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  nome: string;
  nivel: number;
  reminder: boolean = false;
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.nome) {
      alert('Informe o nome do jogador.');
      return;
    }

    if (!Number.isFinite(this.nivel)) {
      alert('Informe o nível do jogador (número).');
      return;
    }

    const newTask = {
      nome: this.nome,
      nivel: this.nivel,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.nome = '';
    this.nivel = 0;
    this.reminder = false;
  }
}
