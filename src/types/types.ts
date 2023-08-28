export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export interface Weather{
    location: string; // 지역 이름
    temperature: number; // 온도 (섭씨)
    description: string; // 날씨 상태 설명
    icon: string; // 날씨 아이콘 설명
}