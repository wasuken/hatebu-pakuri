import { useState } from "react";
import styled from "styled-components";
import { ButtonInfo } from "../../const";
import { media } from "../../const";

export interface SidebarProps {
  items: ButtonInfo[];
}

const LeftMenuList = styled.ul`
  list-style: none;
  line-style-posiution: inside;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #66666633;
  width: 40px;
  height: 100vh;
  font-size: 1.7em;
  @media (max-width: ${media.phone.width}) {
    padding-left: 10px;
    padding-right: 20px;
  	flex-direction: row;
  	border-right: 0;
  	border-bottom: 1px solid #66666633;
  	width: 95vw;
  	height: 5vh;
  	margin-top: 5px;
  	padding-bottom: 10px;
  	margin-bottom: 10px;
  }
`;

const LeftMenuListItem = styled.li`
  list-style-type: none;
  width: 210px;
  float: left;
  margin: 0px;
  padding: 0px;
  @media (max-width: ${media.phone.width}) {
    margin: 0 1px 0 1px;
  }
`;

const LeftMenuListItemHr = styled.div`
  width: 30px;
  height: 5px;
  border-bottom: 3px solid #66666644;
  margin: 0 0 5px 0;
  @media (max-width: ${media.phone.width}) {
  	border-bottom: 0px solid #66666644;
  	border-left: 3px solid #66666644;
  	margin: 0 25px 0 0;
    height: 30px;
    width: 1px;
  }
`;

export default function Sidebar(props: SidebarProps) {
  return (
    <LeftMenuList>
      {props.items.map((item, i) =>
        item.href !== null ? (
          <LeftMenuListItem key={i}>
            <a href={item.href}>{item.child}</a>
          </LeftMenuListItem>
        ) : (
          <li key={i}>
            <LeftMenuListItemHr />
          </li>
        )
      )}
    </LeftMenuList>
  );
}
