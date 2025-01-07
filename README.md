# React Router Dom v6 Catch-All Route Unexpected Behavior

This repository demonstrates a subtle bug in React Router Dom v6 related to the catch-all route (`/*`).  The catch-all route is unexpectedly triggered even when a matching route is defined.

## Problem
The issue arises when using a catch-all route (`/*`) in conjunction with other routes. The expectation is that the catch-all route should only be triggered if no other route matches the URL. However, in certain scenarios (as shown below), the catch-all route is triggered even if a route exists that should match.