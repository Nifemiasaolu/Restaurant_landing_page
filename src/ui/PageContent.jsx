import { SubHeading } from "../components"

import { images } from "../constants"
import Button from "./Button"

function PageContent({title, children, styleType}) {
  const styles= {
    end: `flex justify-end items-end text-right flex-1 flex-col`,
    normal: ``
  }

   return(
    <div className= {styles[styleType]}>
      <h3 className="p-cormorant">{title}</h3>
      <img src={images.spoon} alt="spoon img" className="spoon-img mb-4"/>
      <p className="text-white text-xs md:text-sm">{children}</p>
    </div>
  )
}

export default PageContent
