import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserRepositories } from "../actions";

export const withUserRepositoriesData = (Component: any) => {
  //TODO: add precise type here
  return (props: any) => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getUserRepositories(props.match.params.username));
    }, [dispatch, props.match.params.username]);
    return <Component {...props} />;
  };
};
