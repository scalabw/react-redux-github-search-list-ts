import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { LocationState } from "history";
import { withRouter } from 'react-router';
import { IRepositoryData } from '../reducers';
import { getUserProfile } from '../actions';
import { bindActionCreators, Dispatch } from 'redux';

interface IProps {
  getUserProfile: (input: string) => void,
  match: LocationState,
  users: {}
}

const UserPage = (props: IProps) => {
  const [userData, setUserData] = useState(props.match.params.username);

  useEffect(() => {
    try {
      getUserProfile(props.match.params.username).then(response => setUserData(response.data))
    } catch (error) {
      console.error(error)

    }
  }, [props.match.params.username])

  return <>
    <br />
    {JSON.stringify(userData)}
  </>
}
const mapStateToProps = (state: IRepositoryData) => ({ users: state.users })
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
  { getUserProfile: (username: string) => getUserProfile(username) }, dispatch)
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserPage));