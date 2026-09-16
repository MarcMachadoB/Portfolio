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
    id: 'proyecto-1',
    title: 'Proyecto en preparación',
    description: 'Aquí aparecerá la descripción de uno de mis próximos proyectos.',
    technologies: ['React', 'TypeScript'],
    status: 'Próximamente',
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
