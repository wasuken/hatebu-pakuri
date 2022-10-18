import Header from "./components/templates/header";
import Sidebar from "./components/organisms/sidebar";
import {
  BiBorderNone,
  BiPencil,
  BiBorderAll,
  BiInfoCircle,
} from "react-icons/bi";
import {
  BsFillExclamationSquareFill,
  BsFillQuestionSquareFill,
  BsBell,
} from "react-icons/bs";

import { ButtonInfo } from "./const";

import styled from "styled-components";

const Area = styled.div`
  display: flex;
`;

function App() {
  const items: ButtonInfo[] = [
    {
      href: "#",
      child: <BiBorderNone />,
    },
    {
      href: "#",
      child: <BsFillExclamationSquareFill />,
    },
    {
      href: "#",
      child: <BiPencil />,
    },
    {
      href: "#",
      child: <BsFillQuestionSquareFill />,
    },
    {
      href: "#",
      child: <BiBorderAll />,
    },
    {
      href: null,
      child: null,
    },
    {
      href: "#",
      child: <BiInfoCircle />,
    },
    {
      href: "#",
      child: <BsBell />,
    },
  ];
  return (
    <div>
      <Header />
      <Area>
        <Sidebar items={items} />
      </Area>
    </div>
  );
}

export default App;
