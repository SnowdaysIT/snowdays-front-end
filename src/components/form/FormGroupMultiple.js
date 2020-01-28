import React from 'react';
import { FormGroup, Label, UncontrolledButtonDropdown, Input, DropdownToggle, DropdownMenu } from 'reactstrap';

// custom css
import styles from  './assets/css/FormGroupMultiple.module.css';

/**
 * Component for custom form dropdown with checkboxes for multiple selection
 */
class FormGroupMultiple extends React.Component {
    static defaultProps = {
        // text for form label
        label: 'Multiple choice dropdown',
        // text for dropdown placeholder
        placeholder: "Select all that apply...",
        // 
        inputName: "dropdownGroup",
        elements: [
            "test 1",
            "test 2",
            "test 3"
        ],
        defaultChecked: []
    }

    constructor(props) {
        super(props);
        // default checked array management
        this.state = {
            checkedItems: props.defaultChecked
        };
    }

    render() {
        return (
            <FormGroup>
                <Label for={this.props.inputName}>{this.props.label}</Label>
                <UncontrolledButtonDropdown>
                    <DropdownToggle className={styles.dropdownToggle} caret>{this.props.placeholder}</DropdownToggle>
                    <DropdownMenu id={this.props.inputName} className={styles.dropdownMenu}>
                        {
                        this.props.elements.map((value, index) => {
                            let currentId=this.props.inputName + "_" + index
                            return (
                                <Label key={index} check>
                                    <Input type="checkbox" id={currentId} name={currentId} onChange={
                                        // check mechanic for checkbox dropdown
                                        // NOTE: not order-preserving safe
                                        (e) => {
                                            let checkedIndex = this.state.checkedItems.indexOf(currentId)
                                            if (checkedIndex >= 0){
                                                //remove from checked list
                                                this.setState({
                                                    checkedItems: this.state.checkedItems.filter(
                                                        (item, index) => {
                                                            return index !== checkedIndex
                                                        }
                                                    )
                                                })
                                            } else {
                                                // add to checked list
                                                this.setState({
                                                    checkedItems: [ ...this.state.checkedItems, currentId]
                                                })
                                            }
                                        }
                                    } checked={
                                        // check condition for checkbox dropdown
                                        (this.state.checkedItems.indexOf(currentId) >= 0)
                                    } />
                                    {value}
                                </Label>
                            )
                        })}
                    </DropdownMenu>
                </UncontrolledButtonDropdown>
            </FormGroup>
        );
    }
}

export default FormGroupMultiple;