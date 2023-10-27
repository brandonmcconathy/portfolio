import Image from "next/image"

function Hobbies(props: {title: string, imgpath: string, description: string}) {

  const { title, imgpath, description } = props

  return(
    <>
      <div className="text-center w-3/4">
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="">{description}</p>
      </div>
      <Image src={imgpath} alt={title} width={200} height={200} className="" />
    </>
  )
}

export function HobbiesLeft(props: {title: string, imgpath: string, description: string}) {

  const { title, imgpath, description } = props

  return(
    <div className="flex flex-row-reverse justify-between items-center w-1/2 mx-10 border border-red-700">
      <Hobbies title={title} imgpath={imgpath} description={description} />
    </div>
  )
}

export function HobbiesRight(props: {title: string, imgpath: string, description: string}) {

  const { title, imgpath, description } = props
  
  return(
    <div className="flex justify-end border border-red-700">
      <div className="flex justify-between items-center w-1/2 mx-10 border border-red-700">
        <Hobbies title={title} imgpath={imgpath} description={description} />
      </div>
    </div>
  )
}