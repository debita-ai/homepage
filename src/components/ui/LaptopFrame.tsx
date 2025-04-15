import Image from "next/image";
import { motion } from "framer-motion";

interface LaptopFrameProps {
  imageSrc: any;
  alt: string;
  className?: string;
}

export function LaptopFrame({ imageSrc, alt, className = "" }: LaptopFrameProps) {
  return (
    <div className={`relative w-full max-w-[350px] mx-auto -mt-16 flex justify-center items-center ${className}`}>
      {/* Background Dashboard Image with Mask */}
      <div className="absolute w-full h-full">
        <div className="absolute top-[5.5%] left-[7%] w-[86%] h-[60%] overflow-hidden rounded-[2px]">

        </div>
      </div>

      {/* MacBook Frame */}
      <div className="relative z-10">
        <Image
          src="/Frame 1 (2).png"
          alt="MacBook Pro"
          width={350}
          height={262}
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
  );
} 