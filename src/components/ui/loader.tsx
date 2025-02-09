
function Loader({type}: {type: string}) {
  return (
    <>
      {
        type === 'screen' && (
          <div className="loader h-12"></div>
        )
      }
      {
        type === 'btn' && (
          <div className="loader h-6"></div>
        )
      }
    </>
  )
}

export default Loader