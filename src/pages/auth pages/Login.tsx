import InputField from "@/components/ui/input-fields";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useRef, useEffect } from "react";
import Loader from "@/components/ui/loader";
import { Link } from "react-router-dom";
// import { Eye, EyeOff } from "lucide-react"
import axiosInstance from "@/lib/axios";
import { useToast } from "@/hooks/use-toast"
import { useAuthenticationStore } from "../../stores";
import { useNavigate } from "react-router-dom";



const formSchema = z.object({
  email: z.string().trim().email('Please enter a valid email address'),
  // password: z.string().trim().min(1, 'Please enter your password'),
  otp: z.string().trim().length(6, "6 digits required").regex(/^\d+$/, "Only numbers allowed"),
})

function Login() {
  // const [lgPwVisible, setLgPwVisible] = useState(false);
  // const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const otpFieldRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const [isSendingOtp, setIsSendingOtp] = useState<boolean>(false);
  const [otpValidity, setOtpValidity] = useState<string>('');
  const [disableOtpBtn, setDisableOtpBtn] = useState<boolean>(false);
  const { toast } = useToast();
  const { isAuthenticated, setUserAuthentication } = useAuthenticationStore();
  const navigate = useNavigate();  
  


  // RHF control
  const { register, handleSubmit, formState, trigger } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });
  const { isSubmitting, errors } = formState;

  // Submits the form data to the server
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const response = await axiosInstance.post("/auth/login", {...data, otp: Number(data.otp)});
      console.log(response);
      setUserAuthentication(true);
      // setIsSubmitted(true);
    }
    catch (error: any) {
      console.log(error);
      toast({
        variant: "destructive",
        description: error.response?.data?.message,
      })
    }
  }

  // password visibility for login page
  // const changeLgPwVisibility = (): void => {
  //   setLgPwVisible(!lgPwVisible);
  // }

    useEffect(() => {
      if (isAuthenticated) {
        navigate("/");
      }
    }, [isAuthenticated]);

    useEffect(() => {
      const otpInput = otpFieldRef.current;
      // disables the send OTP button when the OTP input field has a value
      const handleOtpBtnDisable = () => {
        if (!otpInput) return;
        
        if (!disableOtpBtn && otpInput?.value.length > 0) {
          setDisableOtpBtn(true);
        }
        else {
          setDisableOtpBtn(false);
        }
      };
  
      otpInput?.addEventListener("input", handleOtpBtnDisable);
      return () => {
        otpInput?.removeEventListener("input", handleOtpBtnDisable);
      };
    }, []);

  // sends an OTP to the user's provided email.
  const sendOTP = async () => {
    setOtpValidity('');
    const emailField = emailRef.current;
    // Trigger email field validation if it's empty or has an error
    if (!emailField || !!errors.email || !emailField.value) {
      trigger("email");
      return;
    }
    // Send OTP to the user's email
    else {
      setIsSendingOtp(true);
      console.log({ email: emailField.value });
      try {
        const response = await axiosInstance.post("/auth/generate-otp", {email: emailField.value});
        setIsSendingOtp(false);
        toast({
          variant: "success",
          description: response.data.message,
        })
      }
      catch (error: any) {
        console.error("Error sending OTP:", error.response?.data?.message);
        toast({
          variant: "destructive",
          description: error.response?.data?.message,
        })
        setIsSendingOtp(false);
      }
    }
  };


  return (
    <>
        <div className="authBox">
          <div className="ml-3">
            <h1 className="font-bold text-2xl md:text-4xl mb-2">Welcome Back</h1>
            <p className="text-textSecondary ml-2">Log in to access your account</p>
          </div>

          <div className="bg-bgSecondary px-8 md:px-16 py-8 rounded-2xl mt-7">
          
            <p className=" font-bold text-center mt-3 text-lg mb-3 text-textPrimary">Login with your email</p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <InputField
                type='email'
                // label='Email'
                labelFor='email'
                placeholder='e.g. example@email.com'
                customClass='formField h-16'
                ref={emailRef}
                registerInput={register('email')}
                errMsg={errors.email?.message}
                hasError={!!errors.email}
                fieldErrorStyle='border-softRed'
                errorTextStyle='text-softRed text-xs text-right mr-2'
              />

              {/* <div className="relative">
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
              </div> */}

              <div className="flex justify-between gap-4">
                <InputField
                  type="text"
                  labelFor="otp"
                  placeholder="# Enter OTP..."
                  maxLength={6}
                  customClass="formField"
                  ref={otpFieldRef}
                  registerInput={register("otp")}
                  errMsg={errors.otp?.message || otpValidity}
                  hasError={!!errors.otp || !!otpValidity}
                  fieldErrorStyle="border-softRed"
                  errorTextStyle="text-softRed text-xs text-right mr-1"
                />

                <Button
                  variant="secondary"
                  disabled={isSendingOtp || disableOtpBtn}
                  size="lgw"
                  type="button"
                  className='mt-[6px]'
                  onClick={sendOTP}
                >
                  <span>{isSendingOtp ? <Loader type="btn" /> : "Send OTP"}</span>
                </Button>
            </div>

              {/* <div className="mt-5 flex gap-6 justify-between items-center">
                <div className="text-linkSecondary text-sm min-w-max linkHoverSecondary">
                  <Link to='/forgot-password'>
                    <span>Forgot password?</span>
                  </Link>
                </div>
              </div> */}

              <div className="mt-5 flex gap-6 justify-between items-center">
                <Link to='/signup' className="text-linkSecondary text-sm min-w-max linkHoverSecondary">
                  <span className="block larger:inline">New user? </span>
                  <span className="font-bold">Create an account</span>
                </Link>
                
                <Button size='lgw' disabled={isSubmitting} type='submit' className={`text-md text-white ${isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'}`}>{ isSubmitting ? <Loader type="btn" /> : 'Login' }</Button>
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