import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./userTypes";

const initialState = {
  applicationState: {
    loading: false,
    error: "",
  },
  domainState: {
    users: [],
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      const applicationStateRequest = {
        ...state.applicationState,
        loading: true,
      };
      return {
        ...state,
        applicationState: applicationStateRequest,
      };
    case FETCH_USER_SUCCESS:
      const applicationStateSuccess = {
        ...state.applicationState,
        loading: false,
      };
      const domainState = { ...state.domainState, users: action.payload };
      return {
        ...state,
        applicationState: applicationStateSuccess,
        domainState: domainState,
      };
    case FETCH_USER_FAILURE:
      const applicationStateFailuer = {
        ...state.applicationState,
        loading: false,
        error:action.payload
      };
      const domainStateFailure = { ...state.domainState, users: [] };
      return {
        ...state,
        applicationState: applicationStateFailuer,
        domainState: domainStateFailure,
      };

    default:
      return state;
  }
};

export default userReducer