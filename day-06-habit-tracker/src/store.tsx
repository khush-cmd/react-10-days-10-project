import { create } from "zustand";



interface Habit {
  id : number,
  text : string,
  completedDays : string[],
  streak : number,
  bestStreak : number,
}
interface HabitStore {
  habits : Habit[],
  addHabit: (habit : Habit) => void;
  removeHabit : (id : number) => void;
  toggleDay : (id : number, day : string) => void;
}
const useStore = create<HabitStore>((set) => ({
  habits : [],
  addHabit : (habit) => 
    set((state) => ({
      habits : [...state.habits, habit],
    })),
    removeHabit: (id) => 
      set((state) => ({
        habits : state.habits.filter((habit) => habit.id !== id ),
      })),
    toggleDay : (id , day) => 
      set((state) => ({
        habits : state.habits.map((habit) => {
          if(habit.id !== id) return habit;

          const exist = habit.completedDays.includes(day);

          const updateDays = exist ? 
          habit.completedDays.filter((d) => d !== day)
          : [...habit.completedDays,day];

          const newStreak = updateDays.length;

          const newBest = Math.max(habit.bestStreak,newStreak);
          
          return {
            ...habit,

            completedDays : updateDays,
            streak : newStreak,
            bestStreak : newBest,
          };

        }),
      })),
}));
export default useStore;