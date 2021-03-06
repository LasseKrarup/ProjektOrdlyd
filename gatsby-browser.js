/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "./src/css/style.css"

import "@fontsource/ropa-sans"

import React from 'react';
import {AnimatePresence} from 'framer-motion';

export const wrapPageElement = ({element}) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
);