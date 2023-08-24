import { atom } from 'recoil';

export interface Weather{
    date: string;
    description: string;
}

export const weatherState = atom<Weather>({
    key: 'weatherState',
    default: {
        date: '',
        description: '',
    },
});