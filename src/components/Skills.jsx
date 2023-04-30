
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import logoReact from '../assets/logoReact.png'
import node from '../assets/node.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import mongo from '../assets/mongo.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-[#B0E0E6] '>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                <p className='py-4'>Voici les technologies avec lesquelles j'ai travaillé</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
                <div className='shadow-md shadow-[#FFE4E1] hover:scale-110 duration-500 rounded-md '>
                    <img className='w-20 mx-auto' src={html} alt='html icon' />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#FFE4E1] hover:scale-110 duration-500 rounded-md'>
                    <img className='w-20 mx-auto' src={css} alt='html icon' />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#FFE4E1] hover:scale-110 duration-500 rounded-md'>
                    <img className='w-20 mx-auto' src={javascript} alt='html icon' />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#FFE4E1] hover:scale-110 duration-500 rounded-md'>
                    <img className='w-20 mx-auto' src={logoReact} alt='html icon' />
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#FFE4E1] hover:scale-110 duration-500 rounded-md'>
                    <img className='w-20 mx-auto' src={node} alt='html icon' />
                    <p className='my-4'>NODE</p>
                </div>
                <div className='shadow-md shadow-[#FFE4E1] hover:scale-110 duration-500 rounded-md'>
                    <img className='w-20 mx-auto' src={github} alt='html icon' />
                    <p className='my-4'>GITHUB</p>
                </div>
                <div className='shadow-md shadow-[#FFE4E1] hover:scale-110 duration-500 rounded-md'>
                    <img className='w-20 mx-auto' src={tailwind} alt='html icon' />
                    <p className='my-4'>TAILWIND</p>
                </div>
                <div className='shadow-md shadow-[#FFE4E1] hover:scale-110 duration-500 rounded-md'>
                    <img className='w-20 mx-auto' src={mongo} alt='html icon' />
                    <p className='my-4'>MONGO DB</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills