import React, { Component } from 'react';
import { Alert, UncontrolledAlert } from 'reactstrap';

export default function R034_ReactstrapAlerts() {

    return (
        <div>
            <Alert>
                Simple Alert [ color : primary]
            </Alert>
            <UncontrolledAlert color="warning">
                Uncontrolled Alert [ clolor : warning ]
            </UncontrolledAlert>
        </div>
    )
}