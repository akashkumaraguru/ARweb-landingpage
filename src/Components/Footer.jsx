const Footer = () => {
  const resourcesLinks = [
    { href: "#", text: "Getting Started" },
    { href: "#", text: "Documentation" },
    { href: "#", text: "Tutorials" },
    { href: "#", text: "API Reference" },
    { href: "#", text: "Community Forums" },
  ];

  const platformLinks = [
    { href: "#", text: "Features" },
    { href: "#", text: "Supported Devices" },
    { href: "#", text: "System Requirements" },
    { href: "#", text: "Downloads" },
    { href: "#", text: "Release Notes" },
  ];

  const communityLinks = [
    { href: "#", text: "Events" },
    { href: "#", text: "Meetups" },
    { href: "#", text: "Conferences" },
    { href: "#", text: "Hackathons" },
    { href: "#", text: "Jobs" },
  ];

  return (
   <footer className='   mt-20 border-t  py-10 border-neutral-700'>
    <div className='flex justify-evenly  lg:grid-cols-3  gap-4'>
        <div>
            <h3 className='text-md font-semibold mb-4'>Resources</h3>
            <ul className='space-y-2'>
                {resourcesLinks.map((e,i) =>(
                    <li key={i}>
                        <a className='text-neutral-300 hover:text-white' href={e.href}>{e.text}</a>
                    </li>
                ))}
            </ul>
        </div>

        <div>
            <h3 className='text-md font-semibold mb-4'>Platform</h3>
            <ul className='space-y-2'>
                {platformLinks.map((e,i) =>(
                    <li key={i}>
                        <a className='text-neutral-300 hover:text-white' href={e.href}>{e.text}</a>
                    </li>
                ))}
            </ul>
        </div>

        <div>
            <h3 className='text-md font-semibold mb-4'>Community Link</h3>
            <ul className='space-y-2'>
                {communityLinks.map((e,i) =>(
                    <li key={i}>
                        <a className='text-neutral-300 hover:text-white' href={e.href}>{e.text}</a>
                    </li>
                ))}
            </ul>
        </div>
    </div>

   </footer>
)
};

export default Footer;
