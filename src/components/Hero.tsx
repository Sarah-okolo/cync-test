import SearchBar from "./SearchBar";
import { useAuthenticationStore } from "../stores"
import InputField from "./ui/input-fields";
import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';


const schema = z.object({
  selectedOption: z.string().nonempty('Please select an option'),
})
  
function Hero() {
  const { isAuthenticated } = useAuthenticationStore();

  const { control } = useForm({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  return (
    <>
      <div className="bg-bgSecondary mx-8 my-3 px-10 py-4 rounded-3xl flex justify-between gap-20 items-center">
        <div>
          {
            isAuthenticated ?
            <img src="/images/hero-img-3.png" alt="random image of service workers"/>
            :
            <img src="/images/hero-img1.png" alt="random image of service workers" />
          }
        </div>

        <div className="grid gap-10 px-12">
          <div className="flex h-20 items-center gap-5 justify-between">
            <InputField
              type='dropdown'
              depCompFile='select.tsx'
              labelFor='selectedOption'
              labelClass=''
              placeholder='Pick a location'
              customClass = 'min-w-44 h-full w-max outline-none bg-transparent border-none font-Helvetica font-medium text-lg bg-buttonPrimary text-white rounded-tl-xl rounded-bl-xl font-medium rounded-tr-sm rounded-br-sm py-4 px-5'
              groupInputs={[
                {
                  label: 'Weekdays',
                  options: ['Tuesday', 'Monday', 'Sunday']
                },
                {
                  label: 'Months',
                  options: ['January', 'Feburary', 'March']
                }
              ]}
              subLabelCustomClass='text-xl'
              optionsCustomClass='focus:bg-Green-200'
              registerControl={control}
            />
            <SearchBar placeholder='Looking for ...' style='w-full bg-bgPrimary border border-primary rounded-xl' iconColor='#222'/>
          </div>
          <h1 className="text-center font-Helvetica px-5 font-bold leading-snug text-[40px]">
            { isAuthenticated ? 
              'Connecting You to the Right Experts in Just a Few Clicks.' 
            : 
              'Connecting You to the Right Experts in Just a Few Clicks.'
            }
          </h1>
        </div>

        <div>
        {
            isAuthenticated ?
            <img src="/images/hero-img-4.png" alt="random image of service workers" />
            :
            <img src="/images/hero-img2.png" alt="random image of service workers" />
          }
        </div>

      </div>
    </>
  )
}
export default Hero