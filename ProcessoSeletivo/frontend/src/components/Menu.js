import React from "react";
import styled from "styled-components";

const Relatorio = styled.button`
    width: 150px;
    height: 60px;
    border-radius:8px;
    font-size: 20px;
    background-color:#2c73d2; 
    color: white;
    border: none;
    position: sticky;
    bottom: 20px;
`

const Nav = styled.nav`
    margin: 0 25px;
    position: solid;
    width: 100%;
`

const Ul = styled.ul`
    height: 10%;
    display: flex;
    list-style: none;
`
const LiLink = styled.li`
    padding: 15px;
    &:hover{
        color: blue;
    }
`

const A = styled.a`
    right:10%;
`

const Footer = styled.footer`
    justify-content: center;
`
const Menu = () => {
    return(
        <Footer>
            <Nav>
                <Ul>
                    <LiLink>
                        <A href="/" style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">Container</A>
                    </LiLink>
                    <LiLink>
                        <A href="/movimentacoes" style={{ color: 'inherit', textDecoration: 'inherit'}} to="/movimentacoes">Movimentações</A>
                    </LiLink>
                    <LiLink style={{ margin: "0 60%" }}>
                        <A href="/relatorio"><Relatorio type="button">Relatório</Relatorio></A>
                    </LiLink>
                </Ul>
            </Nav>
        </Footer>
    );
};

export default Menu