import axios from "../redux/types/actions/node_modules/axios";
import {POSTUSER} from "../types/rootTypes";
import {GETMEMBERS} from "../types/rootTypes";
import {GETUSER} from "../types/rootTypes";
import {GETROOMS} from "../types/rootTypes";
import {GETROOM} from "../types/rootTypes";
import {GETMESSAGES} from "../types/rootTypes";
import {ADDMESSAGE} from "../types/rootTypes";
import {USERLOGOUT} from "../types/rootTypes";
import {ADDLASTMESSAGE} from "../types/rootTypes";
import {UPDATEROOM} from "../types/rootTypes";

const token = JSON.parse(localStorage.getItem("login"))?.token;
axios.interceptors.request.use(
	(config) => {
		config.headers["auth-token"] = token;
		return config;
	},
	(error) => Promise.reject(error)
);
export const postUser = (data) => {
	return (dispatch) => {
		axios.post("/auth/register", data).then((res) => {
			dispatch({type: POSTUSER, data});
		});
	};
};

export const getMembers = (roomId) => {
	return (dispatch) => {
		axios.get(`/room/${roomId}`).then((res) => {
			dispatch({type: GETMEMBERS, data: res.data});
		});
	};
};
export const getUser = (id) => {
	return (dispatch) => {
		axios.get(`/user/${id}`).then((res) => {
			dispatch({type: GETUSER, data: res.data});
		});
	};
};

export const getRooms = (userId) => {
	return (dispatch) => {
		axios.get(`/user/${userId}`).then((res) => {
			dispatch({type: GETROOMS, data: res.data.roomsList});
		});
	};
};
export const updateRoom = (roomId, lastMessage) => {
	return {type: UPDATEROOM, data: {roomId, lastMessage}};
};

export const getRoom = (roomId) => {
	return (dispatch) => {
		axios.get(`/room/${roomId}`).then((res) => {
			dispatch({type: GETROOM, data: res.data});
		});
	};
};

export const setMessage = (userId, roomId, message) => {
	return (dispatch) => {
		axios.post(`/message/${roomId}/${userId}`, {text: message}).then((res) => {
			console.log(res.data);
		});
	};
};

export const getMessages = (roomId) => {
	return (dispatch) => {
		axios.get(`/messages/${roomId}`).then((res) => {
			dispatch({type: GETMESSAGES, data: res.data.messages});
		});
	};
};

export const addMessage = (message) => {
	return {type: ADDMESSAGE, data: message};
};
/*export const addLastMessage = (lastMessage) => {
	return {type: ADDLASTMESSAGE, data: lastMessage};
};*/

export const logOut = () => {
	return {type: USERLOGOUT};
};
