import { Link, useLocation } from "react-router-dom"
import pagesData from "../data/pagesData"

export default function Breadcrumb(){

  const location = useLocation()

  const paths = location.pathname.split("/").filter(Boolean)

  return(
    <div className="breadcrumb">

      <Link to="/">मुख्यपृष्ठ</Link>

      {paths.map((path,index)=>{

        const decoded = decodeURIComponent(path)

        const href = "/" + paths.slice(0,index+1).join("/")

        const title = pagesData[decoded]?.title || decoded.replace(/-/g," ")

        return(

          <span key={index} className="crumb">

            <span className="separator"> &gt; </span>

            {index === paths.length-1
              ? <span>{title}</span>
              : <Link to={href}>{title}</Link>
            }

          </span>

        )

      })}

    </div>

  )

}