import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserProfile } from "../actions";

export const withUserData = (Component: any) => {
  //TODO: add precise type here 
  return (props: any) => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getUserProfile(props.match.params.username));
    }, [dispatch, props.match.params.username]);
    return <Component {...props} />;
  };
};