import styled from "styled-components";
import Header from "./components/templates/header";
import Sidebar from "./components/organisms/sidebar";
import NewsList from "./components/templates/NewsList";
import { sidebar_items, news_items } from "./testdata";
import { media } from "./const";

const Area = styled.div`
  display: flex;
  @media (max-width: ${media.phone.width}) {
    flex-direction: column;
  }
`;

function App() {
  return (
		<div>
			<Header />
			<Area>
				<Sidebar items={sidebar_items} />
				<NewsList news_list={news_items} />
			</Area>

		</div>
	);
}

export default App;
