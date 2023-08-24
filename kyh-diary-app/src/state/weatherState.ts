import { atom } from 'recoil';

export interface Weather{
    location: string; // 지역 이름
    temperature: number; // 온도 (섭씨)
    description: string; // 날씨 상태 설명
    icon: string; // 날씨 아이콘 설명
}

export const weatherState = atom<Weather>({
    key: 'weatherState',
    default: {
        location: '',
        temperature: 0,
        description: '',
        icon: ''
    },
});