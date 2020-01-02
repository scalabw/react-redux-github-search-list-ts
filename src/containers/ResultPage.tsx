import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { Card, CardHeader, Container, Row, Col } from "shards-react"
import Loader from 'react-loader-spinner'

import { withUserData } from '../helpers/withUserData';
import { IUser, IRepositorie } from '../constants/userConstants';
import UserProfile from '../components/UserProfile';
import { withUserRepositoriesData } from '../helpers/withUserRepositoriesData';
import UserRepositories from '../components/UserRepositories';

interface IProps {
  user: IUser,
  repositories: IRepositorie[]
  loading: boolean,
}

const ResultPage = (props: IProps) => {
  const { user, repositories, loading } = props;

  return <>
    {loading ?
      <Loader type="MutatingDots" color="#000000"
        height={100}
        width={100} /> : Object.keys(user).length === 0 ?
        <Card> <CardHeader>
          No User Found
          </CardHeader></Card > :
        <>
          <Container className="mt-2 BoxContainer">
            <Row>
              <Col sm="12" md="4" lg="2" >
                <UserProfile user={user} loading={loading} />
              </Col>
              <Col sm="12" md="8" lg="10">
                <UserRepositories repositories={repositories} loading={loading} />
              </Col>

            </Row>
          </Container>

        </>
    }
  </>
}
const mapStateToProps = (state: any) => ({
  user: state.entities.user,
  repositories: state.entities.repos,
  loading: state.entities.loading
})

export default withUserData(withUserRepositoriesData(withRouter(connect(mapStateToProps)(ResultPage))));