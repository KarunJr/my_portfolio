"use client";
import Button from "@/components/Button";
import Image from "next/image";
import { useState } from "react";
import dynamic from "next/dynamic";

const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false,
});

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("ghimirekarun406@gmail.com");

    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="my-20 sm:px-10 px-5" id="about">
      <p className="sm:text-4xl text-3xl font-semibold text-gray_gradient mb-6">
        About
      </p>
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Grid 1 */}
        <div className="col-span-1 xl:row-span-3">
          <div className="w-full h-full border border-neutral-600 bg-neutral-800 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <Image
              src={"/assets/grid1.png"}
              alt="grid-1"
              height={100}
              width={100}
              className="w-full sm:h-69 h-fit object-contain"
            />
            <div>
              <p className="text-xl font-semibold mb-2 text-white">
                Hi, I&#39;m Karun
              </p>
              <p className="text-[#afb0b6] text-base font-generalsans">
                Self-motivated full-stack developer focused on crafting
                innovative, scalable, and user-centric web solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Grid 2 */}
        <div className="col-span-1 xl:row-span-3">
          <div className="w-full h-full border border-neutral-600 bg-neutral-800 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <Image
              src={"/assets/grid2-removebg-preview.png"}
              alt="grid-2"
              height={100}
              width={100}
              className="w-full sm:h-69 h-fit object-contain bg-neutral-800 rounded-md"
            />
            <div>
              <p className="text-xl font-semibold mb-2 text-white">
                Tech Stack
              </p>
              <p className="text-[#afb0b6] text-base">
                I specialize in the TypeScript ecosystem, building scalable
                applications with React/Next.js frontends, Node.js backends, and
                optimized database architectures.
              </p>
            </div>
          </div>
        </div>

        {/* Grid 3 */}
        <div className="col-span-1 xl:row-span-4">
          <div className="w-full h-full border border-neutral-600 bg-neutral-800 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <div className="rounded-3xl w-full sm:h-81.5 h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className="text-xl font-semibold mb-2 text-white">
                I work remotely across most timezones.
              </p>
              <p className="text-[#afb0b6] text-base">
                I&#39;m based in Nepal, with remote work available.
              </p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        {/* Grid 4 */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="w-full h-full border border-neutral-600 bg-neutral-800 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <Image
              src={"/assets/grid3.png"}
              alt="grid-4"
              height={500}
              width={500}
              className="w-full sm:h-66.5 h-fit object-cover"
            />
            <div>
              <p className="">My Passion for Coding</p>
              <p className="text-[#afb0b6] text-base font-generalsans">
                I love solving problems and building things through code. Coding
                isn&#39;t just my profession - it is my passion.
              </p>
            </div>
          </div>
        </div>

        {/* Grid 5 */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="w-full h-full border border-neutral-600 bg-neutral-800 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <Image
              src={"/assets/grid4.png"}
              alt="grid-5"
              height={500}
              width={500}
              className="w-full md:h-32.5 sm:h-69 h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="text-xl font-semibold mb-2 text-white text-center">
                Contact me
              </p>
              <div
                className="cursor-pointer flex justify-center items-center gap-2"
                onClick={handleCopy}
              >
                <Image
                  src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                  alt="copy"
                  height={30}
                  width={30}
                  style={{
                    width: "30px",
                    height: "30px",
                  }}
                />
                <p className="md:text-xl font-medium text-white">
                  ghimirekarun406@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
