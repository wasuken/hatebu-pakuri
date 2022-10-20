import styled from "styled-components";

const IconArea = styled.div`
  width: 5%;
`;

export interface IconProps{
  icon: React.ReactNode;
}

export default function NewsIcon(props: IconProps) {
  return <IconArea>{props.icon}</IconArea>;
}
