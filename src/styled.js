import styled from "styled-components";

export const SidebarWrapper = styled.div`
    margin-left: ${({value}) => `${value ? '0' : '-15rem'}`};  
    transition: margin .25s ease-out;
`;

export const Section = styled.div`
        position: relative;
`;
