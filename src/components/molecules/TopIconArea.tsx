import styled from "styled-components";
import TopIcon from "../atoms/TopIcon";
import { media, ButtonInfo } from "../../const";

export interface TopIconAreaProps {
  buttons: ButtonInfo[];
}

const TopIconAreaDiv = styled.div`
  display: inline-block;

  @media (max-width: ${media.phone.width}) {
    position: absolute;
    width: 100%;
    top: 13px;
    left: 0px;
  }
`;

export default function TopIconArea(props: TopIconAreaProps) {
  return (
    <TopIconAreaDiv>
      {props.buttons.map((n: ButtonInfo, i: number) => (
        <TopIcon key={i} href={n.href} child={n.child} />
      ))}
    </TopIconAreaDiv>
  );
}
