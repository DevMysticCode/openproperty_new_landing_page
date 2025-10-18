import React from 'react'

interface ChipsSceneProps {
  src?: string
  height?: string
}

const ChipsScene: React.FC<ChipsSceneProps> = ({
  src = 'https://my.spline.design/unchained-g9TVCuTR0uUZVQ8eWCi6YZ8y/',
  height = '600px',
}) => {
  return (
    <div className="spline-container w-full" style={{ height }}>
      <iframe
        src={src}
        frameBorder="0"
        width="100%"
        height={height}
        title="3D Chips Scene"
        style={{ height }}
      ></iframe>
    </div>
  )
}

export default ChipsScene
