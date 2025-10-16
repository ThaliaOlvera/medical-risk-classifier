const patient = {
  id: 1,
  name: "Ana López",
  age: 45,
  gender: "F",
  dateBirth: "04-12-1979",
  glucose: 110,
  pressure: 130,
  temperature: 37,
  heartRate: 80,
  respiratoryRate: 18
};

const patients= [];

const sintomas = {
  dolorToracico: {
    nombre: "Dolor torácico",
    descripcion: "Dolor en el pecho asociado a afecciones cardíacas o pulmonares.",
    tipo: "booleano",
  },
  disnea: {
    nombre: "Disnea",
    descripcion: "Dificultad para respirar o sensación de falta de aire.",
    tipo: "booleano",
  },
  fiebre: {
    nombre: "Fiebre",
    descripcion: "Temperatura corporal superior a 38°C.",
    tipo: "numérico",
    umbral: 38,
  },
  alteracionConciencia: {
    nombre: "Alteración de la conciencia",
    descripcion: "Confusión o desorientación mental.",
    tipo: "booleano",
  },
  dolorAbdominalIntenso: {
    nombre: "Dolor abdominal intenso",
    descripcion: "Dolor severo en la región abdominal.",
    tipo: "booleano",
  },
  debilidadMuscular: {
    nombre: "Debilidad muscular focalizada",
    descripcion: "Pérdida de fuerza localizada en una región del cuerpo.",
    tipo: "booleano",
  },
  taquicardia: {
    nombre: "Taquicardia",
    descripcion: "Frecuencia cardíaca mayor a 100 lpm.",
    tipo: "numérico",
    umbral: 100,
  },
  hipotension: {
    nombre: "Hipotensión",
    descripcion: "Presión arterial menor a 90/60 mmHg.",
    tipo: "objeto",
    umbral: { sistolica: 90, diastolica: 60 },
  }
};


// ENFERMEDADES Y SUS SÍNTOMAS CRÍTICOS
const enfermedades = [
  {
    nombre: "SÍNDROME CORONARIO AGUDO",
    sintomasCriticos: ["Dolor torácico", "Disnea", "Taquicardia"],
    riesgo: "ALTO"
  },
  {
    nombre: "ACV AGUDO",
    sintomasCriticos: ["Alteración conciencia", "Debilidad muscular"],
    riesgo: "ALTO"
  },
  {
    nombre: "SEPSIS",
    sintomasCriticos: ["Fiebre", "Hipotensión", "Alteración conciencia"],
    riesgo: "ALTO"
  },
  {
    nombre: "EPOC DESCOMPENSADO",
    sintomasCriticos: ["Disnea", "Taquicardia"],
    riesgo: "MEDIO"
  },
  {
    nombre: "GASTROENTERITIS AGUDA",
    sintomasCriticos: ["Dolor abdominal", "Fiebre"],
    riesgo: "BAJO"
  },
  {
    nombre: "INFECCIÓN RESPIRATORIA",
    sintomasCriticos: ["Fiebre", "Disnea"],
    riesgo: "MEDIO"
  }
];

