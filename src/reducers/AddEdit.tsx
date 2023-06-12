import { Component } from 'react'

interface State {
    formData: {
        fname: string;
        lname: string;
        email: string;
        number: number;
        status:"Active" | "Inactive";
    };
    redirectToTable: boolean;
}

class AddEdit extends Component<{}, State>{
    constructor(props: {}) {
        super(props);
        this.state = {
            formData: {
                fname: '',
                lname: '',
                email: '',
                number: 0,
                status:'Active'
            },
            redirectToTable: false,
        }
    }
}
export default AddEdit;

  