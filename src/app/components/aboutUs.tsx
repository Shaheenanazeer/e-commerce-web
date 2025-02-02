import Image from "next/image";

import about from "../images/about.jpg";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-800 via-teal-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left side content */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-black">
              Welcome to OnlineShopping – Your Ultimate Destination
            </h1>
            <p className="text-lg text-black leading-relaxed">
              At OnlineShopping, we believe in offering more than just products
              – we provide an experience. From the latest trends in fashion and
              technology to everyday essentials, our platform is designed to
              make your shopping effortless and enjoyable. With secure
              transactions, fast shipping, and dedicated customer support, we
              aim to make every purchase a delightful journey.
            </p>
          </div>

          {/* Right side image */}
          <div className="lg:w-1/2">
            <div className="bg-pink-200/90 rounded-3xl p-8">
              <Image
                src={about}
                alt="E-commerce shopping illustration"
                width={700}
                height={400}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
