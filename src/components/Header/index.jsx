import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './Header.scss';

Header.propTypes = {};
function Header() {
    return (
        <header className='Header'>
            <Container>
                <Row className='justify-content-between'>
                    <Col xs='auto'>
                        <a
                            className='header__link header__title'
                            href='https://github.com/huuquangnhatnguyen'
                            target='_blank'
                            rel='nopener noreferrer'>
                            PhotoApp
                        </a>
                    </Col>

                    <Col xs='auto'>
                        <NavLink
                            exact
                            className='header__link'
                            to="/photos"
                            activeClassname="header__link--active"
                        >
                            Redux App
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;