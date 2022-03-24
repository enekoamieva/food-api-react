import { NavLink } from 'react-router-dom';

import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';

import styled from 'styled-components';


function Category() {
    return (
        <List>

            <SLink to={'/cuisine/Italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </SLink  >

            <SLink to={'/cuisine/American'}>
                <FaHamburger />
                <h4>American</h4>
            </SLink  >

            <SLink to={'/cuisine/Thai'}>
                <GiNoodles />
                <h4>Thai</h4>
            </SLink  >

            <SLink to={'/cuisine/Japanese'}>
                <GiChopsticks />
                <h4>Japanese</h4>
            </SLink  >

        </List>
    )
}

const List = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 2rem 0;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #333);
    color: #fff;
    width: 6rem;
    height: 6rem;
    transform: scale(0.8);
    cursor: pointer;

    &.active {
        background: linear-gradient(35deg, #f27171, #e94057);
    }

    h4 {
        color: #fff;
        font-size: 0.8rem;
    }

    svg {
        font-size: 1.5rem;
    }
`;

export default Category;