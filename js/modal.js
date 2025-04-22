const htmlData = `
<input type="checkbox" id="task-modal" class="hidden peer">
    <div
        class="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 hidden peer-checked:flex items-center justify-center">
        <div class="glass rounded-xl max-w-md w-full p-6 modal-animation neon-box-accent">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-bold futuristic-font text-[var(--accent)]">NUEVA TAREA</h2>
                <label for="task-modal" class="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </label>
            </div>

            <form onsubmit="postData(event)" class="space-y-4">
                <div>
                    <label for="name" class="block text-sm font-medium mb-1">Nombre de la Tarea</label>
                    <input id="name" name="name" type="text" class="w-full cyber-input rounded-lg" required>
                </div>

                <div>
                    <label for="description" class="block text-sm font-medium mb-1">Descripción</label>
                    <textarea id="description" name="description" rows="4" class="w-full cyber-input rounded-lg" required></textarea>
                </div>

                <div>
                    <label for="due_date" class="block text-sm font-medium mb-1">Fecha de Vencimiento</label>
                    <input id="due_date" name="due_date" type="date" class="w-full cyber-input rounded-lg"  required>
                </div>

                <div class="pt-4">
                    <button type="submit" class="cyber-button w-full">
                        Crear Tarea
                    </button>
                </div>
            </form>
        </div>
    </div>
`;

const modalContainer = document.createElement("div");// <div></div>
modalContainer.innerHTML = htmlData; // <div>for, input</div>

document.body.appendChild(modalContainer);