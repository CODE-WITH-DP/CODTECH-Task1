import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';

function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(-1);
  const { portfolioData} = useSelector((state) => state.root);
  const {projects} = portfolioData;

  return (
    <div>
      <SectionTitle title="Projects" />

      <div className="flex py-10 gap-20 sm:flex-col">
        <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full'>
          {projects.map((project, index) => (
            <div
              key={project._id}
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className={`cursor-pointer ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3' : 'text-white'}`}>
              <h1 className='text-xl px-3'>
                {project.title}
              </h1>
            </div>
          ))}
        </div>

        {projects.length > 0 && selectedItemIndex !== -1 && <div className='flex items-center justify-center gap-10 sm:flex-col'>
          <img src={projects[selectedItemIndex].image  ? projects[selectedItemIndex].image: "Image"} alt="" className='h-60 w-72' />
          <div className='flex flex-col gap-5'>
            <h1 className='text-secondary text-xl  font-semibold'>{projects[selectedItemIndex].title}</h1>
            <p className="text-white">{projects[selectedItemIndex].description}</p>
            {/* <p className='text-white'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero consectetur ducimus nihil, esse facere illum voluptatem facilis animi rerum ipsam iste, ipsum sapiente aspernatur assumenda corrupti? Illum dolores quisquam atque?
            </p> */}
          </div>
        </div>}

        
      </div>
    </div>
  )
}

export default Projects