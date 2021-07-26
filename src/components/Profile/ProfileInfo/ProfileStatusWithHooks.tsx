import React, {ChangeEvent, useEffect, useState} from "react";

type IProfileStatusProps =  {
    status: string | ReadonlyArray<string> | number
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks: React.FC<IProfileStatusProps> = (props) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState(props.status)
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {setEditMode(true)}

    const deactivateEditMode = () => {
        setEditMode(false)
        if (typeof status === "string") {
            props.updateStatus(status)
        }
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            { !editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || "-------"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true} onBlur={deactivateEditMode}
                       onChange={onStatusChange} value={status}/>
            </div>
            }
        </div>
    )
}