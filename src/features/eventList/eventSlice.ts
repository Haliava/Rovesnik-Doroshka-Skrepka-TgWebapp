import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {initialEventSliceState} from "../../shared/constants";
import {fetchApiResponse} from "../../entities/event/api";
import { BarName, EventId, Filter } from '../../shared/types';
import { sortEventsByFilter } from '../../shared/utils';
import { RootState } from '../../app/store';

const initialState = initialEventSliceState;

const fetchEvents = createAsyncThunk(
    'events/fetchEvents',
    fetchApiResponse
)

export const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        setFilter: (state, action: PayloadAction<Filter | BarName>) => {
            state.filter = action.payload;
            if (state.filter !== 'anyFilter' && state.filter !== 'anyBar')
                state.events.sort((a, b) => sortEventsByFilter(a, b, state.filter))
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEvents.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchEvents.fulfilled, (state, action) => {
                state.status = 'idle';
                state.events = action.payload.events;
            })
            .addCase(fetchEvents.rejected, (state) => {
                state.status = 'failed';
            });
    },
})

export const { setFilter } = eventSlice.actions;

export const selectEvents = (state: RootState) => state.events.events;
export const selectFilter = (state: RootState) => state.events.filter;
export const selectEventById = (state: RootState, id: EventId) => selectEvents(state)[id];

export default eventSlice.reducer;
