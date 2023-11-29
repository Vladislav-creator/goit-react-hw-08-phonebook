import { createSelector } from '@reduxjs/toolkit';

export const selectContactsList = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectContactsFilter = state => state.filters;

export const selectVisibleContacts = createSelector(
    [ selectContactsList, selectContactsFilter],
    (contacts, filter) => {
    return contacts.filter(contact => contact.name.toLowerCase()
    .includes(filter.toLowerCase()))
    }
    )