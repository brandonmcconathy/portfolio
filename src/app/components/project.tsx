import Image from "next/image"
import Link from "next/link"

export default function Project(props: { title: string, imgPath: string, pageLink: string, description: string }) {

  const { title, imgPath, pageLink, description } = props

  return(
    <Link href={pageLink} target="_blank" className="border border-red-700 flex flex-col justify-center items-center">
      <h1>{title}</h1>
      <Image src={imgPath} alt="image" width={200} height={200} />
      <p>{description}</p>
    </Link>
  )
}