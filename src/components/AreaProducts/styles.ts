import styled from 'styled-components';

export const Container = styled.div`

    .area {
        height: 100vh;
        overflow-x: hidden; /* Hide horizontal scrollbar */
        overflow-y: scroll; /* Add vertical scrollbar */
    }

    .area--container {
        padding: 20px;
    }

    h1 {
        text-align: center;
        font-size: 3rem;
    }
`;
