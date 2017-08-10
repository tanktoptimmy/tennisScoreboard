import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories/Scoreboard');
}

configure(loadStories, module);
