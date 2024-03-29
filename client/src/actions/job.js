import {
    ADD_JOB_SUCCESS,
    ADD_JOB_FAIL,
    FETCH_JOBS_SUCCESS,
    FETCH_JOBS_FAIL,
    TOGGLE_JOB_LOADING,
} from "./types";
import axios from "axios";
import { setAlert } from "./alert";

export const fetchJobs = () => async dispatch => {
    dispatch({ type: TOGGLE_JOB_LOADING });
    try {
        const res = await axios.get("/api/v1/jobs");

        dispatch({
            type: FETCH_JOBS_SUCCESS,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: FETCH_JOBS_FAIL,
        });
    }
};

export const addJob = job => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const res = await axios.post("/api/v1/jobs", job, config);

        dispatch(setAlert("Job added!", "success"));

        dispatch({ type: TOGGLE_JOB_LOADING });

        dispatch({
            type: ADD_JOB_SUCCESS,
            payload: res.data,
        });
    } catch (err) {
        const errors = err.response.data.errors;

        if (errors) errors.forEach(error => dispatch(setAlert(error.msg, "danger")));

        dispatch({
            type: ADD_JOB_FAIL,
        });
    }
};
