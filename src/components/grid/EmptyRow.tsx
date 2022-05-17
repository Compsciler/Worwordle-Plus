import { solution } from '../../lib/words'
import { Cell, isShaded } from './Cell'

export const EmptyRow = () => {
  const emptyCells = Array.from(Array(solution.length))

  return (
    <div className="flex justify-center mb-1">
      {emptyCells.map((_, i) => (
        <Cell key={i} isShaded={isShaded(i)} />
      ))}
    </div>
  )
}
