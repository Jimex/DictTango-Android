(function ($) {
  function Key(params) {
    if (Object.prototype.toString.call(params) == "[object Arguments]") {
      this.keyboard = params[0];
    } else {
      this.keyboard = params;
    }

    this.$key = $(`<div class="key">`);
    this.current_value = null;
  }

  Key.prototype.render = function () {
    if (this.id) {
      this.$key.attr("id", this.id);
    }
    return this.$key;
  };

  Key.prototype.setCurrentValue = function () {
    if (this.keyInfo == null) {
      console.log(`Keyinfo was not found for ${this}`);
      console.log(this);
      return;
    }
    if (this.keyboard.upperRegister()) {
      this.current_value = this.keyInfo.u ? this.keyInfo.u : this.default_value;
    } else {
      this.current_value = this.keyInfo.d ? this.keyInfo.d : this.default_value;
    }
    this.$key.text(this.current_value);
  };

  Key.prototype.setCssClass = function () {
    var _this = this;
    if (this.keyInfo.css) {
      this.$key.addClass(this.keyInfo.css);
    }
  };

  Key.prototype.setCurrentAction = function () {
    var _this = this;

    this.$key.unbind("click.accent-keyboard");
    this.$key.bind("click.accent-keyboard", function () {
      _this.keyboard.keep_focus = true;

      _this.$key.addClass('pressed');
      setTimeout(() => {
        _this.$key.removeClass('pressed');
      }, 300);
      if (typeof (_this.keyInfo.onClick) === "function") {
        _this.keyInfo.onClick(_this);
      } else {
        _this.defaultClickAction();
      }

    });
  };

  Key.prototype.defaultClickAction = function () {
    var me = this;
    this.keyboard.destroyModifications();
    if (this.keyInfo.m && Object.prototype.toString.call(this.keyInfo.m) === '[object Array]') {
      this.showModifications();
    }
    else {
      if (this.is_modificator) {
        //this.keyboard.deleteChar();
        this.keyboard.printChar(this.current_value);
      }
      else {
        this.keyboard.printChar(this.current_value);
      }

    }

    if (this.keyboard.active_shift)
      this.keyboard.toggleShift(false);
  };

  Key.prototype.showModifications = function () {
    var _this = this;

    this.keyboard.modifications = [];

    var key = new Key(_this.keyboard);
    key.is_modificator = true;
    key.keyInfo = {};
    key.keyInfo.d = _this.keyInfo.d;
    key.keyInfo.u = _this.keyInfo.u;
    _this.keyboard.modifications.push(key);

    $.each(this.keyInfo.m, function (i, modification) {
      var key = new Key(_this.keyboard);
      key.is_modificator = true;
      key.keyInfo = modification;
      _this.keyboard.modifications.push(key);
    });

    this.keyboard.showModifications(this);
  };

  Key.prototype.toggleActiveState = function () {
    var me = this;
    if (this.isActive()) {
      this.$key.addClass('active');
    } else {
      this.$key.removeClass('active');
    }
  };

  Key.prototype.isActive = function () {
    return false;
  };
  function KeyDelete() {
    Key.call(this, arguments);

    this.id = "accent-keyboard-backspace";
    this.default_value = '⌫';
  }

  KeyDelete.prototype = new Key();
  KeyDelete.prototype.constructor = KeyDelete;

  KeyDelete.prototype.defaultClickAction = function () {
    this.keyboard.deleteChar();
  };
  function KeyTab() {
    Key.call(this, arguments);

    this.id = "accent-keyboard-tab";
    this.default_value = 'tab';
  }

  KeyTab.prototype = new Key();
  KeyTab.prototype.constructor = KeyTab;

  KeyTab.prototype.defaultClickAction = function () {
    this.keyboard.hideKeyboard();
    $(":input").eq($(":input").index(this.keyboard.$current_input) + 1).focus();
  };

  function KeyCapsLock() {
    Key.call(this, arguments);

    this.id = "accent-keyboard-capslock";
    this.default_value = '⇧';
  }

  KeyCapsLock.prototype = new Key();
  KeyCapsLock.prototype.constructor = KeyCapsLock;

  KeyCapsLock.prototype.isActive = function () {
    return this.keyboard.active_caps;
  };

  KeyCapsLock.prototype.defaultClickAction = function () {
    this.keyboard.toggleCaps();
  };
  function KeyReturn() {
    Key.call(this, arguments);

    this.id = "accent-keyboard-return";
    this.default_value = '↵';
  }

  KeyReturn.prototype = new Key();
  KeyReturn.prototype.constructor = KeyReturn;

  KeyReturn.prototype.defaultClickAction = function () {
    sendWord('\n');
  };
  function KeyShift() {
    Key.call(this, arguments);

    this.id = "accent-keyboard-" + arguments[1] + "-shift";
    this.default_value = 'shift';
  }

  KeyShift.prototype = new Key();
  KeyShift.prototype.constructor = KeyShift;

  KeyShift.prototype.isActive = function () {
    return this.keyboard.active_shift;
  };

  KeyShift.prototype.defaultClickAction = function () {
    this.keyboard.toggleShift();
  };
  function KeySpace() {
    Key.call(this, arguments);
    this.id = "accent-keyboard-space";
    this.default_value = keyboardLayouts[currentKeyboardLayoutIndex];
  }

  KeySpace.prototype = new Key();
  KeySpace.prototype.constructor = KeySpace;


  function KeySwitchLayout() {
    Key.call(this, arguments);

    this.id = "accent-keyboard-switch-layout";
    this.default_value = '⇆';
  }

  KeySwitchLayout.prototype = new Key();
  KeySwitchLayout.prototype.constructor = KeySwitchLayout;

  KeySwitchLayout.prototype.defaultClickAction = function () {
    this.keyboard.switchToNextLayout();
  };


  function KeyClearText() {
    Key.call(this, arguments);

    this.id = "accent-keyboard-clear-text";
    this.default_value = '⌧';
  }

  KeyClearText.prototype = new Key();
  KeyClearText.prototype.constructor = KeyClearText;

  KeyClearText.prototype.defaultClickAction = function () {
    sendClearTextRequest();
  };


  var KEYS_COUNT = 40;

  function Keyboard(initOptions) {
    //this.$current_input = $(selector);
    this.newInstance(initOptions);
  }

  Keyboard.prototype.newInstance = function (initOptions) {
    this.defaults = {
      layout: 'accent',
      active_shift: true,
      active_caps: false,
      is_hidden: true,
      open_speed: 300,
      close_speed: 100,
      show_on_focus: true,
      hide_on_blur: true,
      trigger: undefined,
      enabled: true
    };

    this.global_options = $.extend({}, this.defaults, initOptions);
    this.options = $.extend({}, {}, this.global_options);

    this.keys = [];

    this.$keyboard = $(`<div class="keyboard">`).attr("id", "accent-keyboard");
    this.$modifications_holder = $("<div/>").addClass('accent-keyboard-modifications');
  };

  Keyboard.prototype.destory = function () {
    this.global_options = null;
    this.options = null;
    this.keys = [];
    this.$keyboard = null;
    this.$modifications_holder = null;
  };

  Keyboard.prototype.init = function (newOptions) {
    if (newOptions) {
      this.destory();
      this.newInstance(newOptions);
    }
    this.$keyboard.append(this.renderKeys());
    this.$keyboard.append(this.$modifications_holder);
    document.body.innerHTML = '';
    $("body").append(this.$keyboard);

    if (this.options.is_hidden) this.$keyboard.hide();

    this.setUpKeys();
  };

  Keyboard.prototype.switchToNextLayout = function () {
    this.switchLayout(getNextKeyboardLayoutByIndex());
  };

  Keyboard.prototype.switchLayout = function (newLayout) {
    var newOptions = this.options;
    newOptions.layout = newLayout;
    this.init(newOptions);
  };

  Keyboard.prototype.setUpKeys = function () {
    var _this = this;

    this.active_shift = this.options.active_shift;
    this.active_caps = this.options.active_caps;

    $.each(this.keys, function (i, key) {

      key.keyInfo = accentKeyboard.layouts[_this.options.layout][i];
      if (!key.keyInfo) {
        console.log(`[${i}]Invalid key info`);
      }
      key.setCurrentValue();
      key.setCurrentAction();
      key.setCssClass();
      key.toggleActiveState();
    });
  };

  Keyboard.prototype.renderKeys = function () {
    var _this = this;
    var $keys_holder = $('<div class="section">');

    for (var i = 0; i < accentKeyboard.layouts[_this.options.layout].length; i++) {
      var key;
      let keyInfo = accentKeyboard.layouts[_this.options.layout][i];
      if (keyInfo) {
        switch (keyInfo.keyType) {
          /*
          case 13:
            key = new KeyDelete(this);
            break;
          case 14:
            key = new KeyTab(this);
            break;
          */
          case "DELETE":
            key = new KeyDelete(this);
            break;
          case 'CAPS':
            key = new KeyCapsLock(this);
            break;
          case 'ENTER':
            key = new KeyReturn(this);
            break;
          case 'SWITCH_LANG':
            key = new KeySwitchLayout(this);
            break;
          case 'CLEAR_TEXT':
            key = new KeyClearText(this);
            break;
          /*
          case 41:
            key = new KeyShift(this, "left");
            break;
          case 52:
            key = new KeyShift(this, "right");
            break;
          */
          case "SPACE":
            key = new KeySpace(this);
            break;
          default:
            if (keyInfo.keyType) {
              console.log(`Invalid key type ${keyInfo.keyType}`);
            }
            else {
              key = new Key(this);
            }
            break;
        }
        key.keyInfo = keyInfo;
      }
      else {
        key = new Key(this);
      }
      this.keys.push(key);
      $keys_holder.append(key.render());
    }

    return $keys_holder;
  };

  Keyboard.prototype.setUpFor = function ($input) {
    var _this = this;

    if (this.options.show_on_focus) {
      $input.bind('focus', function () { _this.showKeyboard($input); });
    }

    if (this.options.hide_on_blur) {
      $input.bind('blur', function () {
        var VERIFY_STATE_DELAY = 500;

        // Input focus changes each time when user click on keyboard key
        // To prevent momentary keyboard collapse input state verifies with timers help
        // Any key click action set current inputs keep_focus variable to true
        clearTimeout(_this.blur_timeout);

        _this.blur_timeout = setTimeout(function () {
          if (!_this.keep_focus) { _this.hideKeyboard(); }
          else { _this.keep_focus = false; }
        }, VERIFY_STATE_DELAY);
      });
    }

    if (this.options.trigger) {
      var $trigger = $(this.options.trigger);
      $trigger.bind('click', function (e) {
        e.preventDefault();

        if (_this.isVisible) { _this.hideKeyboard(); }
        else {
          _this.showKeyboard($input);
          $input.focus();
        }
      });
    }
  };

  Keyboard.prototype.showKeyboard = function ($input) {
    if (this.options.is_hidden) {
      this.isVisible = true;
      this.$keyboard.slideDown(this.options.openSpeed);
    }
  };

  Keyboard.prototype.hideKeyboard = function () {
    if (this.options.is_hidden) {
      this.isVisible = false;
      this.$keyboard.slideUp(this.options.closeSpeed);
    }
  };

  Keyboard.prototype.inputLocalOptions = function () {
    var options = {};
    for (var key in this.defaults) {
      var input_option = this.$current_input.attr("data-accent-keyboard-" + key);
      if (input_option == "false") {
        input_option = false;
      } else if (input_option == "true") {
        input_option = true;
      }
      if (typeof input_option !== 'undefined') { options[key] = input_option; }
    }

    return options;
  };

  Keyboard.prototype.printChar = function (char) {
    sendWord(char);
  };

  Keyboard.prototype.deleteChar = function () {
    performBackspace();
    /*
    var selStart = this.$current_input[0].selectionStart;
    var selEnd = this.$current_input[0].selectionEnd;
 
    var textAreaStr = this.$current_input.val();
    var after = textAreaStr.substring(0, selStart - 1);
    var value = after + textAreaStr.substring(selEnd);
    this.$current_input.val(value).focus();
    this.$current_input[0].selectionStart = selStart - 1, this.$current_input[0].selectionEnd = selStart - 1;
    */
  };

  Keyboard.prototype.showModifications = function (caller) {
    var _this = this,
      holder_padding = parseInt(_this.$modifications_holder.css('padding'), 10),
      top, left, width;

    $.each(this.modifications, function (i, key) {
      key.$key.width(caller.$key.width());
      key.$key.height(caller.$key.height());
      //key.$key.removeClass('key')
      //key.$key.addClass('subkey')
      //console.log(`Sub Key width:${key.$key.width()}`);
      //console.log(`Sub Key height:${key.$key.height()}`);
      _this.$modifications_holder.append(key.render());
      key.setCurrentValue();
      key.setCurrentAction();
    });
    let screenWidth = window.innerWidth;

    // TODO: Remove magic numbers
    width = (caller.$key.width() * _this.modifications.length + 1) + 100;// + (_this.modifications.length * 6);
    top = caller.$key.position().top - holder_padding;
    left = caller.$key.position().left - _this.modifications.length * caller.$key.width() / 2;
    if (left < 0) {
      left = 20;
    }
    if (left + width > screenWidth) {
      left = screenWidth - width - 30;
    }
    //console.log(`Screen width:${screenWidth}`);
    //console.log(`Key width:${caller.$key.width()}`);
    //console.log(`M Holder width:${width}`);
    //console.log(`M Holder left:${left}`);
    this.$modifications_holder.one('mouseleave', function () {
      _this.destroyModifications();
    });

    this.$modifications_holder.css({
      width: width,
      top: top,
      left: left
    }).show();
  };

  Keyboard.prototype.destroyModifications = function () {
    this.$modifications_holder.empty().hide();
  };

  Keyboard.prototype.upperRegister = function () {
    return ((this.active_shift && !this.active_caps) || (!this.active_shift && this.active_caps));
  };

  Keyboard.prototype.toggleShift = function (state) {
    this.active_shift = state ? state : !this.active_shift;
    this.changeKeysState();
  };

  Keyboard.prototype.toggleCaps = function (state) {
    this.active_caps = state ? state : !this.active_caps;
    this.changeKeysState();
  };

  Keyboard.prototype.changeKeysState = function () {
    $.each(this.keys, function (_, key) {
      key.setCurrentValue();
      key.toggleActiveState();
    });
  };


  $.fn.accentKeyboard = function (options) {
    var keyboard = new Keyboard(options);
    keyboard.init();

    /*
    this.each(function () {
      keyboard.setUpFor($(this));
    });
    */
  };

})(jQuery);


var keyboardLayouts = ["Accent", "English", "French", "Spanish", "Russian"];
var currentKeyboardLayoutIndex = 0;//loadConfigItem("TangoKeyboard_KeyboardLayoutIndex", 0);

function getKeyboardLayoutByIndex(index) {
  return keyboardLayouts[index].toLowerCase();
}

function getCurrentKeyboardLayoutByIndex(index) {
  return getKeyboardLayoutByIndex(currentKeyboardLayoutIndex);
}
function getNextKeyboardLayoutByIndex(index) {
  if (currentKeyboardLayoutIndex < keyboardLayouts.length - 1)
    currentKeyboardLayoutIndex++;
  else
    currentKeyboardLayoutIndex = 0;
    
  console.log("Current index" + currentKeyboardLayoutIndex);
  saveKeyboardInex(currentKeyboardLayoutIndex);
  return getKeyboardLayoutByIndex(currentKeyboardLayoutIndex);
}

function saveKeyboardInex(index) {
  setConfigItem("TangoKeyboard_KeyboardLayoutIndex", index)
}
var accentKeyboard = accentKeyboard || { layouts: {} };

