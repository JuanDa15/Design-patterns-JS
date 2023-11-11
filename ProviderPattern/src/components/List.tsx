import { type ReactNode } from 'react'
import ListItem from './ListItem'

export default function List (): ReactNode {
  return (
    <ul>
      {
        new Array(10).fill(0).map((_, i) => (
          <ListItem key={i}/>
        ))
      }
    </ul>
  )
}
