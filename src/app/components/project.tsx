import Image from "next/image"
import Link from "next/link"

export default function Project(props: { title: string, imgPath: string, pageLink: string, gitHubLink: string , description: string }) {

  const { title, imgPath, pageLink, gitHubLink, description } = props

  return(
    <div className="bg-blue-200 w-1/3 rounded-xl box-pop flex flex-col justify-center items-center">
      <h1 className="text-xl font-semibold">{title}</h1>
      <Image src={imgPath} alt="image" width={200} height={200} className="rounded-xl" />
      <p>{description}</p>
    </div>
  )
}