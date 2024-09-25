import React from 'react';

const Courses = () => {
  return (
    <div className='flex'>
      <div className="left grid grid-cols-2 w-[60%] gap-4 ml-8 pl-4">
        {/* Card 1 */}
        <div className="card1 border-solid border-[#3fcaca] border-2 p-4 bg-black transition-transform transform hover:scale-105 hover:bg-[#1a1a1a] hover:border-[#3fcaca] hover:shadow-[0_0_15px_#3fcaca]">
          <div className="image">
            <img src="/course1.jpg" alt="Course 1" className="w-full h-auto" />
          </div>
          <div className="content flex flex-col justify-center items-center mt-5">
            <h2 className="text-2xl">Course 1</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, adipisci.</p>
            <button className="mt-4 bg-[#3fcaca] p-3 w-32 text-black text-xl rounded-3xl">Join</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card1 border-solid border-[#3fcaca] border-2 p-4 bg-black transition-transform transform hover:scale-105 hover:bg-[#1a1a1a] hover:border-[#3fcaca] hover:shadow-[0_0_15px_#3fcaca]">
          <div className="image">
            <img src="/course2.jpg" alt="Course 2" className="w-full h-auto" />
          </div>
          <div className="content flex flex-col justify-center items-center mt-5">
            <h2 className="text-2xl">Course 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, adipisci.</p>
            <button className="mt-4 bg-[#3fcaca] p-3 w-32 text-black text-xl rounded-3xl">Join</button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card1 border-solid border-[#3fcaca] border-2 p-4 bg-black transition-transform transform hover:scale-105 hover:bg-[#1a1a1a] hover:border-[#3fcaca] hover:shadow-[0_0_15px_#3fcaca]">
          <div className="image">
            <img src="/course3.jpg" alt="Course 3" className="w-full h-auto" />
          </div>
          <div className="content flex flex-col justify-center items-center mt-5">
            <h2 className="text-2xl">Course 3</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, adipisci.</p>
            <button className="mt-4 bg-[#3fcaca] p-3 w-32 text-black text-xl rounded-3xl">Join</button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card1 border-solid border-[#3fcaca] border-2 p-4 bg-black transition-transform transform hover:scale-105 hover:bg-[#1a1a1a] hover:border-[#3fcaca] hover:shadow-[0_0_15px_#3fcaca]">
          <div className="image">
            <img src="/course3.jpg" alt="Course 4" className="w-full h-auto" />
          </div>
          <div className="content flex flex-col justify-center items-center mt-5">
            <h2 className="text-2xl">Course 4</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, adipisci.</p>
            <button className="mt-4 bg-[#3fcaca] p-3 w-32 text-black text-xl rounded-3xl">Join</button>
          </div>
        </div>
      </div>
      <div className="right flex justify-center items-center">
        {/* You can add additional content or leave this section empty */}
      </div>
    </div>
  );
}

export default Courses;
