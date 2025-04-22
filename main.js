const taskConatiner = document.getElementById("app");

class Task {
    constructor(name, description, dueDate) {
        this.id = Math.floor(Math.random() * 10000);
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.status = "in-progress";
        this.progress = Math.floor(Math.random() * 100);
    }

    static buildTaskCard(task) {
        return `<div class="glass-card rounded-lg p-4 mb-4 flex flex-col">
                        <div class="flex justify-between items-start mb-2">
                            <div class="flex items-center gap-3">
                                <div class="task-status" style="background: ${
                                  task.status === "completed"
                                    ? "var(--secondary)"
                                    : "var(--accent)"
                                };"></div>
                                <h3 class="text-xl font-semibold">${
                                  task.name
                                }</h3>
                            </div>
                            <div class="flex gap-2">
                                <button class="p-2 rounded-full hover:bg-[rgba(0,247,255,0.1)] transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--primary)]"
                                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>
                                </button>
                                <button onclick="deleteTask(${
                                  task.id
                                })" class="p-2 rounded-full hover:bg-[rgba(255,0,128,0.1)] transition-all">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[var(--accent)]" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <p class="text-gray-300 mb-3">${task.description}</p>
                        <div class="mt-auto">
                            <div class="flex justify-between text-xs text-gray-400 mb-1">
                                <span>Progreso: 30%</span>
                                <span>Vence: ${task.dueDate}</span>
                            </div>
                            <div class="progress-bar w-full">
                                <div class="h-full bg-[var(--secondary)]" style="width: ${
                                  task.progress
                                }%"></div>
                            </div>
                        </div>
                    </div>`;
    }
}

// Lista de tareas mockeadas
let tasks = taskTitles.map((title, index) => {
    return new Task(title, taskDescriptions[index], getRandomFutureDate());
});

function loadData() {
    // implementar el renderizado de las tareas
}

function postData(event) {
    event.preventDefault();

    try {
        // Obtener el formulario y sus campos
        const form = event.target.closest('form');
        const taskName = form.querySelector('input[placeholder="Nombre de la Tarea"]').value;
        const description = form.querySelector('input[placeholder="Descripción"], textarea[placeholder="Descripción"]').value;
        const dueDate = form.querySelector('input[placeholder="dd/mm/aaaa"]').value;

        // Validar campos obligatorios
        if (!taskName.trim()) {
            throw new Error("El nombre de la tarea es requerido");
        }

        // Crear objeto task (ajusta según lo que espere saveTask)
        const task = {
            title: taskName,
            description: description,
            dueDate: dueDate,
            completed: false
        };
        saveTask(task);
        form.reset();

        // Cerrar modal (ajusta según tu implementación)
        const modal = document.getElementById("task-modal");
        modal.checked = false;

        showNotification("Tarea añadida correctamente!");
    } catch (error) {
        console.error("Error:", error);
        showNotification(error.message || "Error al añadir la tarea. Inténtalo de nuevo.");
    }
}

/**
 *
 * task actions
 *
 * */

function saveTask(task) {
    // 1. Obtener las tareas existentes (o inicializar un arreglo vacío si no hay)
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // 2. Añadir la nueva tarea al arreglo
    tasks.push(task);

    // 3. Guardar el arreglo actualizado en localStorage (como JSON)
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // 4. Opcional: Mostrar en consola para depuración
    console.log('Tarea guardada:', task);

    // 5. Recargar los datos (si loadData() está definido)
    loadData(); // Asumiendo que esta función actualiza la UI con las tareas
}

function loadData() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    console.log('Tareas cargadas:', tasks);
    // Aquí iría la lógica para renderizar las tareas en el DOM
    // Ejemplo:
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = tasks.map(task => `
      <li>${task.title} - ${task.dueDate}</li>
  `).join('');
}

function deleteTask(id) {
    // implementar la eliminación de la tarea

    loadData();
}

/**
 * challenges
 *
 * */

