import {create} from 'zustand';
export interface FormFieldProp {
    label : string;
    type : "number" | "text" | "textarea" | "date" | "password" |"file";
    value : string;
}
interface FormStoreType {
    formField : FormFieldProp[],
    addField : (field : FormFieldProp) => void;
    removeField  : (index : number) => void;
    updateField  :(index : number , field : FormFieldProp) => void;
    resetForm : () => void;
}

export const useStore = create<FormStoreType>((set) => ({
    formField : [],
    addField : (field) =>
        set((state) => ({
         formField:    [...state.formField,field],
        })),
    removeField : (index) => 
        set((state) => ({
            formField : state.formField.filter((_,i) => i !== index),
        })),
    updateField : (index,updateField) => 
        set((state) => ({
            formField : state.formField.map((field,i) => 
            i === index ? updateField : field),
        })),
    resetForm : () => set({formField : [] }),
}))
export default useStore;