import Image from "next/image";

const Images = ({ imagesrc, imagealt }: any) => {
  return (
    <>
      {/* ${
        imagealt === "Logo" ? "top-0 my-[10px] h-[40px] w-[70px] delay-40" : ""
      } */}
      <Image src={imagesrc} alt={imagealt} className={` `} />
    </>
  );
};

export default Images;
