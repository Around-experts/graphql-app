import { CloudinaryContext } from "cloudinary-react";
import React from "react";

export const decorators = [
  (Story) => (
    <CloudinaryContext cloudName="bren">
      <Story />
    </CloudinaryContext>
  )
];
