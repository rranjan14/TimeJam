import {createSlice, PayloadAction, createSelector, createAsyncThunk} from '@reduxjs/toolkit';
import {Shift} from '../lib/types';
import * as api from '../lib/api';
import {RootState} from '.';

type ShiftState = {
  shifts: Shift[];
  status: 'idle' | 'loading' | 'success' | 'failed';
  error: string | null;
};

const initialState: ShiftState = {
  shifts: [],
  status: 'idle',
  error: null,
};

export const fetchShifts = createAsyncThunk<Shift[]>('shifts/fetchShifts', async () => {
  try {
    const shifts = await api.fetchShifts();
    return shifts;
  } catch (error) {
    throw new Error('Failed to fetch shifts');
  }
});

export const shiftSlice = createSlice({
  name: 'shifts',
  initialState,
  reducers: {
    bookShift: (state, action: PayloadAction<Shift['id']>) => {
      const shiftId = action.payload;
      state.shifts = state.shifts.map((shift) =>
        shift.id === shiftId ? {...shift, booked: true} : shift,
      );
    },
    cancelShift: (state, action: PayloadAction<Shift['id']>) => {
      const shiftId = action.payload;
      state.shifts = state.shifts.map((shift) =>
        shift.id === shiftId ? {...shift, booked: false} : shift,
      );
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch shifts reducers
      .addCase(fetchShifts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchShifts.fulfilled, (state, action) => {
        state.status = 'success';
        state.shifts = action.payload;
      })
      .addCase(fetchShifts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch shifts';
      });
  },
});

const selectShifts = (state: RootState) => state.shifts;
export const selectBookedShifts = createSelector(selectShifts, (shifts) =>
  shifts.shifts.filter((shift) => shift.booked === true),
);

export const selectAvailableShifts = createSelector(selectShifts, (shifts) =>
  shifts.shifts.filter((shift) => shift.booked === false),
);

export const {bookShift, cancelShift} = shiftSlice.actions;

export default shiftSlice.reducer;
