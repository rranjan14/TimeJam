import {BASE_URL} from './constants';
import {Shift} from './types';

// Fetch all shifts
export async function fetchShifts() {
  const response = await fetch(`${BASE_URL}/shifts`);
  const json = (await response.json()) as Array<Shift>;
  return json;
}

// Book a shift
export async function bookShift(shiftId: string) {
  const response = await fetch(`${BASE_URL}/shifts/${shiftId}/book`, {
    method: 'POST',
  });
  const json = (await response.json()) as Shift;
  return json;
}

// Cancel a shift
export async function cancelShift(shiftId: string) {
  const response = await fetch(`${BASE_URL}/shifts/${shiftId}/cancel`, {
    method: 'POST',
  });
  const json = (await response.json()) as Shift;
  return json;
}
