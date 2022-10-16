import { useState } from "react";
import styled from "styled-components";
import { BsFillQuestionCircleFill, BsGearFill } from "react-icons/bs";
import { HiUser } from "react-icons/hi";
import { media, ButtonInfo } from "../../const";

import TopIconArea from "../molecules/TopIconArea";
import SearchBox from "../molecules/SearchBox";
import BtnGroup from "../molecules/ButtonGroup";

const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border-bottom: 1px solid #66666655;
  @media (max-width: ${media.phone.width}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default function Header() {
  const [query, setQuery] = useState<string>("");
  const topBtns: ButtonInfo[] = [
	{
	  href: "/",
	  child: <BsFillQuestionCircleFill />,
	}
  ];
  const btns: ButtonInfo[] = [
	{
	  href: "#",
	  child: <HiUser />,
	},
	{
	  href: "#",
	  child: <BsGearFill />,
	}
  ]
  return (
    <NavHeader>
      <TopIconArea buttons={topBtns} />
      <SearchBox query={query} setQuery={setQuery} />
      <BtnGroup buttons={btns} />
    </NavHeader>
  );
}
