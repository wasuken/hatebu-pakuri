import styled from "styled-components";
import { media } from "../../const";

export interface NewsItemContentsImageProps{
  image_path: string;
}

const ImageContent = styled.img`
  width: 100px;
  height: 100px;
  @media (max-width: ${media.phone.width}) {
    width: 50px;
    height: 50px;
  }
`;

export default function NewsItemContentsImage(props: NewsItemContentsImageProps){
  return (
	<ImageContent src={props.image_path} />
  )
}
