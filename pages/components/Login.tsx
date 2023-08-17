import Image from "next/image";
import Link from "next/link";
import girlImg from "../../public/girl.webp";

export const Login = () => {
  return (
    <div className='w-full grid lg:grid-cols-2 h-[91vh] '>
      <div className='mt-32 px-4 max-w-sm mx-auto '>
        <div className=''>
          <h1 className='font-semibold text-3xl'>We ve Missed You</h1>

          <p className='mt-4'>
            Kindly signin and get first access to the very best, community and unlock more
            opportunities
          </p>
        </div>

        <div className='mt-8 grid gap-8'>
          <div className=''>
            <p className=''>Email:</p>
            <input type='email' className='py-2 px-4 border border-black w-full' />
          </div>

          <div className=''>
            <p className=''>Password:</p>
            <input type='password' className='py-2 px-4 border border-black w-full' />
          </div>

          <button className='border rounded-lg py-2 font-semibold px-3 text-white bg-orange-500 w-full'>
            Login
          </button>
        </div>

        <div className='mt-10 space-y-4'>
          <Link href={"/forgot-password"} className=''>
            Forgot username or password ?
          </Link>

          <p className=''>
            Dont have an account ? <span className='text-blue-500 font-semibold'>Sign Up</span>
          </p>
        </div>
      </div>

      <div className='hidden lg:block'>
        <div className='w-full h-full relative'>
          <Image src={girlImg} alt='Girl Image' style={{ objectFit: "fill" }} fill />
        </div>
      </div>
    </div>
  );
};
