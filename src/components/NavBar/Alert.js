import React from 'react'

export default function AlertBs(props) {
    return (
        props.alert && <>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.head}</strong> {props.alert.msg}
                {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>
        </>
    )
}
