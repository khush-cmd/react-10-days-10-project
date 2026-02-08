import { create } from "zustand";

interface Note {
    text : string;
    color : string;
}
interface NotesState {
    notes : Note[];
    search : string;
    editorContent : string;
    noteColor : string;
    currentNoteIndex : number | null;
    setNotes : (updateNotes : Note[]) => void;
    setSearch : (searchValue : string) => void;
    setEditorContent : (content : string) => void;
    setNoteColor : (color : string) => void;
    setCurrentNoteIndex : (index : number | null) => void;
    addOrUpdateNote: () => void;
    selectNote : (index : number) => void;
}
const useStore = create<NotesState>((set) => ({
notes : [],
search : "",
editorContent: "",
noteColor : "#ffffff",
currentNoteIndex : null,

setNotes : (updateNotes ) => set(() => ({notes : updateNotes})),
setSearch : (searchValue) => set(() => ({search : searchValue})),
setEditorContent: (content) => set(() => ({editorContent : content})),
setNoteColor : (color) => set(() => ({noteColor : color})),
setCurrentNoteIndex : (index) => set(() => ({currentNoteIndex : index})),
addOrUpdateNote : () => 
    set((state) => {
        const {editorContent , noteColor,currentNoteIndex,notes} = state;
        if(!editorContent.trim()) return state;

            if(currentNoteIndex !== null){
                const updateNotes = [...notes];
                updateNotes[currentNoteIndex] = {
                    text : editorContent,
                    color : noteColor,
                };
                return {
                    notes : updateNotes,
                    editorContent : "",
                    noteColor : "#ffffff",
                    currentNoteIndex : null,
                };
                 }
            
            else{
                return {
                    notes : [...notes,{text : editorContent , color : noteColor}],
                    editorContent : "",
                    noteColor : "#ffffff",
                    currentNoteIndex : null,
                };
            
        }
    }), 
    selectNote : (index) => 
        set((state) => ({
            currentNoteIndex : index,
            editorContent : state.notes[index].text,
            noteColor : state.notes[index].color,
        })),
}));
export default useStore;