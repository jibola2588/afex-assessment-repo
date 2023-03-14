import React from 'react'
import TableA from './TableA'
import TableB from './TableB'

const SectionA  = () => { 

return ( 
<div className = 'grid grid-cols-1 lg:grid-cols-2 gap-5'
> 
  <TableA />
  <TableB />
</div>
)
}

export default SectionA