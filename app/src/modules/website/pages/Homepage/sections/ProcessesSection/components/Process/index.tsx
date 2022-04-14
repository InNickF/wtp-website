import { memo } from 'react'
import { ProcessProps } from './typings/props'
import './index.css'

const Process = ({ step, name, description, id }: ProcessProps) => {
  return (
    <article id={id} className="process-container">
      <div className="process--step-container">
        <p className="process--step">{step}</p>
      </div>
      <h3 className="process--name">{name}</h3>
      <p className="process--description">{description}</p>
    </article>
  )
}
export default memo(Process, () => {
  return true
})
