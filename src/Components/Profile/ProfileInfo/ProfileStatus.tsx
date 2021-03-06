import React, {ChangeEvent} from "react";


type ProfilePropsType = {
    status: string
}

class ProfileStatus extends React.Component<any, any> {


    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)

    }
    OnStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps:any,prevState:any) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
        console.log('componentDidUpdate')
    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || '-------'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.OnStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                           value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}


export default ProfileStatus;
