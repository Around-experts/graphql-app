import { text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { MemoryRouter } from "react-router";

import { CurrentUserFragment } from "../CurrentUserProvider/CurrentUser.fragment.generated";
import { UserMenu } from "./UserMenu";

export default {
  title: "UserMenu",
  component: UserMenu,
  decorators: [withKnobs]
};

export const Basic = () => {
  const currentUser: CurrentUserFragment = {
    __typename: "ProtectedUser",
    id: 1,
    name: text("User name", "John Dor Brenton"),
    email: text("User email", "brenton@gmail.com"),
    info: "Foo bar baz",
    isAdmin: false,
    avatar: {
      __typename: "Avatar",
      image: {
        path: "/bookshelf/users/m10.png"
      },
      color: "yellow"
    }
  };

  return (
    <MemoryRouter>
      <UserMenu onClose={() => {}} currentUser={currentUser} />
    </MemoryRouter>
  );
};
