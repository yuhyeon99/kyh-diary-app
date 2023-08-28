import { atom } from 'recoil';
import { Weather } from '../types/types';

export const weatherState = atom<Weather>({
    key: 'weatherState',
    default: {
        location: '',
        temperature: 0,
        description: '',
        icon: ''
    },
});