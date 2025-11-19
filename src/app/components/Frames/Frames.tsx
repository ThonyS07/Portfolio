import React from 'react'

const Frames = ({ url }: { url: string }) => {
  return (
		<iframe
			className='border border-gray-200'
			width='800'
			height='450'
			src={url}
          allowFullScreen
      ></iframe>
	);
}

export default Frames
