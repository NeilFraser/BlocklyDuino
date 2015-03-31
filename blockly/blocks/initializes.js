/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview List blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.initializes');

goog.require('Blockly.Blocks');

Blockly.Blocks.array.HUE = 0;

Blockly.Blocks['initializes_setup'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.INITIALIZES_SETUP_HELPURL);
    this.setColour(Blockly.Blocks.inout.HUE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.INITIALIZES_SETUP_APPENDTEXT);
    this.appendStatementInput("CONTENT");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.INITIALIZES_SETUP_TOOLTIP);
  }
};
