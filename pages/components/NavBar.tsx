export const NavBar = () => {
  return (
    <div className='w-full border-b-4 px-4'>
      <nav className='w-full max-w-[90rem] mx-auto py-4 justify-between items-center  flex '>
        <div className='flex space-x-2 items-center'>
          <div className='lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-6 h-6'
            >
              <path
                fillRule='evenodd'
                d='M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z'
                clipRule='evenodd'
              />
            </svg>
          </div>

          <h1 className='font-semibold text-3xl'>
            naira<span className='text-orange-500'>refill</span>
          </h1>
        </div>

        <div className='space-x-4 flex items-center space-x-2'>
          <button className='border flex items-center space-x-2 rounded-lg py-1 px-3 text-white bg-orange-500'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z'
              />
            </svg>

            <span className=''>Register</span>
          </button>
          <button className='border rounded-lg py-1 px-3 border-orange-500 text-orange-500'>
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};
