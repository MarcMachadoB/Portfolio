export type Project = {
  id: string
  title: string
  description: string
  technologies: string[]
  status: string
  link?: string
}

export const projects: Project[] = [
  {
    id: 'jarl-9000',
    title: 'JARL-9000',
    description: 'Chatbot en Python para clasificar preguntas frecuentes y devolver respuestas según su categoría e idioma.',
    technologies: ['Python', 'scikit-learn', 'NLTK', 'pandas'],
    status: 'Disponible',
    link: 'https://github.com/MarcMachadoB/JARL-9000',
  },
  {
    id: 'proyecto-2',
    title: 'Proyecto en preparación',
    description: 'Espacio reservado para mostrar una nueva solución web.',
    technologies: ['Java', 'Spring Boot'],
    status: 'Próximamente',
  },
  {
    id: 'proyecto-3',
    title: 'Proyecto en preparación',
    description: 'Aquí podrás conocer otro proyecto, sus objetivos y sus tecnologías.',
    technologies: ['Python', 'IA'],
    status: 'Próximamente',
  },
]
