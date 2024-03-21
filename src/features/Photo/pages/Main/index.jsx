import React from 'react';
import Banner from '../../../../components/Banner';
import Images from '../../../../constants/image';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

MainPage.propTypes = {};

function MainPage(props) {
    return (
        <div className='photo-main'>
            <Banner title='Your awesome photo!' backgroundUrl={Images.PINK_BG}/>
            <Container className='text-center'>
                <Link to='/photos/add'>Add new Photos</Link>
            </Container>
        </div>
    );
}

export default MainPage;