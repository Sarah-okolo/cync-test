import { useState } from "react";
import { ChevronLeft, ChevronRight, MessageSquareText, Star, ShieldCheck, ShieldOff } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lightbox from "@/components/ui/lightbox";
import { Button } from "@/components/ui/button";
import PreviewCard from "../components/PreviewCard";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    name: 'Fine wood crafts with perfect finishing and design for your home',
    location: 'Shomolu, Lagos',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor unde quo, aperiam rerum ipsum nihil consectetur adipisicing elit',
    price: 4000,
    provider: 'Olatunji Adebola',
    providerImage: '/images/lawal-img.png',
    image: '/images/demo-img.png'
  },
  {
    id: 2,
    name: 'Fine wood crafts',
    location: 'Shomolu, Lagos',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor unde quo, aperiam rerum ipsum nihil...',
    price: 4000,
    provider: 'Olatunji Adebola',
    providerImage: '/images/lawal-img.png',
    image: '/images/demo-img.png'
  },
  {
    id: 3,
    name: 'Fine wood crafts',
    location: 'Shomolu, Lagos',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor unde quo, aperiam rerum ipsum nihil...',
    price: 4000,
    provider: 'Olatunji Adebola',
    providerImage: '/images/lawal-img.png',
    image: '/images/demo-img.png'
  },
  {
    id: 4,
    name: 'Fine wood crafts',
    location: 'Shomolu, Lagos',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor unde quo, aperiam rerum ipsum nihil...',
    price: 4000,
    provider: 'Olatunji Adebola',
    providerImage: '/images/lawal-img.png',
    image: '/images/demo-img.png'
  },
  {
    id: 5,
    name: 'Fine wood crafts',
    location: 'Shomolu, Lagos',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor unde quo, aperiam rerum ipsum nihil...',
    price: 4000,
    provider: 'Olatunji Adebola',
    providerImage: '/images/lawal-img.png',
    image: '/images/demo-img.png'
  }
]

const images = [
  "/images/demo-img.png",
  "/images/demo-img2.jpg",
  "/images/demo-img3.jpg",
  "/images/demo-img.png",
  "/images/demo-img2.jpg",
  "/images/demo-img3.jpg",
];

const ViewService = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleNext = () => {
    const newIndex = (selectedIndex + 1) % images.length;
    setSelectedIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const handlePrev = () => {
    const newIndex = (selectedIndex - 1 + images.length) % images.length;
    setSelectedIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto mb-6 px-6">
        <div className="bg-white rounded-2xl shadow-sm p-6 pb-20 grid grid-cols-3 gap-8">
          {/* Left section - Service details */}
          <div className="col-span-2">
            <h2 className="text-2xl font-semibold mb-5">Couch making</h2>
            <div className="relative mt-4">
              <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-full" onClick={handlePrev}>
                <ChevronLeft size={45} className="bg-darkGray/70 rounded-md py-1 text-lightGreen hover:text-softGreen hover:scale-105 transition-all" />
              </button>
              <img
                src={selectedImage}
                alt="Couch"
                width={600}
                height={400}
                className="w-full h-96 object-cover rounded-lg cursor-pointer"
                onClick={() => setIsLightboxOpen(true)}
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-full" onClick={handleNext}>
                <ChevronRight size={45} className="bg-darkGray/70 rounded-md py-1 text-lightGreen hover:text-softGreen hover:scale-105 transition-all"/>
              </button>
            </div>

            {/* Thumbnails */}
            <div className="w-full flex gap-x-[2%] justify-around mt-4 overflow-hidden">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Thumbnail"
                  className={`w-[18.3%] object-cover rounded-md cursor-pointer border-2 ${
                    selectedImage === img ? "border-buttonPrimary" : "border-transparent"
                  }`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>

            {/* Service description */}
            <p className="my-6 text-gray-600 text-[16px]">
              Beautifully crafted custom couch to suit my needs. Quality craftsmanship and attention to detail.Beautifully crafted custom couch to suit my needs. Quality craftsmanship and attention to detail. Beautifully crafted custom couch to suit my needs. Quality craftsmanship and attention to detail.
            </p>

            <div className="flex items-center gap-12 mb-8">
              <div>
                <h3 className="text-lg font-medium">1 month</h3>
                <p className="text-faintText text-xs mt-1">Average timeline</p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-primary">₦50,000</h3>
                <p className="text-faintText text-xs mt-1">Starting price</p>
              </div>
            </div>
            
            {/* Tags */}
            <div className="flex space-x-2">
              <span className="tag">Craftman</span>
              <span className="tag">Craftsmanship</span>
              <span className="tag">Carpentry</span>
            </div>
          </div>

          {/* Right section - Profile & Reviews */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <div className="flex flex-col items-center space-x-4">
              <img src="/images/lawal-img.png" alt="Profile" width={53} height={53} className="rounded-full" />
              <div>
                <h3 className="font-md my-3 text-lg text-center">Lawal Sodiq</h3>
                <div className="flex items-center gap-3 justify-center">
                  <p className="flex items-center text-sm text-gray-600">
                    <Star className="mr-1" size={13} fill="#444"/> <span className="font-semibold">4.5&nbsp;</span> (200)
                  </p>
                  { true ?
                    <p className="verified">
                      <ShieldCheck size={16} className="mr-1 inline" /><span>Verified</span>
                    </p>
                    :
                    <p className="unverified">
                      <ShieldOff size={16} className="mr-1 inline" /><span>Unverified</span>
                    </p>
                  }
                </div>
              </div>
            </div>
            <div className="px-12">
              <Button variant='secondary' size='fullShort' className="w-full my-4">Visit Profile</Button>
              <Link to='/chat'>
                <Button size='fullShort' className="w-full">
                  <MessageSquareText size={16} className="mr-1" />Message
                </Button>
              </Link>
            </div>

            {/* Service Reviews */}
            <div className="flex justify-between items-center mt-8">
              <h3 className="text-[16px] font-semibold">Service reviews</h3>
              <p className="text-gray-600 text-sm font-medium">( 87 )</p>
            </div>
            <div className="mt-4 space-y-5">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="bg-lightGreen rounded-lg p-4 border-2">
                  <div className="flex mb-2">
                    <Star className="mr-1" size={13} fill="#444" />
                    <Star  className="mr-1" size={13} fill="#444"/>
                  </div>
                  <p className="font-semibold">User{63372 + index}</p>
                  <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              ))}

              <Button variant='outline' size='full' className="w-full border-2 hover:text-buttonPrimary">View all reviews</Button>
            </div>
          </div>
        </div>

        {isLightboxOpen && (
          <Lightbox
            images={images}
            initialIndex={selectedIndex}
            onClose={() => setIsLightboxOpen(false)}
          />
        )}

        <h2 className="font-bold text-3xl mt-10 mb-5">More like this</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {
            services.map((service, index) => (
              <PreviewCard 
                key={index}
                serviceImage={service.image}
                serviceName={service.name}
                providerLocation={service.location}
                description={service.description}
                startingPrice={service.price}
                provider={service.provider}
                providerImage={service.providerImage}
              />
            ))
          }
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ViewService;
