
const HomePage = () => {
  return (
    <div className="relative">
      <div className="px-4 sm:px-10">
        <div className="mt-16 max-w-4xl mx-auto text-center relative z-10">
          <h1 className="md:text-6xl text-4xl font-extrabold mb-6 md:!leading-[75px]">Build Landing Pages with Typeform
            Integration</h1>
          <p className="text-base">I'm creating a table to display user details and their associated posts. The table will include essential user information such as name, email, etc. This structured layout will make it easy to view and manage user-generated content efficiently.</p>
          <div className="mt-10">
            <button className='px-6 py-3 rounded-xl text-white bg-cyan-900 transition-all hover:bg-cyan-800'>Get started
              today</button>
          </div>
        </div>
      </div>
      <img src="https://readymadeui.com/bg-effect.svg" className="absolute inset-0 w-full h-full" />
    </div>
  )
}

export default HomePage