import { useParams } from "react-router-dom"
import pagesData from "../data/pagesData"
import SubPageLayout from "../components/SubPageLayout"

function DynamicPage() {

  const { parent, child, slug } = useParams()

  const pageSlug = slug || child || parent

  const page = pagesData[pageSlug]

  if (!page) {
    return <h1>Page Not Found</h1>
  }

  return (
    <SubPageLayout
      title={page.title}
      content={page.content}
      sections={page.sections}
    />
  )
}

export default DynamicPage