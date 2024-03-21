import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../../../../components/Banner';
import PhotoForm from '../../components/PhotoForm';
AddEdit.propTypes = {};

function AddEdit(props) {
    return (
        <div className='photo-edit'>
            <Banner title='Pick your nice photo'/>
            <div className='photo-edit__form'>
                <PhotoForm onSubmit={values => console.log('Form Submit: ', values)} />
            </div>
        </div>
    );
}

export default AddEdit;