export type Shift = {
  id: string;
  booked: boolean;
  area: string;
  startTime: number; // timestamp in millis
  endTime: number; // timestamp in millis
};

export type ShiftSectionType = {
  title: string;
  data: Shift[];
};
