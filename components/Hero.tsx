import Image from "@/node_modules/next/image";

const Hero = () => {
  return (
    <div className=" flex flex-col justify-center md:items-center px-16 pb-6 rounded-xl text-blue-1500">
        <h1 className="flex md:justify-center items-center text-4xl text-blue-1500">Sorry,</h1>
        <h1 className="flex justify-center items-center text-3xl text-blue md:pb-6 pb-4 text-blue-1500">We are currently having maintenance</h1>
        <Image 
            src="/images/maintenance.svg"
            alt="rrlogo"
            width={300}
            height={300}
        />
        <h1 className="flex justify-center items-center text-2xl text-blue md:pt-6 font-medium pt-4 text-blue-1500">We are partners who understand your Problem</h1>
        <h1 className="flex md:justify-center md:items-center text-2xl text-blue font-extrabold text-blue-1500">Trustworthy, Loyalty & Integrity</h1>

    </div>
  );
};

export default Hero;