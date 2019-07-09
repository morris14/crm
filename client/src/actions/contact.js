import {
    ADD_CONTACT_SUCCESS,
    ADD_CONTACT_FAIL,
    FETCH_CONTACTS_SUCCESS,
    FETCH_CONTACTS_FAIL,
    TOGGLE_CONTACT_LOADING,
} from "./types";
import axios from "axios";

export const fetchContacts = () => async dispatch => {
    dispatch({ type: TOGGLE_CONTACT_LOADING });
    try {
        const res = await axios.get("/api/v1/contacts");

        dispatch({
            type: FETCH_CONTACTS_SUCCESS,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: FETCH_CONTACTS_FAIL,
        });
    }
};

export const addContact = contact => async dispatch => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    dispatch({ type: TOGGLE_CONTACT_LOADING });

    try {
        const res = await axios.post("/api/v1/contacts", contact, config);

        dispatch({
            type: ADD_CONTACT_SUCCESS,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: ADD_CONTACT_FAIL,
        });
    }
};