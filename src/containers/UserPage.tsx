import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { Card, CardHeader, Container, CardBody } from "shards-react"

import { withUserData } from '../helpers/withUserData';

interface IProps {
  user: any
}

const UserPage = (props: IProps) => {
  console.log(props.user)
  const { user } = props;
  if (!user) return null
  return <>
    <Container className="w-25 mt-2">
      <Card >
        <CardHeader>
          <h1>{user.login}</h1>
        </CardHeader>

        <CardBody >
          <img src={user.avatar_url} alt="User Avatar" className="AvatarImg mb-2" />
          {user.name && <h4> Name </h4>}
          <p>{user.name}</p>
          {user.hireable && <h4> Hireable </h4>}
          <p>{user.hireable ? "Yes" : "No"}</p>

          {user.created_at && <h4> Created at </h4>}
          <p>{new Date(user.created_at).toString()}</p>
          {user.bio && <h4> Bio </h4>}
          <p>{user.bio}</p>
          {user.company && <h4> Company </h4>}
          <p>{user.company}</p>
          {user.blog && <h4> Blog </h4>}
          <a href={user.blog}>{user.blog}</a>
          {user.location && <h4> Location </h4>}
          <a href={user.location}>{user.location}</a>
          {user.public_repos && <h4> Public Repository </h4>}
          <p>{user.public_repos}</p>
          {user.public_gists && <h4> Public Ghists </h4>}
          <p>{user.public_gists}</p>
          {user.followers && <h4> Followers </h4>}
          <p>{user.followers}</p>
          {user.following && <h4> Following </h4>}
          <p>{user.following}</p>
        </CardBody>
      </Card>
    </Container>
  </>
}
const mapStateToProps = (state: any) => ({ user: state.entities.users })
export default withUserData(withRouter(connect(mapStateToProps)(UserPage)));