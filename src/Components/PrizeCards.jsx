import { CheckCircle2 } from "lucide-react";

const PrizeCards = () => {
  const pricingOptions = [
    {
      title: "Free",
      price: "$0",
      features: [
        "Private board sharing",
        "5 Gb Storage",
        "Web Analytics",
        "Private Mode",
      ],
    },
    {
      title: "Pro",
      price: "$10",
      features: [
        "Private board sharing",
        "10 Gb Storage",
        "Web Analytics (Advance)",
        "Private Mode",
      ],
    },
    {
      title: "Enterprise",
      price: "$200",
      features: [
        "Private board sharing",
        "Unlimited Storage",
        "High Performance Network",
        "Private Mode",
      ],
    },
  ];

  return (
    <div className="mt-10">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
        Pri
        <span className="bg-gradient-to-r from-blue-300 to-blue-600 text-transparent bg-clip-text">
          cing
        </span>
      </h2>

      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span className="text-blue-400 text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>

              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-wide">/Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center ">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex border rounded-md border-blue-300 justify-center items-center text-center w-full h-12 p-5 mt-20  text-xl tracking-tight hover:bg-blue-600 hover:border-none"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrizeCards;
