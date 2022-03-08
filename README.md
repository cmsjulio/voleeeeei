# Angular Crash Course - Traversy Media

## Do [Youtube](https://www.youtube.com/watch?v=3dHNOWTI7H8)

## Parei em create a task service. (~45')

### Task service:
Aleterada forma de obter os dados -- agora utilizando o TaskService.
Instalado o json-server (npm install json-server) para criar um mock da base de dados.
Depois de adicionado, inserida a linha "server":  "json-server --watch db.json --port 5000" em package.json.

Adicionado o arquivo db.json, com a base inserida na mão.

Pra rodar, fazer 'npm run server'.

Após configurado o servidor, inserido o HttpClient para permitir requisição GET.

### Delete
Inserida função de deletar item com Input, Output, EventEmitter (no task-item.component).

Inserido em tsconfig/compilerOptions os parametros para evitar erros de initializar e any.

### Reminder
Adicionado css condicional com reminder:task.reminder (se reminder for true, aplicar css de task.reminder, conforme em task-item.component.css.)