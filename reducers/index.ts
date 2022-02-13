export const REDUCER_TYPES = {
    SET_USER: "SET_USER",
    SET_LOADING: "SET_LOADING",
}

export const appReducer = (state: any, action: any) => {
    const { type, payload } = action;
    switch (type) {
        case "SET_USER":
            return { ...state, user: payload };
        case "SET_LOADING":
            return { ...state, user: payload };
        default:
            break;
    }
}