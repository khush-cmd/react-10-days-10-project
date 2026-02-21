import { useState } from "react";
import useStore from "./store";
import { AiOutlinePlus } from "react-icons/ai";

const days = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

const Habit = () => {
  const { habits, addHabit, removeHabit, toggleDay } = useStore();
  const [inputValue, setInputValue] = useState("");

  const handleAddHabit = () => {
    if (!inputValue.trim()) return;

    addHabit({
      id: Date.now(),
      text: inputValue,
      completedDays: [],
      streak: 0,
      bestStreak: 0,
    });

    setInputValue("");
  };

  const totalStreak = habits.reduce((acc, h) => acc + h.streak, 0);
  const bestStreak = Math.max(0, ...habits.map(h => h.bestStreak));

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <div className="bg-blue-800 text-white px-8 py-4 flex justify-between items-center shadow-md">
        <h1 className="text-2xl font-semibold">📋 Habit Tracker</h1>
        <div className="text-sm">
          Current Streak: <span className="font-bold">🔥 {totalStreak}</span> | 
          Best Streak: <span className="font-bold">🏆 {bestStreak}</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">

        {/* Add Habit */}
        <div className="bg-white p-6 rounded-xl shadow mb-6 flex gap-4">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a New Habit"
            className="flex-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            onClick={handleAddHabit}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition"
          >
            <AiOutlinePlus />
            Add Habit
          </button>
        </div>

        {/* Habits Table */}
        <div className="bg-white rounded-xl shadow p-4">
          <h2 className="text-xl font-semibold mb-4">My Habits</h2>

          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-600">
                <th className="p-3 text-left">Habit</th>
                <th className="p-3 text-left">Days</th>
                <th className="p-3 text-left">Streak</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {habits.map((habit) => (
                <tr key={habit.id} className="border-t hover:bg-gray-50 transition">

                  {/* Habit Name */}
                  <td className="p-3 font-medium text-gray-800">
                    {habit.text}
                  </td>

                  {/* Days Checkboxes */}
                  <td className="p-3">
                    <div className="flex gap-2">
                      {days.map((day) => (
                        <label key={day} className="flex flex-col items-center text-xs">
                          <input
                            type="checkbox"
                            checked={habit.completedDays.includes(day)}
                            onChange={() => toggleDay(habit.id, day)}
                            className="accent-blue-600"
                          />
                          {day}
                        </label>
                      ))}
                    </div>
                  </td>

                  <td className="p-3 font-semibold text-orange-500">
                    🔥 {habit.streak}
                  </td>

                  {/* Delete */}
                  <td className="p-3 text-right">
                    <button
                      onClick={() => removeHabit(habit.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                    >
                      Delete
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
};

export default Habit;
