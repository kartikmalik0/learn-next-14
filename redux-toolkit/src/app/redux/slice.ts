import { createSlice, nanoid } from "@reduxjs/toolkit";

interface DataType {
    id: string;
    name: string;
}

interface InitialStateType {
    users: DataType[];
}

const initialState: InitialStateType = {
    users: []
}

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            console.log(action)
            const data: DataType = {
                id: nanoid(),
                name: action.payload
            };
            state.users.push(data);
        }
    }
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
