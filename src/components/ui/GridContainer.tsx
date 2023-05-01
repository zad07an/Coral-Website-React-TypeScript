import { ReactNode } from 'react'

interface IGridContainer {
  children: ReactNode
}

const GridContainer: React.FC<IGridContainer> = ({children}) => {
  return (
    <div className=' w-full grid grid-cols-1 sm-450:grid-cols-2 md-768:grid-cols-3 lg-1024:grid-cols-4 gap-4'>
      {children}
    </div>
  )
}

export default GridContainer