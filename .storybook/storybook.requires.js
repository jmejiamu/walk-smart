/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from "@storybook/react-native";

global.STORIES = [
  {
    titlePrefix: "",
    directory: "./.storybook/stories",
    files: "**/*.stories.?(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:\\.storybook\\/stories(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$",
  },
];

import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-actions/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require("react-native").LogBox.ignoreLogs([
      "`clearDecorators` is deprecated and will be removed in Storybook 7.0",
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return {
    "./.storybook/stories/Button/Button.stories.tsx": require("./stories/Button/Button.stories.tsx"),
    "./.storybook/stories/EventHeader/EventHeader.stories.tsx": require("./stories/EventHeader/EventHeader.stories.tsx"),
    "./.storybook/stories/Form/Form.stories.tsx": require("./stories/Form/Form.stories.tsx"),
    "./.storybook/stories/JoinCard/JoinCard.stories.tsx": require("./stories/JoinCard/JoinCard.stories.tsx"),
    "./.storybook/stories/ListCard/ListCard.stories.tsx": require("./stories/ListCard/ListCard.stories.tsx"),
    "./.storybook/stories/Map/Map.stories.tsx": require("./stories/Map/Map.stories.tsx"),
    "./.storybook/stories/Search/Search.stories.tsx": require("./stories/Search/Search.stories.tsx"),
  };
};

configure(getStories, module, false);
