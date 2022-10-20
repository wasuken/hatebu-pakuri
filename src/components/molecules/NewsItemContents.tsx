import styled from "styled-components";
import NewsItemContentsImage from "../atoms/NewsItemContentImage";
import { media } from "../../const";

export interface NewsItemContentsProps {
  title: string;
  user_id: string;
  image_path: string;
}

const Contents = styled.a`
  width: 70%;
  display: flex;
  justify-content: arond-between;
  border-bottom: 1px solid #77777766;
  margin-bottom: 5px;
  @media (max-width: ${media.phone.width}) {
  width: 95%;
  margin-top: 0px;
  }
`;

const ContentsLeft = styled.div`
  width: 90%;
  display: flex;
  justify-content: arond-between;
  flex-direction: column;
`;

const ContentsRight = styled.div`
  width: 15%;
`;

const NewsTitle = styled.h2`
  margin-top: 0px;
  @media (max-width: ${media.phone.width}) {
    font-size: 1.4em;
  }
`;

const NewsUserId = styled.small`
  color: #66666644;
`;

export default function NewsItemContents(props: NewsItemContentsProps) {
  const { title, image_path, user_id } = props;
  return (
    <Contents>
      <ContentsLeft>
        <NewsTitle>{title}</NewsTitle>
        <NewsUserId>userid: {user_id}</NewsUserId>
      </ContentsLeft>
      <ContentsRight>
        <NewsItemContentsImage image_path={image_path} />
      </ContentsRight>
    </Contents>
  );
}
