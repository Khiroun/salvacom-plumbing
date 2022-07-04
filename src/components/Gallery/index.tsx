import { FC, useState } from "react";
import styled from "@emotion/styled";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
type Props = {
  images: string[];
};
const Gallery: FC<Props> = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const leftClick = () => {
    const newIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1;
    setImageIndex(newIndex);
  };
  const rightClick = () => {
    setImageIndex((imageIndex + 1) % images.length);
  };
  return (
    <Wrapper>
      <LeftArrow size={25} onClick={leftClick} />
      <RightArrow size={25} onClick={rightClick} />
      <Image src={images[imageIndex]} />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
`;
const LeftArrow = styled(BsArrowLeftCircleFill)`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;
const RightArrow = styled(BsArrowRightCircleFill)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;
const Image = styled.img`
  max-width: 100%;
`;
export default Gallery;
