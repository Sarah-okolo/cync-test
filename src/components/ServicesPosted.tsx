import PreviewCard from "./PreviewCard";
import { Link } from 'react-router-dom'

function ServicesPosted() {
  
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* <Link to={`/service/${service.id}`} key={index} style={{textDecoration: 'none', color: 'initial'}}> */}
      {/* </Link> */}
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
        <PreviewCard />
      </div>
    </>
  )
}

export default ServicesPosted