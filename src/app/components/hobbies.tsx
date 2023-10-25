function Hobbies(props: {title: string, imgpath: string, description: string}) {

  const { title, imgpath, description } = props

  return(
    <div>

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