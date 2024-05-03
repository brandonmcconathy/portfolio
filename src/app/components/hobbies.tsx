import Image from "next/image"
import { hobbies } from '../../../lib/hobbies'

export default function Hobbies() {
  return(
    <section id="Hobbies" className="bg-white px-10 py-4 my-5 box-pop">
      <h1 className="text-2xl font-bold mb-5">Hobbies</h1>
      {hobbies.map((hobby:any, index:number) => <Hobby title={hobby.title} imgpath={hobby.imgPath} description={hobby.description} index={index} key={index} />)}
    </section>
  )
}

function Hobby(props: {title: string, imgpath: string, description: string, index: number}) {

  const { title, imgpath, description, index } = props

  return(
    <>
      {(index % 2 == 0) ? 
      <div className="bg-blue-100 flex flex-row-reverse justify-between items-center w-1/2 ml-32 my-3 p-5 box-pop rounded-xl">
        <div className="text-center w-3/4">
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="">{description}</p>
        </div>
        <Image src={imgpath} alt={title} width={200} height={200} className="rounded-xl" />
      </div> : 
      <div className="flex justify-end">
        <div className="bg-blue-100 flex justify-between items-center w-1/2 mr-32 my-3 p-5 box-pop rounded-xl">
          <div className="text-center w-3/4">
            <h1 className="text-lg font-semibold">{title}</h1>
            <p className="">{description}</p>
          </div>
          <Image src={imgpath} alt={title} width={200} height={200} className="rounded-xl" />
        </div>
      </div>}
    </>
  )
}