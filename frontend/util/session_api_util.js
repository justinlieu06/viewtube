export const signUp = (user) => (
  $.ajax({
    url: `/api/users`,
    type: `POST`,
    data: {user}
  })
);

export const logIn = (user) => (
  $.ajax({
    url: `/api/session`,
    type: `POST`,
    data: {user}
  })
);

export const logOut = (user) => (
  $.ajax({
    url: `/api/session`,
    type: `DELETE`
  })
);