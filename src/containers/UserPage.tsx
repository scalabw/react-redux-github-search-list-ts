import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router';

import { withUserData } from '../helpers/withUserData';

interface IProps {
  users: any
}

const UserPage = (props: IProps) => {
  return <>
    <br />
    {JSON.stringify(props.users)}
  </>
}
const mapStateToProps = (state: any) => ({ users: state.entities.users })
export default withUserData(withRouter(connect(mapStateToProps)(UserPage)));