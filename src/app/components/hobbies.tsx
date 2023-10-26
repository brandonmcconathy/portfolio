import Image from "next/image"

function Hobbies(props: {title: string, imgpath: string, description: string}) {

  const { title, imgpath, description } = props

  return(
    <>
      <h1>{title}</h1>
      <Image src={imgpath} alt={title} width={200} height={200} />
      <p>{description}</p>
    </>
  )
}

export function HobbiesLeft(props: {title: string, imgpath: string, description: string}) {

  const { title, imgpath, description } = props

  return(
    <div className="text-left">
      <Hobbies title={title} imgpath={imgpath} description={description} />
    </div>
  )
}

export function HobbiesRight(props: {title: string, imgpath: string, description: string}) {

  const { title, imgpath, description } = props
  
  return(
    <div className="text-right">
      <Hobbies title={title} imgpath={imgpath} description={description} />
    </div>
  )
}