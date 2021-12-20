import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";

export function useSidebarContext() {
    const value = useContext(SidebarContext)

    return value
}
