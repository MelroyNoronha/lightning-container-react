import React from "react";
import { PageHeader } from "./PageHeader/PageHeader.jsx";
import  DCRDetail  from "./DCRDetail/DCRDetail.jsx";
import {Notes} from "./Notes/Notes.jsx";
import {DCRLines} from "./DCRLines/DCRLines.jsx";

export const DCR = () => {
    return (
        <React.Fragment>
            <PageHeader />
            <DCRDetail />
            <Notes/>
            <DCRLines />
        </React.Fragment>
    )
}