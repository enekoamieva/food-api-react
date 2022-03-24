import { BrowserRouter, Link } from 'react-router-dom';

import Category from './components/Category';
import Search from './components/Search';
import Pages from './pages/Pages';

import { GiKnifeFork } from 'react-icons/gi';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <Logo to={'/'}>
            <GiKnifeFork />
            Food Api React
          </Logo>
        </Nav>

        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Nav = styled.div`
  padding: 4rem 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 2rem;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`;

export default App;
