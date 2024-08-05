import { createSlice } from "@reduxjs/toolkit";
import { deleteContact, addContact, fetchContacts } from "./contactsOps";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [ ],
        isLoading: false,
        error: null,
    },
    // reducers: {
    //     addContact: {
    //         reducer(state, action) {
    //         state.items.push(action.payload);
    //     },
    //     prepare ({name, number}){
    //         return {
    //             payload: {
    //             name: name,
    //             number: number,
    //             id: nanoid()
    //             }
    //         }
    //     }
    // },
    //     deleteContact(state, action) {
    //         state.items = state.items.filter(
    //             (contact) => contact.id !== action.payload)
    //     },
    // }
    extraReducers: builder => {
        builder  
        .addCase(fetchContacts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        })
         .addCase(fetchContacts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
         })
         .addCase(addContact.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(addContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        })
         .addCase(addContact.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
         })
         .addCase(deleteContact.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items = state.items.filter(contact => contact.id !== action.payload.id);
        })
         .addCase(deleteContact.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
         })
    }
})

export const contactsReducer = contactsSlice.reducer

