export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export type Timestamp = `${number}${number}${number}${number}-${number}${number}-${number}${number}`;
export type DateString = string;

export type UID = string;
export type EventType = 'Депозит' | 'Бесплатная вечеринка' | 'и что-то ещё, не помню что';
export type TEvent = {
    id: number,
    name: string,
    date: string,
    place: string,
    price: string,
    type: EventType,
    description: string,
}
export type GuestInviteForm = [string, string];

export interface ApiResponse {
    events: TEvent[],
}

export type EventSliceState = ApiResponse & {
    currentBar: string,
    filter: Filter | BarName,
    status: 'idle' | 'loading' | 'failed',
}

export type Filter = 'anyFilter' | 'date' | 'price';
export type BarName = 'anyBar' | 'rovesnik' | 'doroshka' | 'skrepka';
export type EventId = number;
export type ReservationInfo = {
    bar: BarName,
    tableId: number,
    time: string,
    date: Timestamp,
    duration: number,
    guestCount: number,
}
export type TableData = {
    id: number,
    capacity: number,
    location: string,
}