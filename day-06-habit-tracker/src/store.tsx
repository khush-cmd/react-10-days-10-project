import { create } from "zustand";

interface Habit {
    id : number;
    text: string;
    completedDays : string[];
    streak : number;
    bestStreak : number;
}


interface Habitstore {
habits : Habit[];
addHabit : ( habit: Habit ) => void;
removeHabit : (id : number) => void;
toggleHabit : (id : number) => void;
}
const useStore = create<Habitstore>((set) => ({
    habits : [],
    addHabit : (habit) => 
        set((state) =>({
            habits : [...state.habits,habit],

        })),
    removeHabit : (id) => 
        set  ((state) => ({
            habits : state.habits.filter((habit) => habit.id !== id),
        })),
    toggleHabit : (id) => 
        set ((state) => ({
            habits : state.habits.map((habit) => 
            habit.id === id ? {...habit,completed : !habit.completedDays} : habit), 
        })),
}));
export default useStore;