import React from 'react'
import { configure } from '@storybook/react'

const req = require.context('../../src', true, /.story.js$/)

function loadStories() {
  req.keys().map(story => req(story))
}

configure(loadStories, module)
