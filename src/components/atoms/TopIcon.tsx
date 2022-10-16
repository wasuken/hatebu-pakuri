import styled from "styled-components";
import { ButtonInfo } from "../../props";

const TopIconH1 = styled.h1`
  background: url(/assets/img/icon.png);
  padding: 0px;
  margin-top: -5px;
  margin-bottom: 10px;
  height: 32px;
`;

export default function TopIcon(props: ButtonInfo) {
  return (
    <TopIconH1>
      <a href={props.href}>{props.child}</a>
    </TopIconH1>
  );
}
