import { SubHeading } from "../components"

import { images } from "../constants"
import Button from "./Button"

function PageContent({title, children, button}) {
   return(
    <div>
      <h3 className="p-cormorant">{title}</h3>
      <img src={images.spoon} alt="spoon img" className="spoon-img"/>
      <p className="text-white text-xs md:text-sm">{children}</p>
      <Button className="bg-golden">{button}</Button>
    </div>
  )
}

export default PageContent
