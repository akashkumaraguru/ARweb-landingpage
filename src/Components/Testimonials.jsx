import user1 from "../assets/Testimonials/user1.jpg";
import user2 from "../assets/Testimonials/user2.png"
import user3 from "../assets/Testimonials/user3.jpg";
import user4 from "../assets/Testimonials/user4.jpg";
import user5 from "../assets/Testimonials/user5.jpg";
import user6 from "../assets/Testimonials/user6.jpg";

const Testimonials = () => {

  const feeBacks = [
    {
      user: "Akash kumaraguru",
      company: "Leo_designs & Desdev'ers & Keplerly",
      image: user1,
      text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
    },
    {
      user: "Naveen",
      company: "Zween & Desdev'ers & Keplerly",
      image: user2,
      text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
    },
    {
      user: "Kamal",
      company: "Keplerly",
      image: user3,
      text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
    },
    {
      user: "Steve Jobs",
      company: "Apple",
      image: user4,
      text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
    },
    {
      user: "BilGates",
      company: "MicroSoft",
      image: user5,
      text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
    },
    {
      user: "Sridhar-vembu",
      company: "zoho",
      image: user6,
      text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
    },
  ];

  return (
    <div className='mt-20 tracking-wide '>
    <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20'>What people <span className='bg-gradient-to-r from-blue-600 to-blue-300 text-transparent bg-clip-text'>are</span> saying</h2>
    <div className='flex flex-wrap justify-center'>
        {feeBacks.map((e,i)=>(
           <div key={i} className='w-full hover:scale-105 duration-300  sm:w-1/2 lg:w-1/3 px-4 py-2'>
            <div className='bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin '>
               <p>{e.text}</p>
               <div className='flex mt-8 items-center'>
                    <img className='w-20 h-20 mr-6 rounded-full border border-neutral-300' src={e.image} alt={e.user} />
                    <div><h6>{e.user}</h6>
                    <span className='text-sm font-normal italic text-neutral-600'> {e.company}</span></div>
                   
               </div>
            </div>
           </div> 
        ))}
    </div>
    </div>
  );
};
export default Testimonials;
