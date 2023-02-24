import { ReactNode } from "react";

export type Item = {
    id: string;
    title : string;
    message: Message[]
} 

export type Message = {
    list : string;
    quantity : string;
}

export type State = {
    items : Item[]
}

export type Action ={
    type : string;
}

export type Props = {
    children : ReactNode
}

export type ContextType = {
    state: State;
    dispatch: React.Dispatch<Action>;
  };
  