import Image from "next/image"
import { hobbies } from '../../../lib/hobbies'

export default function Hobbies() {
  return(
    <section id="Hobbies" className="bg-white px-10 py-4 my-5 box-pop">
      <h1 className="text-2xl font-bold mb-5">Hobbies</h1>
      {hobbies.map((hobby:any, index:number) => {
        if (index % 2 == 0) {
          return(
            <HobbiesLeft title={hobby.title} imgpath={hobby.imgPath} description={hobby.description} />
          )
        }
        return(
          <HobbiesRight title={hobby.title} imgpath={hobby.imgPath} description={hobby.description} />
        )
      })}
    </section>
  )
}

function Hobby(props: {title: string, imgpath: string, description: string}) {

  const { title, imgpath, description } = props

  return(
    <>
      <div className="text-center w-3/4">
        <h1 className="text-lg font-semibold">{title}</h1>
        <p className="">{description}</p>
      </div>
      <Image src={imgpath} alt={title} width={200} height={200} className="rounded-xl" />
    </>
  )
}

function HobbiesLeft(props: {title: string, imgpath: string, description: string}) {

  const { title, imgpath, description } = props

  return(
    <div className="bg-blue-100 flex flex-row-reverse justify-between items-center w-1/2 ml-32 my-3 p-5 box-pop rounded-xl">
      <Hobby title={title} imgpath={imgpath} description={description} />
    </div>
  )
}

function HobbiesRight(props: {title: string, imgpath: string, description: string}) {

  const { title, imgpath, description } = props
  
  return(
    <div className="flex justify-end">
      <div className="bg-blue-100 flex justify-between items-center w-1/2 mr-32 my-3 p-5 box-pop rounded-xl">
        <Hobby title={title} imgpath={imgpath} description={description} />
      </div>
    </div>
  )
}