import React from 'react';
import { Card, CardHeader, CardBody } from "shards-react"
import Loader from 'react-loader-spinner'

import { IRepositorie } from '../constants/userConstants';

interface IProps {
  repositories: IRepositorie[],
  loading: boolean
}

const UserRepositories = (props: IProps) => {
  const { repositories, loading } = props;

  console.log(repositories)
  return <>
    {loading ?
      <Loader type="MutatingDots" color="#000000"
        height={100}
        width={100} /> : Object.keys(repositories).length === 0 || repositories.length === 0 ?
        <Card> <CardHeader>
          No Public Repositories Found
          </CardHeader></Card > :
        <Card>
          <CardBody>
            {repositories.map((respository: IRepositorie, index: number) =>
              <Card key={respository.id} className="mt-2">
                <CardHeader>
                  <h2>{respository.name}</h2>
                </CardHeader>
                <CardBody>
                  {respository.description && <h5> Description </h5>}
                  <p>{respository.description}</p>
                </CardBody>
              </Card>)}
          </CardBody>
        </Card>
    }
  </>
}
export default UserRepositories;