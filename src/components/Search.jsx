import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

function Search() {

    const [inputSearch, setInputSearch] = useState('');
    const navigate = useNavigate();

    const onChangeInput = (event) => {
        const text = event.target.value.toLowerCase();
        setInputSearch(text);
    }

    const onSubmitInput = (event) => {
        event.preventDefault();
        navigate(`/search/${inputSearch}`);
    }

    return (
        <FormStyle onSubmit={onSubmitInput}>
            <div>
                <FaSearch />
                <input
                    type="text"
                    value={inputSearch}
                    onChange={(event) => onChangeInput(event)}
                />
            </div>
        </FormStyle>
    );
}

const FormStyle = styled.form`
    margin: 0 20rem;

    div {
        width: 100%;    
        position: relative;

        input {
            width: 100%;
            border: none;
            background: linear-gradient(35deg, #494949, #333);
            color: #fff;
            font-size: 1.5rem;
            padding: 1rem 3rem;
            border: none;
            border-radius: 1rem;
            outline: none;
        }

        svg {
            position: absolute;
            top: 50%;
            left: 0%;
            transform: translate(100%, -50%);
            color: #fff;
        }
    }
`;

export default Search;
