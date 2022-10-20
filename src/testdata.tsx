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
import { NewsItemProps } from "./components/organisms/NewsItems";

export const sidebar_items: ButtonInfo[] = [
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

export const news_items: NewsItemProps[] = [
  {
	icon: <BsBell />,
	title: "世界のニュース",
	image_path: "/img/0.jpg",
	user_id: "dsafkdsjflkdsak",
	key: 0,
  },
  {
	icon: <BsBell />,
	title: "なぜ生きる？",
	image_path: "/img/1.jpg",
	user_id: "lkdasfjkalds",
	key: 0,
  },
  {
	icon: <BsBell />,
	title: "つらい",
	image_path: "/img/2.jpg",
	user_id: "lkdsafjkldafklja",
	key: 0,
  },
  {
	icon: <BsBell />,
	title: "これが若さか",
	image_path: "/img/3.jpg",
	user_id: "afjlkdafkdjas",
	key: 0,
  },
];
