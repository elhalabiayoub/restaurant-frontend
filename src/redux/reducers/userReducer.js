import { GETMEMBERS } from "../types/rootTypes";
import { GETUSER } from "../types/rootTypes";
const userReducer = (state = { members: [], userData: {} }, action) => {
	switch (action.type) {
		case GETMEMBERS:
			state = { ...state, members: action.data };

			return state;
		case GETUSER:
			state = { ...state, userData: action.data };

			return state;
		default:
			return state;
	}
};

export default userReducer;
