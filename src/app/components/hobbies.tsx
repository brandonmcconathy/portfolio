import Image from "next/image"

function Hobbies(props: {title: string, imgpath: string, description: string}) {

  const { title, imgpath, description } = props

  return(
    <div>
      <h1>{title}</h1>
      <Image src={imgpath} alt={title} width={200} height={200} />
      <p>{description}</p>
    </div>
  )
}

export function HobbiesLeft(props: {title: string, imgpath: string, description: string}) {

  const { title, imgpath, description } = props

  return(
    <div>
      <Hobbies title={title} imgpath={imgpath} description={description} />
    </div>
  )
}

export function HobbiesRight(props: {title: string, imgpath: string, description: string}) {

  const { title, imgpath, description } = props
  
  return(
    <div>
      <Hobbies title={title} imgpath={imgpath} description={description} />
    </div>
  )
}