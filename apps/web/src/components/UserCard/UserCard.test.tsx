import { render } from "@testing-library/react";
import { CloudinaryContext } from "cloudinary-react";
import React from "react";

import { UserCard } from "./UserCard";
import { UserCardFragment } from "./UserCard.fragment.generated";

describe("<UserCard />", () => {
  const user: UserCardFragment = {
    name: "Bob",
    avatar: {
      __typename: "Avatar",
      image: {
        path: "/bookshelf/users/avatar.png"
      },
      color: "blue"
    }
  };

  it("renders with success", () => {
    const wrapper: React.FunctionComponent = ({ children }) => (
      <CloudinaryContext cloudName="brenton">{children}</CloudinaryContext>
    );

    const { getByText, rerender } = render(<UserCard user={user} />, {
      wrapper
    });
    expect(getByText("Bob")).toBeInTheDocument();

    rerender(<UserCard user={{ ...user, name: "John" }} />);
    expect(getByText("John")).toBeInTheDocument();
  });
});
