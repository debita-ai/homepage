import Image from "next/image";
import { motion } from "framer-motion";

interface LaptopFrameProps {
  imageSrc: any;
  alt: string;
  className?: string;
}

export function LaptopFrame({ imageSrc, alt, className = "" }: LaptopFrameProps) {
  return (
    <div className={`relative w-full max-w-[400px] mx-auto ${className}`}>
      {/* Background Dashboard Image with Mask */}
      <div className="absolute w-full h-full">
        <div className="absolute top-[5.5%] left-[7%] w-[86%] h-[60%] overflow-hidden rounded-[2px]">
          <Image
            src={imageSrc}
            alt={alt}
            className="object-cover w-full h-full object-top"
            priority
          />
        </div>
      </div>

      {/* MacBook Frame */}
      <div className="relative z-10">
        <Image
          src="https://png.pngtree.com/png-clipart/20230330/original/pngtree-macbook-pro-16-png-image_9011850.png"
          alt="MacBook Pro"
          width={400}
          height={300}
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
  );
} 