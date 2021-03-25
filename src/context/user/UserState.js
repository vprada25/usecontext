import axios from 'axios'
import React, { useReducer/* , useState */ } from 'react'


import UserContext from './UserContext'
import Reducer from './UserReducer'

import { GET_USERS, GET_PROFILE } from "../Types";


const UserState = (props) => {
    const initialState = {
        users: [],
        selectedUser: null
    }

    /*  const [state, setstate] = useState(initialState) */

    const [state, dispatch] = useReducer(Reducer, initialState)


    const getUser = async () => {
        try {
            const res = await axios.get("https://reqres.in/api/users");
            const data = res.data.data;
            dispatch({ type: GET_USERS, payload: data });
        } catch (error) {
            console.error(error);
        }
    };

    const getProfile = async (id) => {
        try {
            const res = await axios.get("https://reqres.in/api/users/" + id);
            const { data } = res;
            dispatch({ type: GET_PROFILE, payload: data.data });
        } catch (error) { }
    };


    return (
        <UserContext.Provider value={{
            users: state.users,
            selectedUser: state.selectedUser,
            getUser,
            getProfile
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;