// Aqui implementar la logica para la busqueda de tareas
document.getElementById("search-input").addEventListener("input", (e) => {
    e.preventDefault();
    console.log(e.target.value);
});

function filterTasks(searchTerm) {
    // 1. Obtener tareas de localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // 2. Filtrar tareas (busca en título y descripción)
    const filteredTasks = tasks.filter(task => {
        const lowerSearchTerm = searchTerm.toLowerCase();
        return (
            task.title.toLowerCase().includes(lowerSearchTerm) ||
            (task.description && task.description.toLowerCase().includes(lowerSearchTerm))
        );
    });

    // 3. Mostrar resultados en la UI
    renderTasks(filteredTasks); // Asume que existe una función `renderTasks`
}

// Aqui implementar la logica para eliminar tareas
function handleDeleteTask(id) {
    try {
        // 1. Obtener todas las tareas de localStorage
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        // 2. Filtrar para excluir la tarea con el ID proporcionado
        const updatedTasks = tasks.filter(task => task.id !== id);

        // 3. Guardar el arreglo actualizado en localStorage
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));

        // 4. Actualizar la interfaz (recargar datos)
        loadData(); // Asume que esta función recarga las tareas en la UI

        // 5. Notificar éxito
        showNotification('Tarea eliminada correctamente');
    } catch (error) {
        console.error('Error al eliminar tarea:', error);
        showNotification('Error al eliminar la tarea');
    }
}

// Aqui implementar la logica de ver la cantidad de tareas
function getTotalTasks() {
    // Obtener las tareas de localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Devolver el número total de tareas
    return tasks.length;
}

// Aqui implementar la logica de ver la cantidad de tareas completadas
function getCompletedTasksCount() {
    // 1. Obtener todas las tareas de localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // 2. Filtrar solo las tareas completadas y contar
    return tasks.filter(task => task.completed === true).length;
}

// Aqui implementar la logica de ver la cantidad de tareas pendientes
function getPendingTasksCount() {
    // 1. Obtener todas las tareas de localStorage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // 2. Filtrar tareas no completadas (pendientes)
    // Asumiendo que una tarea pendiente es aquella con completed: false
    return tasks.filter(task => task.completed === false).length;

    // Si tienes estado 'en progreso' y quieres excluirlas:
    // return tasks.filter(task => !task.completed && !task.inProgress).length;
}

// Aqui implementar la logica de ver la cantidad de tareas en progreso
class Task {
    constructor({ title, description, dueDate }) {
        this.id = Date.now();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.completed = false;
        this.inProgress = false; // ← Nuevo campo para estado en progreso
    }
}
/*implementacion de busqueda,.........*/
// Función para filtrar tareas
function filterTasks(searchTerm) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const filteredTasks = tasks.filter(task => {
        const searchLower = searchTerm.toLowerCase();
        return (
            task.title.toLowerCase().includes(searchLower) ||
            (task.description && task.description.toLowerCase().includes(searchLower))
        );
    });
    renderTasks(filteredTasks);
}

// Event listener para la barra de búsqueda
document.getElementById('search-input').addEventListener('input', (e) => {
    filterTasks(e.target.value.trim());
});

// Función para renderizar tareas filtradas
function renderTasks(tasks) {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = tasks.map(task => `
      <div class="task-item" data-id="${task.id}">
          <h3>${task.title}</h3>
          <p>${task.description || 'Sin descripción'}</p>
          <small>Fecha: ${task.dueDate}</small>
          <button onclick="deleteTask('${task.id}')">Eliminar</button>
          <button onclick="toggleTaskStatus('${task.id}', 'inProgress')">
              ${task.inProgress ? 'En progreso ✅' : 'Marcar en progreso'}
          </button>
          <button onclick="toggleTaskStatus('${task.id}', 'completed')">
              ${task.completed ? 'Completada ✅' : 'Marcar completada'}
          </button>
      </div>
  `).join('');
}