import React, {ChangeEvent} from "react";

interface IProfileStatusProps {
    status: string | null
    updateStatus: (status: string) => void
}

interface IProfileStatusState {}

export class ProfileStatus extends React.Component<IProfileStatusProps, IProfileStatusState> {
    state = {
        editMode: false,
        status: this.props.status
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
        this.props.updateStatus(this.state.status as string)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
       this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps: Readonly<IProfileStatusProps>, prevState: Readonly<IProfileStatusState>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState ({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "-------"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode}
                               onChange={this.onStatusChange} value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}