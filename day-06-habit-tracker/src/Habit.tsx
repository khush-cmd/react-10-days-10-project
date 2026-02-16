// import { useState } from "react";
// import useStore from "./store";
// import { AiOutlinePlus } from "react-icons/ai";

// const Habit = () => {
//   const { habits, addHabit, removeHabit, toggleHabit } = useStore();
//   const [inputValue, setInputValue] = useState("");

//   const handleAddHabit = () => {
//     if (inputValue.trim() === "") return;

//     addHabit({
//       id: Date.now(),
//       text: inputValue,
//       completedDays: [],
//       streak: 0,
//       bestStreak: 0,
//     });

//     setInputValue("");
//   };

//   return (
//     <div className="min-h-screen bg-gray-200">

//       {/* Navbar */}
//       <div className="bg-blue-800 text-white px-8 py-4 flex justify-between items-center shadow-md">
//         <h1 className="text-2xl font-semibold">📋 Habit Tracker</h1>
//         <div className="text-sm">
//           Current Streak: <span className="font-bold">🔥 0</span> | 
//           Best Streak: <span className="font-bold">🏆 0</span>
//         </div>
//       </div>

//       <div className="max-w-5xl mx-auto p-6">

//         {/* Add Habit Card */}
//         <div className="bg-white p-6 rounded-xl shadow mb-6 flex gap-4">
//           <input
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             placeholder="Add a New Habit"
//             className="flex-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />

//           <button
//             onClick={handleAddHabit}
//             className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition"
//           >
//             <AiOutlinePlus />
//             Add Habit
//           </button>
//         </div>

//         {/* Habits Table */}
//         <div className="bg-white rounded-xl shadow p-4">
//           <h2 className="text-xl font-semibold mb-4">My Habits</h2>

//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="bg-gray-100 text-gray-600">
//                 <th className="p-3">Habit</th>
//                 <th className="p-3">Status</th>
//                 <th className="p-3">Streak</th>
//                 <th className="p-3 text-right">Actions</th>
//               </tr>
//             </thead>

//             <tbody>
//               {habits.map((habit) => (
//                 <tr
//                   key={habit.id}
//                   className="border-t hover:bg-gray-50 transition"
//                 >
//                   <td className="p-3 flex items-center gap-3">
//                     <input
//                       type="checkbox"
//                       checked={habit.completed}
//                       onChange={() => toggleHabit(habit.id)}
//                       className="w-5 h-5 accent-blue-600"
//                     />
//                     <span
//                       className={`${
//                         habit.completed
//                           ? "line-through text-gray-400"
//                           : "text-gray-800"
//                       }`}
//                     >
//                       {habit.text}
//                     </span>
//                   </td>

//                   <td className="p-3">
//                     {habit.completed ? "Done ✅" : "Pending ⏳"}
//                   </td>

//                   <td className="p-3 font-semibold text-orange-500">
//                     🔥 {habit.streak}
//                   </td>

//                   <td className="p-3 text-right">
//                     <button
//                       onClick={() => removeHabit(habit.id)}
//                       className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Habit;
