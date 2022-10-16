import * as React from "react";
import styled from "styled-components";
import { media, ButtonInfo } from '../../const';

export interface ButtonGroupProps {
  buttons: ButtonInfo[];
}

const MainIcon = styled.h1`
  background: url(/assets/img/icon.pnpg);
  padding: 0px;
  margin-top: -5px;
  margin-bottom: 10px;
  height: 32px;
`;

const BtnGroup = styled.div`
  width: 30vw;
  display: flex;
  justify-content: flex-end;
  @media (max-width: ${media.phone.width}) {
    order: -1;
    justify-content: space-between;
    width: 100%;
  }
`;

export default function ButtonGroup(props: ButtonGroupProps) {
    return (
    <BtnGroup>
      {props.buttons.map((n: ButtonInfo, i: number) => (
        <MainIcon key={i}>
          <a href={n.href}>{n.child}</a>
        </MainIcon>
      ))}
    </BtnGroup>
  );
}
