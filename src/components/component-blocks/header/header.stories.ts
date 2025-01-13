import type { Meta, StoryObj } from "@storybook/react";

import Header from "./header";

const meta: Meta<typeof Header> = {
  title: "Component Blocks/Header",
  component: Header
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    data: {
      headerName: "Type out header text here",
      headerLogo: {
        url: "https://images.ctfassets.net/25lngss7m1ii/1mm64QpWdloKpqk5oNUWNG/608a01cb281a4f6526444f334e36e568/elementor-placeholder-image.webp",
        height: 70,
        width: 100
      }
    }
  }
};
