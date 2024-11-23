const dictionaryColor = "#0048d7";

Blockly.Blocks['dict_constructor'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("dict()");
        this.setOutput(true, null);
        this.setColour(dictionaryColor);
    }
};

Blockly.Blocks['dict_item_access'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("variable_name"), "dict_name")
            .appendField("[");
        this.appendValueInput("parameters")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("]");
        this.setOutput(true, null);
        this.setColour(dictionaryColor);
    }
};

Blockly.Blocks['dict_item_assign'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("variable_name"), "dict_name")
            .appendField("[");
        this.appendValueInput("key")
            .setCheck(null);
        this.appendDummyInput()
            .appendField("]")
            .appendField(new Blockly.FieldDropdown([["=","="], ["+=","+="], ["-=","-="]]), "op");
        this.appendValueInput("val")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(dictionaryColor);
    }
};

Blockly.Blocks['dict_items_loop'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("for")
            .appendField(new Blockly.FieldVariable("key"), "key")
            .appendField(",")
            .appendField(new Blockly.FieldVariable("value"), "value")
            .appendField("in")
            .appendField(new Blockly.FieldVariable("variable_name"), "dict_name")
            .appendField(".items():");
        this.appendStatementInput("DO")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#644A9E");
    }
}
