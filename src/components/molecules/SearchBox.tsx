import styled from "styled-components";
import { media } from "../../const";

const SearchBoxForm = styled.form`
  height: 100%;
  width: 40vw;
  margin-bottom: 5px;
  @media (max-width: ${media.phone.width}) {
    width: 90vw;
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

export interface SearchBoxProps {
  query: string;
  setQuery: (s: string) => void;
}

export default function SearchBox(props: SearchBoxProps) {
  const { query, setQuery } = props;
  return (
    <SearchBoxForm>
      <SearchInput
        type="text"
        placeholder="エントリーを検索する"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </SearchBoxForm>
  );
}
