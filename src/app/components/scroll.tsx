'use client'

export default function Scroll ({ section }: { section: string }) {

  const handleScroll = () => {
    document.getElementById(section)?.scrollIntoView({behavior: 'smooth'})
  }

  return(
    <h2 onClick={handleScroll}>{section}</h2>
  )
}