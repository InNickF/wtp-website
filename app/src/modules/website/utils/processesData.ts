export interface ProcessProps {
  step: number
  id: string
  name: string
  description: string
}

const processesData: Array<ProcessProps> = [
  {
    step: 1,
    id: 'understanding',
    name: 'Understanding',
    description:
      'Usually problems begin with multiple systems, or manual work, limited features or limited data, we turn these pain points into possibles opportunities.'
  },
  {
    step: 2,
    id: 'conceptualization',
    name: 'Conceptualization',
    description:
      'Once we understand the problems, we trace the path to the goals, prepare the team, and start building the solutions.'
  },
  {
    step: 3,
    id: 'data',
    name: 'Data Extraction',
    description:
      'At this point, we begin extracting, transforming, loading and preparing data from multiple systems and software to useful information.'
  },
  {
    step: 4,
    id: 'analytics',
    name: 'Analytics / ML',
    description:
      'From analytics to Machine Learning, we turn data into actions based on strategic information.'
  },
  {
    step: 5,
    id: 'development',
    name: 'Development',
    description:
      'And based on all our research and collected data, we build applications focused on real needs, to transform the final software into innovative tools.'
  }
]

export default processesData
