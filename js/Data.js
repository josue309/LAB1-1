// Función para generar una fecha futura aleatoria (dentro de los próximos 30 días)
function getRandomFutureDate() {
  const today = new Date();
  const futureDate = new Date();
  futureDate.setDate(today.getDate() + Math.floor(Math.random() * 30) + 1);
  return futureDate.toISOString().split("T")[0]; // Formato YYYY-MM-DD
}

// Datos mockeados
const taskTitles = [
  "Estudiar para el examen de álgebra",
  "Desarrollar login en React",
  "Hacer deploy del backend",
  "Revisar código del equipo",
  "Actualizar documentación del proyecto",
  "Practicar ejercicios de CTF",
  "Configurar entorno de desarrollo",
  "Redactar informe de avances",
  "Revisar PRs pendientes",
  "Planificar nuevas funcionalidades",
];

const taskDescriptions = [
  "Repasar todos los temas de la unidad 3 y 4.",
  "Implementar la autenticación con JWT.",
  "Subir los cambios a Vercel y probar el API.",
  "Comentar mejoras en el pull request.",
  "Asegurar que esté todo actualizado para el sprint.",
  "Resolver retos de reversing y forensics.",
  "Instalar dependencias necesarias y verificar rutas.",
  "Escribir lo realizado durante la semana.",
  "Probar los pull requests de los compañeros.",
  "Definir las nuevas tareas del siguiente sprint.",
  "Revisar la implementación de la API de pagos.",
];
