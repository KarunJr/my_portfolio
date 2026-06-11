"use client";

import CanvasLoader from "@/components/CanvasLoader";
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import HackerRoom from "@/components/HackerRoom";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "@/constants";
import Target from "@/components/Target";
import ReactLogo from "@/components/ReactLogo";
import HeroCamera from "@/components/HeroCamera";
import Link from "next/link";
import Button from "@/components/Button";

const Hero = () => {

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1200 });
  const isSmall = useMediaQuery({ maxWidth: 375 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 sm:px-10 px-5 gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center">
          Hi, I am Karun <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Scalable Web Applications
        </p>
      </div>

      <div className="absolute inset-0 h-full w-full">
        <Canvas className="h-full w-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />

            <HeroCamera
              isMobile={isMobile}
            >
              <HackerRoom
                scale={sizes.deskScale}
                rotation={[0, -Math.PI, 0]}
                position={sizes.deskPosition}
              />
            </HeroCamera>

            <group>
              <Target
                scale={sizes.targetScale}
                position={sizes.targetPosition}
              />
              <ReactLogo position={sizes.reactLogoPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[20, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 sm:px-10 px-5">
        <Link
          href={"#about"}
          className="w-fit"
        >
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
