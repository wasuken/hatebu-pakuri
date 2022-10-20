import styled from "styled-components";
import NewsIcon from "../atoms/NewsIcon";
import NewsItemContents from "../molecules/NewsItemContents";

export interface NewsItemProps {
  icon: React.ReactNode;
  title: string;
  image_path: string;
  user_id: string;
  key: number;
}

const NewsListItem = styled.li`
  display: flex;
`;

export default function NewsItem(props: NewsItemProps) {
  const { icon, title, image_path, user_id, key } = props;
  return (
    <NewsListItem key={key}>
      <NewsIcon icon={icon} />
      <NewsItemContents
        title={title}
        image_path={image_path}
        user_id={user_id}
      />
    </NewsListItem>
  );
}
