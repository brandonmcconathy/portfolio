'use client'

export default function ScrollTop () {

  const handleScroll = () => {
    document.getElementById('top')?.scrollIntoView({behavior: 'smooth'})
  }

  return(
    <h1 onClick={handleScroll}>Brandon McConathy</h1>
  )
}