import { ChevronRight } from 'lucide-react';

function Sidebar() {
  const services: string[] = ['Plumbing', 'Auto repair', 'Carpentry', 'Painting', 'Construction', 'Legal', 'Appliances and furniture', 'Beauty', 'Catering'];

  return (
    <>
      <div className="bg-bgSecondary rounded-2xl py-2 max-h-max min-w-max sticky top-7">
        {
          services.map((service, index) => (
            <div key={index} className={`flex gap-5 justify-between items-center py-5 px-7 cursor-pointer hover:bg-bgPrimary ${service !== services[services.length-1] && 'border-b'}`}>
              <p>{service}</p>
              <ChevronRight />
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Sidebar