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
  }
`;

const LeftMenuListItem = styled.li`
  list-style-type: none;
  width: 210px;
  float: left;
  margin: 0px;
  padding: 0px;
`;

const LeftMenuListItemHr = styled.hr`
  width: 30px;
  position: relative;
  left: -5px;
`;

export default function Sidebar(props: SidebarProps) {
  return (
    <div className="leftmenu">
      <LeftMenuList>
        {props.items.map((item, i) =>
          item.href !== null ? (
            <LeftMenuListItem key={i}>
              <a href={item.href}>{item.child}</a>
            </LeftMenuListItem>
          ) : (
            <li>
              <LeftMenuListItemHr />
            </li>
          )
        )}
      </LeftMenuList>
    </div>
  );
}
