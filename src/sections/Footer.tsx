import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="sm:px-10 px-5 pt-7 pb-3 border-t border-neutral-800 flex justify-between items-center flex-wrap gap-5">
      <div className="text-neutral-300 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <Link
          href={"https://github.com/KarunJr"}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full flex justify-center items-center bg-neutral-800 border border-black-200"
        >
          <Image
            src={"/assets/github.svg"}
            alt="github"
            height={10}
            width={10}
            className="w-1/2 h-1/2"
          />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/karun-ghimire/"}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full flex justify-center items-center bg-neutral-800 border border-black-200"
        >
          <Image
            src={"/assets/linkedin.svg"}
            alt="linkedin"
            height={10}
            width={10}
            className="w-7 h-10"
          />
        </Link>
        <Link
          href={"https://www.instagram.com/_karunghimire_/"}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-full flex justify-center items-center bg-neutral-800 border border-black-200"
        >
          <Image
            src={"/assets/instagram.svg"}
            alt="instagram"
            height={10}
            width={10}
            className="w-1/2 h-1/2"
          />
        </Link>
      </div>
      <p>© {new Date().getUTCFullYear()} Karun. All rights reserved</p>
    </section>
  );
};

export default Footer;
