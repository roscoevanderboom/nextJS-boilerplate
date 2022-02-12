
export const appReducer = (state: any, action: any) => {
    const { type, payload } = action;
    switch (type) {
        case "SET_USER":
            return { ...state, user: payload };
        default:
            break;
    }
}