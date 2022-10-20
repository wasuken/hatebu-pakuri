import styled from "styled-components";

import NewsItem from "../organisms/NewsItem";
import { NewsItemProps } from "../organisms/NewsItem";
import { media } from "../../const";

export interface NewsListProps {
  news_list: NewsItemProps[];
}

const NewsListArea = styled.ul`
  width: 80%;
  @media (max-width: ${media.phone.width}) {
    padding-left: 0px;
    width: 95%;
  }
`;

export default function NewsList(props: NewsListProps) {
  return (
    <NewsListArea>
      {props.news_list.map((n: NewsItemProps, i: number) => (
        <NewsItem
          icon={n.icon}
          title={n.title}
          image_path={n.image_path}
          user_id={n.user_id}
          key={i}
        />
      ))}
    </NewsListArea>
  );
}
