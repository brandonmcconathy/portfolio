import Image from "next/image"
import Link from "next/link"

export default function Project(props: { title: string, imgPath: string, pageLink: string, gitHubLink: string, tech: string, description: string }) {

  const { title, imgPath, pageLink, gitHubLink, tech, description } = props

  return(
    <div className="bg-blue-200 w-1/3 gap-3 py-4 rounded-xl box-pop flex flex-col justify-center items-center">
      <h1 className="text-xl font-semibold">{title}</h1>
      <Image src={imgPath} alt="image" width={200} height={200} className="rounded-xl" />
      <p className="italic text-sm">{tech}</p>
      <p>{description}</p>
      <div className="flex gap-4 items-center">
        {pageLink == '' ? null : <Link href={pageLink} target="_blank" className="bg-black text-white rounded-lg px-3 py-2 font-semibold hover:bg-gray-700  transition duration-300">Live Website</Link>}
        <Link href={gitHubLink} target="_blank" className="bg-black text-white rounded-lg px-3 py-2 font-semibold hover:bg-gray-700  transition duration-300">Github</Link>
      </div>
    </div>
  )
}