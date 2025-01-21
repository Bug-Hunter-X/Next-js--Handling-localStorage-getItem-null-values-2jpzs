# Next.js: Handling localStorage.getItem null values

This repository demonstrates a common error in Next.js applications when accessing `localStorage` in client-side components.  If the key does not exist in `localStorage`, `localStorage.getItem()` returns `null`, leading to a `TypeError` when trying to parse the result with `JSON.parse()`. 

The `bug.js` file shows the problematic code, while `bugSolution.js` provides a solution to gracefully handle this situation.

## Problem

The issue arises when attempting to access user data stored in `localStorage` without checking for its existence. If the user is not logged in or the key is missing, `localStorage.getItem('user')` will return `null`.  Attempting to parse this `null` value with `JSON.parse()` throws an error.

## Solution

The solution involves adding a check to ensure the value returned by `localStorage.getItem()` is not `null` before parsing it with `JSON.parse()`.  This can be achieved using optional chaining or a simple `if` statement.