import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Label,
    UncontrolledButtonDropdown,
    Input,
    DropdownToggle,
    DropdownMenu,
} from 'reactstrap';
import styles from  './assets/css/FormGroupMultiple.module.css';

/**
 * Custom form dropdown with checkboxes for multiple selection
 */
function MultipleChoiceDropdown({
    placeholder,
    inputName,
    elements,
    defaultChecked,
}) {

    const [checkedItems, setCheckedItems] = useState(defaultChecked);

    const handleChange = (currentId) => () => {
        // check mechanic for checkbox dropdown
        // NOTE: not order-preserving saf
        const checkedIndex = checkedItems.indexOf(currentId)
        if (checkedIndex >= 0){
            // remove from checked list
            setCheckedItems(checkedItems.filter(
                (item, i) => i !== checkedIndex
            ))
        } else {
            // add to checked list
            setCheckedItems([ ...checkedItems, currentId ])
        }
    };

    return (
        <UncontrolledButtonDropdown>
            <DropdownToggle className={styles.dropdownToggle} caret>{placeholder}</DropdownToggle>
            <DropdownMenu id={inputName} className={styles.dropdownMenu}>
                {elements.map((value, i) => {
                    const currentId=`${inputName}_${i}`;
                    return (
                        <Label key={currentId} check>
                            <Input
                                type="checkbox"
                                id={currentId}
                                name={currentId}
                                onChange={handleChange(currentId)}
                                checked={
                                    // check condition for checkbox dropdown
                                    (checkedItems.indexOf(currentId) !== -1)
                                } />
                            {value}
                        </Label>
                    )
                })}
            </DropdownMenu>
        </UncontrolledButtonDropdown>
    );
};

MultipleChoiceDropdown.propTypes = {
    placeholder: PropTypes.string,
    inputName: PropTypes.string,
    elements: PropTypes.arrayOf(PropTypes.string),
    defaultChecked: PropTypes.arrayOf(PropTypes.string),
};

MultipleChoiceDropdown.defaultProps = {
    placeholder: 'Select all that apply...',
    inputName: 'dropdownGroup',
    elements: [
        'test 1',
        'test 2',
        'test 3',
    ],
    defaultChecked: [],
};

export default MultipleChoiceDropdown;