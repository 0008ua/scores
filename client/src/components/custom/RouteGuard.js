// import React, { useEffect, useState, useCallback } from 'react';
import { Navigate } from "react-router-dom";

export default function RouteGuard({ children, redirect, canActivate}) {

  if (canActivate) {
    return children
  }
  return <Navigate to={redirect} />
}
