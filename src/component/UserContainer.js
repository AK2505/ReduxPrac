import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../redux";

function UserContainer({ userData, fetchUsers }) {
  useEffect(() => {
    fetchUsers();
  }, []);
  return userData.applicationState.loading ? (
    <h2>Loading</h2>
  ) : userData.applicationState.error ? (
    <h2>{userData.applicationState.error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>
        {userData.domainState.users.map((user) => (
          <p>{user.name}</p>
        ))}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUser()),
  };
};
export default connect(mapStateToProps, mapDispatchtoProps)(UserContainer);
