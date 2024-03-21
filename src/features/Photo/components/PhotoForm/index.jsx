import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import Select from 'react-select';
import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global';
import Images from '../../../../constants/image';
PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
    onSubmit: null
}

function PhotoForm(props) {
    return (
        <Form>
            <FormGroup>
                <Label for='titleId'>Title</Label>
                <Input name='title' id='titleId' placeholder='Eg: wow nature?' />
            </FormGroup>

            <FormGroup>
                <Label for='categoryId'>Category</Label>
                <Select
                    id='categoryId'
                    name='category'
                    placeholder="What's your photo's category?"
                    options={PHOTO_CATEGORY_OPTIONS}
                />
            </FormGroup>

            <FormGroup>
                <Label for='photoId'>Photo</Label>
                <div><Button type='button' outline color='primary'>Random a Photo</Button></div>
                <div>
                    <img width='200px' height='200px' src={Images.COLORFUL_BG} alt='colorful background'></img>
                </div>
            </FormGroup>

            <FormGroup>
                <Button color='primary'>Add to Album</Button>
            </FormGroup>
        </Form>
    );
}

export default PhotoForm;