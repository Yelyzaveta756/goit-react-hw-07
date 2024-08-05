import { createSelector } from "@reduxjs/toolkit"

export const selectContacts = state => state.contacts.items

export const selectError = state => state.contacts.error

export const selectIsLoading = state => state.contacts.isLoading

export const selectNameFilter = state => state.filters.name

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, textFilter) => {
        console.log('selectFilteredContacts');
        return contacts.filter((contact) => {
            if (textFilter.trim() === '') {
                return contacts;
            }
            return contact.name.toLowerCase().includes(textFilter.toLowerCase());
        })
    }
)