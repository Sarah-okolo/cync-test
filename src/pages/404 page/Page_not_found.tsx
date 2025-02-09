import { Link } from 'react-router-dom';

function Page_not_found() {
  return (
    <>
      <div>
        <img src="" alt="" />
        <div>
          <h1>Opps!</h1>
          <p>The requested page could not be found</p>
          <Link to="/">Go to Home</Link>
        </div>
      </div>
    </>
  )
}

export default Page_not_found