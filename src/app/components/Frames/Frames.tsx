import React from 'react'

const Frames = (url: string) => {
  return (
		<iframe
			className='border-[1px] border- rgba(0, 0, 0, 0.1);'
			width='800'
			height='450'
			src={url}
          allowFullScreen
      ></iframe>
	);
}

export default Frames
