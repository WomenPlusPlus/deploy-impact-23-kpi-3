import type { Preview } from "@storybook/react";
import {withRouter} from 'storybook-addon-react-router-v6';

const preview: Preview = {
  decorators: [withRouter],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    reactRouter: {
      reactPath: '/myroute',
    },
    customizeAntdTheme: {
      modifyVars: {
        colorPrimary: '#fecc33',
        colorWhite: '#000000',
        borderRadius: 2,
      },
    },
  },
};

export default preview;
