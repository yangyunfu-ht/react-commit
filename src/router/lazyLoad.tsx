import { Suspense } from 'react'
import React from 'react'

const lazyLoad = (Component: React.LazyExoticComponent<() => JSX.Element>) => {
  return <Suspense>
    <Component />
  </Suspense>
}

export default lazyLoad