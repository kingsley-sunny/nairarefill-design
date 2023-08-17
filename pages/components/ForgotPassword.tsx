export const ForgotPassword = () => {
  return (
    <div>
      <div className='mt-32 px-4 max-w-sm mx-auto '>
        <div className=''>
          <h1 className='font-semibold text-2xl'>Forgot Password</h1>
        </div>

        <div className='mt-8 grid gap-8'>
          <div className=''>
            <p className=''>Email:</p>
            <input type='email' className='py-2 px-4 border border-black w-full' />
          </div>

          <button className='border rounded-lg py-2 font-semibold px-3 text-white bg-orange-500 w-full'>
            Send Reset link
          </button>
        </div>
      </div>
    </div>
  );
};
