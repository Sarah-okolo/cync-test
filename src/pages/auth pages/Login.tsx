import InputField from "@/components/ui/input-fields";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from "react";
import Loader from "@/components/ui/loader";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"

const formSchema = z.object({
  email: z.string().trim().email('Please enter a valid email address'),
  password: z.string().trim().min(1, 'Please enter your password'),
})

function Login() {
  const [lgPwVisible, setLgPwVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // RHF control
  const { register, handleSubmit, formState } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });
  const { isSubmitting, errors } = formState;

  // Submits the form data to the server
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(data);
    setIsSubmitted(true);
  }

  // password visibility for login page
  const changeLgPwVisibility = (): void => {
    setLgPwVisible(!lgPwVisible);
  }

  return (
    <>
        <div className="authBox">
          <div className="ml-3">
            <h1 className="font-bold text-4xl mb-2">Welcome Back</h1>
            <p className="text-textSecondary ml-2">Log in to access your account</p>
          </div>

          <div className="bg-bgSecondary px-16 py-8 rounded-2xl mt-7">
          
            {/* <p className="text-softRed font-bold text-center mt-3 mb-5 text-md">Incorrect login details. Please check and try again</p> */}

            <form onSubmit={handleSubmit(onSubmit)}>
              <InputField
                type='email'
                label='Email'
                labelFor='email'
                placeholder='e.g. example@email.com'
                customClass='formField'
                registerInput={register('email')}
                errMsg={errors.email?.message}
                hasError={!!errors.email}
                fieldErrorStyle='border-softRed'
                errorTextStyle='text-softRed text-xs text-right mr-2'
              />

              <div className="relative">
                <InputField
                  type={lgPwVisible ? 'text' : 'password'}
                  label='Password'
                  labelFor='password'
                  placeholder='Enter your password...'
                  customClass='formField'
                  registerInput={register('password')}
                  errMsg={errors.password?.message}
                  hasError={!!errors.password}
                  fieldErrorStyle='border-softRed'
                  errorTextStyle='text-softRed text-xs text-right mr-2'
                />
                <div className="absolute right-5 top-[45px] cursor-pointer bg-bgSecondary" onClick={changeLgPwVisibility}>
                  {
                    lgPwVisible ? (
                      <Eye size='17' color='#767676'/>
                    ) : (
                      <EyeOff size='17' color='#767676'/>
                    )
                  }
                </div>
              </div>

              <div className="mt-5 flex gap-6 justify-between items-center">
                <div className="text-linkSecondary text-sm min-w-max linkHoverSecondary">
                  <Link to='/forgot-password'>
                    <span>Forgot password?</span>
                  </Link>
                </div>
              </div>

              <div className="mt-5 flex gap-6 justify-between items-center">
                <Link to='/signup' className="text-linkSecondary text-sm min-w-max linkHoverSecondary">
                  <span className="block larger:inline">New user? </span>
                  <span className="font-bold">Create an account</span>
                </Link>
                
                <Button size='half' disabled={isSubmitting} type='submit' className={`text-md text-white ${isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'}`}>{ isSubmitting ? <Loader type="btn" /> : 'Login' }</Button>
              </div>
            </form>

            <div className='flex items-center justify-center my-5 gap-5'>
              <hr className="w-2/5"/>
              <p className='text-faintText'>or</p>
              <hr className="w-2/5"/>
            </div>

            <div className="w-full flex justify-center items-center">
              <Button variant='google' size='lg' className=""> <img src="/images/google.png" alt="Google logo" /> Continue with Google</Button>
            </div>

          </div>
        </div>
    </>
  )
}

export default Login