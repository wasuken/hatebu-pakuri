import { useState } from "react";
import styled from "styled-components";
import { BsFillQuestionCircleFill, BsGearFill } from "react-icons/bs";
import { HiUser } from "react-icons/hi";

const media = {
  phone: {
    width: "600px",
  },
};

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

const MainIcon = styled.h1`
  background: url(/assets/img/icon.png);
  padding: 0px;
  margin-top: -5px;
  margin-bottom: 10px;
  height: 32px;
`;

const TopIcon = styled.h1`
  background: url(/assets/img/icon.png);
  padding: 0px;
  margin-top: -5px;
  margin-bottom: 10px;
  height: 32px;
`;

const SearchBox = styled.form`
  height: 100%;
  width: 40vw;
  margin-bottom: 5px;
  @media (max-width: ${media.phone.width}) {
    width: 95vw;
  }
`;

const SearchInput = styled.input`
  border-radius: 16px;
  box-sizing: border-box;
  border: none;
  outline: none;
  background: #55555533 url(/search.svg) no-repeat 12px center/16px;
  transition: background-color 0.16s linear;
  padding: 0 32px 0 40px;
  height: 32px;
  width: 100%;
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

const TopIconArea = styled.div`
  display: inline-block;

  @media (max-width: ${media.phone.width}) {
  position: absolute;
  width: 100%;
    top: 13px;
    left: 0px;
  }
`;

export default function Header() {
  const [query, setQuery] = useState<string>("");
  return (
    <NavHeader>
      <TopIconArea>
		<TopIcon>
          <a href="/">
			<BsFillQuestionCircleFill />
          </a>
		</TopIcon>
	  </TopIconArea>
      <SearchBox>
        <SearchInput
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </SearchBox>
      <BtnGroup>
        <MainIcon>
          <a href="/">
            <BsGearFill />
          </a>
        </MainIcon>
        <MainIcon>
          <a href="/">
            <HiUser />
          </a>
        </MainIcon>
      </BtnGroup>
    </NavHeader>
  );
}
