import { FC } from "react";
import NextImage from "next/image";
import CheckMark from "@/components/common/CheckMark";

interface Props {
  src: string;
  selected?: boolean;
  onClick?(): void;
}

const Image: FC<Props> = ({ src, selected, onClick }): JSX.Element => {
  return (
    <div
      onClick={onClick}
      className="relative rounded overflow-hidden cursor-pointer"
    >
      <NextImage
        src={src}
        width={132}
        height={132}
        alt="gallery"
        className="h-[132px] bg-secondary-light hover:scale-110
          transition object-cover"
      />
      <div className="absolute top-2 left-2">
        <CheckMark visible={selected || false} />
      </div>
    </div>
  );
};

export default Image;
