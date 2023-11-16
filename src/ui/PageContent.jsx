
import { images } from "../constants"

function PageContent({title, children, styleType}) {
const base= ` w-[10rem] sm:w-[20rem]`
  

  const styles= {
    end:`flex justify-end items-end text-right flex-1 flex-col w-[10rem] `,
    normal:`w-[10rem] `
  }

   return(
    <div className= {styles[styleType]}>
      <h3 className="p-cormorant text-golden">{title}</h3>
      <img src={images.spoon} alt="spoon img" className="spoon-img mb-4"/>
      <p className="text-lightGrey text-xs base">{children}</p>
    </div>
  )
}

export default PageContent
