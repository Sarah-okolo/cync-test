import InputField from "@/components/ui/input-fields";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useRef, useEffect } from "react";
import Loader from "@/components/ui/loader";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"


const formSchema = z.object({
  firstName: z.string().trim().min(1, 'Required*'),
  lastName: z.string().trim().min(1, 'Required*'),
  email: z.string().trim().email('Please enter a valid email address'),
  password: z.string().trim().min(8, 'Password must be at least 8 characters long'),
  otp: z.string().trim().length(6, "6 digits required").regex(/^\d+$/, "Only numbers allowed"),
})

function Signup() {
  const [suPwVisible, setSuPwVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const confirmPwRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);
  const [otp, setOtp] = useState<string>('');

  // RHF control
  const { register, handleSubmit, formState, trigger, getValues} = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onTouched',
  });
  const { errors, isSubmitting } = formState;

  // Submits the form data to the server
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    if (passwordRef.current?.value === confirmPwRef.current?.value) {
      // Check if OTP is valid !
      if (otp === data.otp) {
        console.log("Invalid OTP");
        return;
      }
      // Send new user data to the server
      else {
        const { otp, ...userData } = getValues(); // Remove OTP from user data
        await new Promise((resolve) => setTimeout(resolve, 3000));
        console.log(userData);
        setIsSubmitted(true);
      }
    }
    else {
      setPasswordsMatch(false);
    }
  }

  // password visibility for signup page
  const changeSuPwVisibility = (): void => {
    setSuPwVisible(!suPwVisible);
  }

  useEffect(() => {
    const pwInput = passwordRef.current;
    const cfmPwInput = confirmPwRef.current;

    if (!pwInput || !cfmPwInput) return;

    // Checks if passwords match
    const handlePasswordsMatch = () => {
      if (!pwInput || !cfmPwInput) return;

      // Check if confirm password input has a value
      if (cfmPwInput.value.length > 0 ) {
        setPasswordsMatch(pwInput.value === cfmPwInput.value);
      }
    };

    cfmPwInput.addEventListener("input", handlePasswordsMatch);
    pwInput.addEventListener("input", handlePasswordsMatch);

    return () => {
      pwInput.removeEventListener("input", handlePasswordsMatch);
      cfmPwInput.removeEventListener("input", handlePasswordsMatch);
    }
  }, []);

  // sends an OTP to the user's provided email.
  const sendOTP = async () => {
    const emailField = emailRef.current;
    // Trigger email field validation if it's empty or has an error
    if (!emailField || !!errors.email || !emailField.value) {
      trigger('email');
      return;
    }
    // Send OTP to the user's email
    else {
      console.log({email : emailField.value});
      // setOtp(res.otp);
    }
  }


  return (
    <>
      <div className="authBox">
          <div className="ml-3">
            <h1 className="font-bold text-4xl mb-2">Create an Account</h1>
            <p className="text-textSecondary ml-2">Fill in your details to sign up</p>
          </div>

          <div className="bg-bgSecondary p-8 rounded-2xl mt-7 px-16 py-8">
            

            {/* <p className="text-primary font-bold text-center mt-3 mb-5 px-14 text-md">Account successfully created. Redirecting you to the login page in 3</p> */}

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="larger:flex items-center gap-4">
                <InputField
                  type='text'
                  label='First Name'
                  labelFor='firstName'
                  placeholder='Enter your first name'
                  customClass='formField'
                  registerInput={register('firstName')}
                  errMsg={errors.firstName?.message}
                  hasError={!!errors.firstName}
                  fieldErrorStyle='border-softRed'
                  errorTextStyle='text-softRed text-xs text-right mr-1'
                />

                <InputField
                  type='text'
                  label='Last Name'
                  labelFor='lastName'
                  placeholder='Enter your last name'
                  customClass='formField'
                  registerInput={register('lastName')}
                  errMsg={errors.lastName?.message}
                  hasError={!!errors.lastName}
                  fieldErrorStyle='border-softRed'
                  errorTextStyle='text-softRed text-xs text-right mr-1'
                />
              </div>
              
              <InputField
                type='email'
                label='Email'
                labelFor='email'
                placeholder='example@email.com'
                customClass='formField'
                ref={emailRef}
                registerInput={register('email')}
                errMsg={errors.email?.message}
                hasError={!!errors.email}
                fieldErrorStyle='border-softRed'
                errorTextStyle='text-softRed text-xs text-right mr-2'
              />

              <div className="relative">
                <InputField
                  type={suPwVisible ? 'text' : 'password'}
                  label='Password'
                  labelFor='password'
                  placeholder='Enter your password...'
                  customClass='formField'
                  ref={passwordRef}
                  registerInput={register('password')}
                  errMsg={errors.password?.message}
                  hasError={!!errors.password}
                  fieldErrorStyle='border-softRed'
                  errorTextStyle='text-softRed text-xs text-right mr-2'
                />
                <div className="absolute right-5 top-[45px] cursor-pointer bg-bgSecondary" onClick={changeSuPwVisibility}>
                  {
                    suPwVisible ? (
                      <Eye size='17' color='#767676'/>
                    ) : (
                      <EyeOff size='17' color='#767676'/>
                    )
                  }
                </div>
              </div>

              <InputField
                type={suPwVisible ? 'text' : 'password'}
                label='Confirm Password'
                labelFor='confirm-password'
                placeholder='Confirm your password...'
                customClass='formField'
                ref={confirmPwRef}
                errMsg="Passwords don't match"
                hasError={!passwordsMatch}
                fieldErrorStyle='border-softRed'
                errorTextStyle='text-softRed text-xs text-right mr-2'
              />

              <div className="flex justify-between gap-4">
                <InputField
                  type='text'
                  labelFor='otp'
                  placeholder='# Enter OTP...'
                  maxLength={6}
                  customClass='formField'
                  registerInput={register('otp')}
                  errMsg={errors.otp?.message}
                  hasError={!!errors.otp}
                  fieldErrorStyle='border-softRed'
                  errorTextStyle='text-softRed text-xs text-right mr-1'
                />

                <Button variant='secondary' size='lg' type='button' className="mt-[6px]" onClick={sendOTP}>
                  <span>Send OTP</span>
                </Button>
              </div>

              <div className="mt-5 flex gap-6 justify-between items-center">
                <Link to='/login' className="text-linkSecondary text-sm min-w-max linkHoverSecondary">
                  <span className="block larger:inline">Already have an account? </span>
                  <span className="font-bold">Log in</span>
                </Link>
                
                <Button size='half' disabled={isSubmitting} type='submit' className={`text-md text-white ${isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'}`}>{ isSubmitting ? <Loader type="btn" /> : 'Sign up' }</Button>
              </div>
            </form>
            <div className='flex items-center justify-center my-5 gap-5'>
              <hr className="w-2/5"/>
              <p className='text-faintText'>or</p>
              <hr className="w-2/5"/>
            </div>
            
            <div className="w-full flex justify-center items-center">
              <Button variant='google' size='lg' className=""> <img src="/images/google.png" alt="Google logo" /> Sign up with Google</Button>
            </div>

           
            <p className="text-center mt-7 px-8 larger:px-28 text-faintText">By creating an account, you agree to our <Link to='/terms' className='hover:border-b-2 text-linkSecondary border-linkSecondary font-bold'>terms</Link> and <Link to='/privacy-policy' className='hover:border-b-2  border-linkSecondary text-linkSecondary font-bold'>privacy policy</Link></p>
          </div>
        </div>
    </>
  )
}

export default Signup