import React from "react";

interface IProfileStatusProps {
    status: string
}

interface IProfileStatusState {}

export class ProfileStatus extends React.Component<IProfileStatusProps, IProfileStatusState> {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onBlur={this.deactivateEditMode} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}