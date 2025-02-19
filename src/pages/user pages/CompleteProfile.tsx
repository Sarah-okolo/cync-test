import { Link } from "react-router-dom";
import { ChevronRight, CircleX, X, Check, CircleCheckBig, ShieldCheck, ShieldOff } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

interface ProfileStep {
  label: string;
  description: string;
  to: string;
}

function CompleteProfile() {
  // Profile completion steps
  const steps: ProfileStep[] = [ 
    { label: "Upload Photo", description: "jpg, png, or webp", to: "/contact-details" },
    { label: "Contact Details", description: "Names, Email, number e.t.c.", to: "/id-verification" },
    { label: "Means of Identification", description: "National ID, Work License etc", to: "/id-verification" },
    { label: "Proof of Address", description: "Light bill, Waste bill e.t.c.", to: "/id-verification" },
  ];

  return (
    <>
      <Header />
      
      <div className="flex justify-center items-center mt-8 mb-20 bg-gray-100 py-3 px-6">
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
          {/* Profile Card */}
          <div className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center w-full md:w-1/2 relative">
            <div className="relative w-22 h-22">
              <img
                src="/images/people.png"
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
            <h2 className="mt-5 mb-2 text-2xl font-semibold">Lawal Sodiq</h2>
            { false ?
              <p className="verified">
                <ShieldCheck size={16} className="mr-1 inline" /><span>Verified</span>
              </p>
              :
              <p className="unverified">
                <ShieldOff size={16} className="mr-1 inline" /><span>Unverified</span>
              </p>
            }
            <div className="mt-6 mb-1 text-4xl font-bold">0%</div>
            <p className="">Profile Completion</p>
            { false ?
                <p className="verified mt-8 p-2"><CircleCheckBig size={16} className="inline mr-3"/>Complete</p>
              :
                <p className="incomplete mt-8 p-2"><CircleX size={16} className="inline mr-2"/> Incomplete</p>
              }
          </div>

          {/* Profile Completion Steps */}
          <div className="bg-white p-8 rounded-xl shadow-md w-full md:w-1/2">
            <div className="flex justify-between items-center gap-4 mb-4">
              <h2 className="text-2xl font-semibold text-primary">Complete your profile</h2>
              { false ?
                  <Button>Verify</Button>
                :
                  <Button variant='secondary'>Save</Button>
              }
            </div>
            <div className="space-y-4">
              {steps.map((item, index) => (
                <Link
                  key={index}
                  to={item.to}
                  className="p-3 border-b rounded-lg flex justify-between items-center hover:bg-lightGreen"
                >
                  <div className="flex items-center gap-4">
                    { true ?
                      <div className="w-5 h-5 rounded-full bg-buttonPrimary text-buttonPrimaryText grid place-items-center"><Check size={10} strokeWidth={4}/></div>
                    :
                      <div className="w-5 h-5 rounded-full bg-bgPrimary grid place-items-center"><X size={10}/></div>

                    }
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <p className="text-xs text-faintText">{item.description}</p>
                    </div>
                  </div>
                  <ChevronRight />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CompleteProfile;