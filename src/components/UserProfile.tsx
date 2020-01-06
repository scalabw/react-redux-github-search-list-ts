import React from "react";
import { Card, CardHeader, CardBody, CardImg } from "shards-react";
import Loader from "react-loader-spinner";

import { addZeroToOneDigit } from "../helpers/time";
import { IUser } from "../constants/userConstants";

interface IProps {
  user: IUser;
  loading: boolean;
}

const UserProfile = (props: IProps) => {
  const { user, loading } = props;
  const createdAt = new Date(user.created_at);

  return (
    <>
      {loading ? (
        <Loader type="MutatingDots" color="#000000" height={100} width={100} />
      ) : Object.keys(user).length === 0 ? (
        <Card>
          <CardHeader>No User Found</CardHeader>
        </Card>
      ) : (
        <Card className="ForceLeftItem">
          <CardHeader className="CenterItem">
            <h2>{user.login}</h2>
          </CardHeader>
          <CardImg
            src={user.avatar_url}
            alt="User Avatar"
            className="AvatarImg pr-3 pl-3 pt-2"
          />
          <CardBody>
            {user.name && <h4> Name </h4>}
            <p>{user.name}</p>
            {user.hireable && <h4> Hireable </h4>}
            <p>{user.hireable && "Yes"}</p>
            {user.created_at && <h4> Created at </h4>}
            <p>{`${addZeroToOneDigit(
              createdAt.getDate() - 1
            )}/${addZeroToOneDigit(
              createdAt.getMonth() + 1
            )}/${createdAt.getFullYear()}`}</p>
            {user.bio && <h4> Bio </h4>}
            <p>{user.bio}</p>
            {user.company && <h4> Company </h4>}
            <p>{user.company}</p>
            {user.blog && <h4> Blog </h4>}
            <a href={user.blog}>{user.blog}</a>
            {user.location && <h4> Location </h4>}
            <p>{user.location}</p>
            {<h4> Public Repository </h4>}
            <p>{user.public_repos}</p>
            {<h4> Public Ghists </h4>}
            <p>{user.public_gists}</p>
            {<h4> Followers </h4>}
            <p>{user.followers}</p>
            {<h4> Following </h4>}
            <p>{user.following}</p>
          </CardBody>
        </Card>
      )}
    </>
  );
};
export default UserProfile;
