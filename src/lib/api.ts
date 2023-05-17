import {BASEURL} from './constants';
import {Shift} from './types';

// Fetch all shifts
export async function fetchShifts() {
  const response = await fetch(`${BASEURL}/shifts`);
  const json = (await response.json()) as Array<Shift>;
  return json;
}

// Book a shift
export async function bookShift(shiftId: string) {
  const response = await fetch(`${BASEURL}/shifts/${shiftId}/book`, {
    method: 'POST',
  });
  const json = (await response.json()) as Shift;
  return json;
}

// Cancel a shift
export async function cancelShift(shiftId: string) {
  const response = await fetch(`${BASEURL}/shifts/${shiftId}/cancel`, {
    method: 'POST',
  });
  const json = (await response.json()) as Shift;
  return json;
}
