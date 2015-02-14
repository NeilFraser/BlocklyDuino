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

goog.provide('Blockly.Blocks.times');

goog.require('Blockly.Blocks');

Blockly.Blocks.times.HUE = 125;

Blockly.Blocks['delay'] = {
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/delay');
    this.setColour(Blockly.Blocks.times.HUE);
    this.appendValueInput("DELAY_TIME")
    .setCheck("Number")
    .appendField("delay");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Delay specific time');
  }
};

Blockly.Blocks['micros'] = {
  init: function() {
    this.setHelpUrl('hhttp://arduino.cc/en/Reference/Micros');
    this.setColour(Blockly.Blocks.times.HUE);
    this.appendValueInput("DELAY_TIME")
    .setCheck("Number")
    .appendField("micros");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Returns the number of microseconds since the Arduino board began running the current program. ');
  }
};

Blockly.Blocks['delayMicroseconds'] = {
  init: function() {
    this.setHelpUrl('http://arduino.cc/en/Reference/DelayMicroseconds');
    this.setColour(Blockly.Blocks.times.HUE);
    this.appendValueInput("DELAY_TIME")
    .setCheck("Number")
    .appendField("delayMicroseconds");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Pauses the program for the amount of time (in microseconds) specified as parameter.');
  }
};

Blockly.Blocks['millis'] = {
  init: function() {
    this.setHelpUrl('hhttp://arduino.cc/en/Reference/Millis');
    this.setColour(Blockly.Blocks.times.HUE);
    this.appendValueInput("DELAY_TIME")
    .setCheck("Number")
    .appendField("millis");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Returns the number of milliseconds since the Arduino board began running the current program.');
  }
};
