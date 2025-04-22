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
    // Get form data

    saveTask(task);
    form.reset();
    const modal = document.getElementById("task-modal");
    modal.checked = false;
    showNotification("Tarea añadida correctamente!");
  } catch (error) {
    showNotification("Error al añadir la tarea. Inténtalo de nuevo.");
  }
}

/**
 *
 * task actions
 *
 * */

function saveTask(task) {
  // implementar la creación de la tarea
  console.log(task);

  loadData();
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

// Aqui implementar la logica para eliminar tareas
function handleDeleteTask(id) {}

// Aqui implementar la logica de ver la cantidad de tareas

// Aqui implementar la logica de ver la cantidad de tareas completadas

// Aqui implementar la logica de ver la cantidad de tareas pendientes

// Aqui implementar la logica de ver la cantidad de tareas en progreso
