/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
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
 * @fileoverview Helper functions for generating Arduino blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */
'use strict';

//To support syntax defined in http://arduino.cc/en/Reference/HomePage

goog.provide('Blockly.Blocks.communication');

goog.require('Blockly.Blocks');

Blockly.Blocks.communication.HUE = 205;

Blockly.Blocks['serial_print'] = {
  helpUrl: 'http://www.arduino.cc/en/Serial/Print',
  init: function() {
    this.setColour(Blockly.Blocks.communication.HUE);
    this.appendValueInput("CONTENT", 'String')
    .appendField("Serial Print");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Prints data to the console/serial port as human-readable ASCII text.');
  }
};

Blockly.Blocks['serial_read'] = {
  init: function() {
    this.setHelpUrl('http://www.arduino.cc/en/Serial/Read');
    this.setColour(Blockly.Blocks.communication.HUE);
    this.appendDummyInput()
    .appendField("Serial Read");
    this.setOutput(true,"byte");
    this.setTooltip('the first byte of incoming serial data available (or -1 if no data is available)');
  }
};

Blockly.Blocks['serial_available'] = {
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Serial/available');
    this.setColour(Blockly.Blocks.communication.HUE);
    this.appendDummyInput()
    .appendField("Serial Available");
    this.setOutput(true, "Number");
    this.setTooltip('Get the number of bytes (characters) available for reading from the serial port.');
  }
};

Blockly.Blocks['serial_println'] = {
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Serial/Println');
    this.setColour(Blockly.Blocks.communication.HUE);
    this.appendValueInput("Val")
    .setCheck("String")
    .appendField("Serial Println");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Prints data to the serial port as human-readable ASCII text followed by a carriage return character and a newline characte.');
  }
};
