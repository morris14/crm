import React from "react";
import { useFetch } from "../../../hooks";

const SingleJob = ({ match: { params } }) => {
    const [data, loading] = useFetch("jobs", params.job_id);

    return (
        <div>
            <h1>{!loading && data.name}</h1>
        </div>
    );
};

export default SingleJob;
