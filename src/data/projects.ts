export type Project = {
  id: string
  title: string
  description: string
  technologies: string[]
  status: string
  links?: { label: string; url: string }[]
  image?: string
}

export const projects: Project[] = [
  {
    id: 'jarl-9000',
    title: 'JARL-9000',
    description: 'Chatbot en Python para clasificar preguntas frecuentes y devolver respuestas según su categoría e idioma.',
    technologies: ['Python', 'scikit-learn', 'NLTK', 'pandas'],
    status: 'Disponible',
    links: [
      { label: 'Ver proyecto', url: 'https://github.com/MarcMachadoB/JARL-9000' },
    ],
    image: 'Jarl9000captura.png',
  },
  {
    id: 'proyectos-java-instituto',
    title: 'Proyectos académicos con Java',
    description: 'Dos proyectos realizados en el instituto con Java y Spring Boot, uno de ellos simula la gestión de un parking y otra de habitaciones de hotel.',
    technologies: ['Java', 'Spring Boot'],
    status: 'Disponible',
    links: [
      { label: 'Gestión de hotel', url: 'https://github.com/MarcMachadoB/hotel-spring-boot' },
      { label: 'Gestión de parking', url: 'https://github.com/MarcMachadoB/parking-spring-boot' },
    ],
    image: 'spring_boot-logo.png',
  },
]
