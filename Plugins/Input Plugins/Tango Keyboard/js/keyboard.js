(function ($) {
    function Key(params) {
      if (Object.prototype.toString.call(params) == "[object Arguments]") {
        this.keyboard = params[0];
      } else {
        this.keyboard = params;
      }
  
      this.$key = $("<li/>");
      this.current_value = null;
    }
  
    Key.prototype.render = function () {
      if (this.id) {
        this.$key.attr("id", this.id);
      }
      if(this.keyInfo.keyType)
      {
         switch(this.keyInfo.keyType)
         {
            case "ENTER":
              console.log(this.keyInfo.keyType);
              this.$key.addClass('enter-key');
              break;
         }
      }
      return this.$key;
    };
  
    Key.prototype.setCurrentValue = function () {
      if(this.keyInfo == null)
      {
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
      if(this.keyInfo.newLineBefore)
      {
        this.$key.addClass('new-line-before');
      }
    };

    Key.prototype.setCurrentAction = function () {
      var _this = this;
  
      this.$key.unbind("click.accent-keyboard");
      this.$key.bind("click.accent-keyboard", function () {
        _this.keyboard.keep_focus = true;
  
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
      else
      {
        if (this.is_modificator) {
            //this.keyboard.deleteChar();
            this.keyboard.printChar(this.current_value);
          }
           else {
            this.keyboard.printChar(this.current_value);
          }
          me.$key.addClass('pressed');
          setTimeout(() => {
            me.$key.removeClass('pressed');
          }, 300);
      }
  
      if (this.keyboard.active_shift) this.keyboard.toggleShift(false);
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
      this.default_value = ' ';
    }
  
    KeySpace.prototype = new Key();
    KeySpace.prototype.constructor = KeySpace;
    var KEYS_COUNT = 40;
  
    function Keyboard(options) {
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
  
      this.global_options = $.extend({}, this.defaults, options);
      this.options = $.extend({}, {}, this.global_options);
  
      this.keys = [];
  
      this.$keyboard = $("<div/>").attr("id", "accent-keyboard");
      this.$modifications_holder = $("<ul/>").addClass('accent-keyboard-modifications');
      //this.$current_input = $(selector);
    }
  
    Keyboard.prototype.init = function () {
      this.$keyboard.append(this.renderKeys());
      this.$keyboard.append(this.$modifications_holder);
      $("body").append(this.$keyboard);
  
      if (this.options.is_hidden) this.$keyboard.hide();
  
      this.setUpKeys();
    };
  
    Keyboard.prototype.setUpKeys = function () {
      var _this = this;
  
      this.active_shift = this.options.active_shift;
      this.active_caps = this.options.active_caps;
  
      $.each(this.keys, function (i, key) {
  
        key.keyInfo = accentKeyboard.layouts[_this.options.layout][i];
        if(!key.keyInfo)
        {
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
      var $keys_holder = $("<ul/>");
  
      for (var i = 0; i < accentKeyboard.layouts[_this.options.layout].length; i++) {
        var key;
        let keyInfo = accentKeyboard.layouts[_this.options.layout][i];
        if(keyInfo)
        {
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
              if(keyInfo.keyType)
              {
                console.log(`Invalid key type ${keyInfo.keyType}`);
              }
              else
              {
                key = new Key(this);
              }
              break;
          }
          key.keyInfo = keyInfo;
        }
        else
        {
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
        _this.$modifications_holder.append(key.render());
        key.setCurrentValue();
        key.setCurrentAction();
      });
      let screenWidth = window.innerWidth;
      
      // TODO: Remove magic numbers
      width = (caller.$key.width() * _this.modifications.length + 1) + 100;// + (_this.modifications.length * 6);
      top = caller.$key.position().top - holder_padding;
      left = caller.$key.position().left - _this.modifications.length * caller.$key.width() / 2;
      if(left<0)
      {
         left = 20;
      }
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
  
  var accentKeyboard = accentKeyboard || { layouts: {} };
  
  accentKeyboard.layouts.accent = [
    //{ d: '`', u: '~' },
    { d: '1', u: '!' },
    { d: '2', u: '@' },
    { d: '3', u: '#' },
    { d: '4', u: '$' },
    { d: '5', u: '%' },
    { d: '6', u: '^' },
    { d: '7', u: '&' },
    { d: '8', u: '*' },
    { d: '9', u: '(' },
    { d: '0', u: ')'},
    { d: 'q', u: 'Q',newLineBefore:true},
    { d: 'w', u: 'W'},
    {
      d: 'e', u: 'E', m: [
        { d: 'è', u: 'È' }, // Grave
        { d: 'é', u: 'É' }, // Acute 
        { d: 'ê', u: 'Ê' }, // Circumflex 
        { d: 'ë', u: 'Ë' } // Umlaut 
      ]
    },
    { d: 'r', u: 'R' },
    { d: 't', u: 'T' },
    {
      d: 'y', u: 'Y', m: [
        { d: 'ý', u: 'Ý' }, // Acute 
        { d: 'ÿ', u: 'Ÿ' } // Umlaut 
      ]
    },
    {
      d: 'u', u: 'U', m: [
        { d: 'ù', u: 'Ù' }, // Grave
        { d: 'ú', u: 'Ú' }, // Acute 
        { d: 'û', u: 'Û' }, // Circumflex 
        { d: 'ü', u: 'Ü' } // Umlaut 
      ]
    },
    {
      d: 'i', u: 'I', m: [
        { d: 'ì', u: 'Ì' }, // Grave
        { d: 'í', u: 'Í' }, // Acute 
        { d: 'î', u: 'Î' }, // Circumflex 
        { d: 'ï', u: 'Ï' } // Umlaut 
      ]
    },
    {
      d: 'o', u: 'O', m: [
        { d: 'ò', u: 'Ò' }, // Grave
        { d: 'ó', u: 'Ó' }, // Acute 
        { d: 'ô', u: 'Ô' }, // Circumflex 
        { d: 'õ', u: 'Õ' }, // Tilde 
        { d: 'ö', u: 'Ö' } // Umlaut 
      ]
    },
    { d: 'p', u: 'P'},
    {
      d: 'a', u: 'A', newLineBefore:true, m: [
        { d: 'à', u: 'À' }, // Grave
        { d: 'á', u: 'Á' }, // Acute 
        { d: 'â', u: 'Â' }, // Circumflex 
        { d: 'ã', u: 'Ã' }, // Tilde 
        { d: 'ä', u: 'Ä' } // Umlaut 
      ]
    },
    { d: 's', u: 'S' },
    { d: 'd', u: 'D' },
    { d: 'f', u: 'F' },
    { d: 'g', u: 'G' },
    { d: 'h', u: 'H' },
    { d: 'j', u: 'J' },
    { d: 'k', u: 'K' },
    { d: 'l', u: 'L'},
    {keyType:"DELETE"},
    { keyType:"CAPS",newLineBefore:true}, // Caps lock //20
    { d: 'z', u: 'Z'},
    { d: 'x', u: 'X' },
    { d: 'c', u: 'C' },
    { d: 'v', u: 'V' },
    { d: 'b', u: 'B' },
    {
      d: 'n', u: 'N', m: [
        { d: 'ñ', u: 'Ñ' } // Tilde 
      ]
    },
    { d: 'm', u: 'M'},
    {keyType:"ENTER"},
    {keyType:"SPACE", newLineBefore:true},  // Space //38
     
  ];
  
  var accentKeyboard = accentKeyboard || { layouts: {} };
  
  accentKeyboard.layouts.en_US = [
    //{ d: '`', u: '~' },
    { d: '1', u: '!' },
    { d: '2', u: '@' },
    { d: '3', u: '#' },
    { d: '4', u: '$' },
    { d: '5', u: '%' },
    { d: '6', u: '^' },
    { d: '7', u: '&' },
    { d: '8', u: '*' },
    { d: '9', u: '(' },
    { d: '0', u: ')' },
    //{ d: '-', u: '_' },
    //{ d: '=', u: '+' },
    {}, // Delete
    {}, // Tab
    { d: 'q', u: 'Q' },
    { d: 'w', u: 'W' },
    { d: 'e', u: 'E' },
    { d: 'r', u: 'R' },
    { d: 't', u: 'T' },
    { d: 'y', u: 'Y' },
    { d: 'u', u: 'U' },
    { d: 'i', u: 'I' },
    { d: 'o', u: 'O' },
    { d: 'p', u: 'P' },
    //{ d: ']', u: '}' },
    //{ d: '[', u: '{' },
    //{ d: '\\', u: '|' },
    {}, // Caps lock
    { d: 'a', u: 'A' },
    { d: 's', u: 'S' },
    { d: 'd', u: 'D' },
    { d: 'f', u: 'F' },
    { d: 'g', u: 'G' },
    { d: 'h', u: 'H' },
    { d: 'j', u: 'J' },
    { d: 'k', u: 'K' },
    { d: 'l', u: 'L' },
    //{ d: ';', u: ':' },
    //{ d: '\'', u: '"' },
    {}, // Return
    {}, // Left shift
    { d: 'z', u: 'Z' },
    { d: 'x', u: 'X' },
    { d: 'c', u: 'C' },
    { d: 'v', u: 'V' },
    { d: 'b', u: 'B' },
    { d: 'n', u: 'N' },
    { d: 'm', u: 'M' },
    //{ d: ',', u: '<' },
    //{ d: '.', u: '>' },
    //{ d: '/', u: '?' },
    {}, // Right shift
    {}  // Space
  ];
  
  var accentKeyboard = accentKeyboard || { layouts: {} };
  
  accentKeyboard.layouts.ru_RU = [
    { d: 'ё', u: 'Ё' },
    { d: '1', u: '!' },
    { d: '2', u: '\'' },
    { d: '3', u: '№' },
    { d: '4', u: '%' },
    { d: '5', u: ':' },
    { d: '6', u: ',' },
    { d: '7', u: '.' },
    { d: '8', u: ';' },
    { d: '9', u: '(' },
    { d: '0', u: ')' },
   // { d: '-', u: '_' },
    //{ d: '=', u: '+' },
    {}, // Delete
    {}, // Tab
    { d: 'й', u: 'Й' },
    { d: 'ц', u: 'Ц' },
    { d: 'у', u: 'У' },
    { d: 'к', u: 'К' },
    { d: 'е', u: 'Е' },
    { d: 'н', u: 'Н' },
    { d: 'г', u: 'Г' },
    { d: 'ш', u: 'Ш' },
    { d: 'щ', u: 'Щ' },
    { d: 'з', u: 'З' },
    { d: 'х', u: 'Х' },
    { d: 'ъ', u: 'Ъ' },
    //{ d: '|', u: '\\' },
    {}, // Caps Lock
    { d: 'ф', u: 'Ф' },
    { d: 'ы', u: 'Ы' },
    { d: 'в', u: 'В' },
    { d: 'а', u: 'А' },
    { d: 'п', u: 'П' },
    { d: 'р', u: 'Р' },
    { d: 'о', u: 'О' },
    { d: 'л', u: 'Л' },
    { d: 'д', u: 'Д' },
    { d: 'ж', u: 'Ж' },
    { d: 'э', u: 'Э' },
    {}, // Return
    {}, // Left Shift
    { d: 'я', u: 'Я' },
    { d: 'ч', u: 'Ч' },
    { d: 'с', u: 'С' },
    { d: 'м', u: 'М' },
    { d: 'и', u: 'И' },
    { d: 'т', u: 'Т' },
    { d: 'ь', u: 'Ь' },
    { d: 'б', u: 'Б' },
    { d: 'ю', u: 'Ю' },
    //{ d: '.', u: ',' },
    {}, // Right Shift
    {} // Space
  ];
  
  var accentKeyboard = accentKeyboard || { layouts: {} };
  
  accentKeyboard.layouts.es_ES = [
    //{ d: '<', u: '>' },
    { d: '1', u: '¡' },
    { d: '2', u: '!' },
    { d: '3', u: '#' },
    { d: '4', u: '$' },
    { d: '5', u: '%' },
    { d: '6', u: '/' },
    { d: '7', u: '&' },
    { d: '8', u: '*' },
    { d: '9', u: '(' },
    { d: '0', u: ')' , l:true},
    //{ d: '-', u: '_' },
    //{ d: '=', u: '+' },
    {}, // Delete
    {}, // Tab
    { d: 'q', u: 'Q' },
    { d: 'w', u: 'W' },
    {
      d: 'e', u: 'E', m: [
        { d: 'e', u: 'E' },
        { d: 'é', u: 'É' }
      ]
    },
    { d: 'r', u: 'R' },
    { d: 't', u: 'T' },
    { d: 'y', u: 'Y' },
    {
      d: 'u', u: 'U', m: [
        { d: 'u', u: 'U' },
        { d: 'ú', u: 'Ú' },
        { d: 'ü', u: 'Ü' }
      ]
    },
    {
      d: 'i', u: 'I', m: [
        { d: 'i', u: 'I' },
        { d: 'í', u: 'Í' }
      ]
    },
    {
      d: 'o', u: 'O', m: [
        { d: 'o', u: 'O' },
        { d: 'ó', u: 'Ó' }
      ]
    },
    { d: 'p', u: 'P' , l:true},
    //{ d: '´', u: 'º' },
    //{ d: '`', u: '¨' },
    //{ d: '\'', u: '"' },
    {}, // Caps lock
    {
      d: 'a', u: 'A', m: [
        { d: 'a', u: 'A' },
        { d: 'á', u: 'Á' }
      ]
    },
    { d: 's', u: 'S' },
    { d: 'd', u: 'D' },
    { d: 'f', u: 'F' },
    { d: 'g', u: 'G' },
    { d: 'h', u: 'H' },
    { d: 'j', u: 'J' },
    { d: 'k', u: 'K' },
    { d: 'l', u: 'L' },
    { d: 'ñ', u: 'Ñ' },
    //{ d: ';', u: ':' },
    {}, // Return
    {}, // Left shift
    { d: 'z', u: 'Z' },
    { d: 'x', u: 'X' },
    { d: 'c', u: 'C' },
    { d: 'v', u: 'V' },
    { d: 'b', u: 'B' },
    { d: 'n', u: 'N' },
    { d: 'm', u: 'M' },
    //{ d: ',', u: '¿' },
    //{ d: '.', u: '?' },
    { d: 'ç', u: 'Ç' },
    {}, // Right shift
    {}  // Space
  ];
  
  var accentKeyboard = accentKeyboard || { layouts: {} };
  
  accentKeyboard.layouts.pt_PT = [
    //{ d: '\/', u: '|' },
    { d: '1', u: '!' },
    { d: '2', u: '"' },
    { d: '3', u: '#' },
    { d: '4', u: '$' },
    { d: '5', u: '%' },
    { d: '6', u: '&' },
    { d: '7', u: '/' },
    { d: '8', u: '(' },
    { d: '9', u: ')' },
    { d: '0', u: '=', l:true },
    //{ d: '-', u: '?' },
    //{ d: '~', u: '^' },
    {}, // Delete
    {}, // Tab
    { d: 'q', u: 'Q' },
    { d: 'w', u: 'W' },
    {
      d: 'e', u: 'E', m: [
        { d: 'e', u: 'E' },
        { d: 'é', u: 'É' },
        { d: 'ê', u: 'Ê' }
      ]
    },
    { d: 'r', u: 'R' },
    { d: 't', u: 'T' },
    { d: 'y', u: 'Y' },
    {
      d: 'u', u: 'U', m: [
        { d: 'u', u: 'U' },
        { d: 'ú', u: 'Ú' }
      ]
    },
    {
      d: 'i', u: 'I', m: [
        { d: 'i', u: 'I' },
        { d: 'í', u: 'Í' }
      ]
    },
    {
      d: 'o', u: 'O', m: [
        { d: 'o', u: 'O' },
        { d: 'ó', u: 'Ó' },
        { d: 'õ', u: 'Õ' },
        { d: 'ô', u: 'Ô' }
      ]
    },
    { d: 'p', u: 'P' , l:true},
    //{ d: '´', u: 'º' },
    //{ d: '`', u: '¨' },
    //{ d: '\'', u: '"' },
    {}, // Caps lock
    {
      d: 'a', u: 'A', m: [
        { d: 'a', u: 'A' },
        { d: 'á', u: 'Á' },
        { d: 'à', u: 'À' },
        { d: 'ã', u: 'Ã' },
        { d: 'â', u: 'Â' }
      ]
    },
    { d: 's', u: 'S' },
    { d: 'd', u: 'D' },
    { d: 'f', u: 'F' },
    { d: 'g', u: 'G' },
    { d: 'h', u: 'H' },
    { d: 'j', u: 'J' },
    { d: 'k', u: 'K' },
    { d: 'l', u: 'L' },
    { d: 'ñ', u: 'Ñ' , l:true},
    //{ d: ';', u: ':' },
    {}, // Return
    {}, // Left shift
    { d: 'z', u: 'Z' },
    { d: 'x', u: 'X' },
    {
      d: 'c', u: 'C', m: [
        { d: 'c', u: 'C' },
        { d: 'ç', u: 'Ç' }
      ]
    },
    { d: 'v', u: 'V' },
    { d: 'b', u: 'B' },
    { d: 'n', u: 'N' },
    { d: 'm', u: 'M' },
    //{ d: ',', u: '¿' },
    //{ d: '.', u: '?' },
    { d: 'ç', u: 'Ç' },
    {}, // Right shift
    {}  // Space
  ];
  
  var accentKeyboard = accentKeyboard || { layouts: {} };
  
  accentKeyboard.layouts.it_IT = [
    //{ d: '\\', u: '|' },
    { d: '1', u: '!' },
    { d: '2', u: '"' },
    { d: '3', u: '£' },
    { d: '4', u: '$' },
    { d: '5', u: '%' },
    { d: '6', u: '&' },
    { d: '7', u: '/' },
    { d: '8', u: '(' },
    { d: '9', u: ')' },
    { d: '0', u: '=' },
    //{ d: '\'', u: '?' },
    { d: 'ì', u: '^' },
    {}, // Delete
    {}, // Tab
    { d: 'q', u: 'Q' },
    { d: 'w', u: 'W' },
    { d: 'e', u: 'E' },
    { d: 'r', u: 'R' },
    { d: 't', u: 'T' },
    { d: 'y', u: 'Y' },
    { d: 'u', u: 'U' },
    { d: 'i', u: 'I' },
    { d: 'o', u: 'O' },
    { d: 'p', u: 'P' },
    {
      d: 'e', u: 'é', m: [
        { d: 'e', u: 'é' },
        { d: '[', u: '{' }
      ]
    },
    {
      d: '+', u: '*', m: [
        { d: '+', u: '*' },
        { d: ']', u: '}' }
      ]
    },
    {}, // Caps lock
    { d: 'a', u: 'A' },
    { d: 's', u: 'S' },
    { d: 'd', u: 'D' },
    { d: 'f', u: 'F' },
    { d: 'g', u: 'G' },
    { d: 'h', u: 'H' },
    { d: 'j', u: 'J' },
    { d: 'k', u: 'K' },
    { d: 'l', u: 'L' },
    {
      d: 'ò', u: 'ç', m: [
        { d: 'ò', u: 'ç' },
        { d: '@', u: 'Ç' }
      ]
    },
    {
      d: 'à', u: '°', m: [
        { d: 'à', u: '°' },
        { d: '#', u: '∞' }
      ]
    },
    { d: 'ù', u: '§' },
    {}, // Return
    {}, // Left shift
    { d: '<', u: '>' },
    { d: 'z', u: 'Z' },
    { d: 'x', u: 'X' },
    { d: 'c', u: 'C' },
    { d: 'v', u: 'V' },
    { d: 'b', u: 'B' },
    { d: 'n', u: 'N' },
    { d: 'm', u: 'M' },
    //{ d: ',', u: ';' },
    //{ d: '.', u: ':' },
    //{ d: '-', u: '_' },
    {}, // Right shift
    {}  // Space
  ];
  
  var accentKeyboard = accentKeyboard || { layouts: {} };
  
  accentKeyboard.layouts.fr_FR = [
    //{ d: '\/', u: '|' },
    //{ d: '1', u: '&' },
    {
      d: '2', u: 'é', m: [
        { d: '2', u: 'é' },
        { d: '~', u: 'É' }
      ]
    },
    {
      d: '3', u: '#', m: [
        { d: '3', u: '#' },
        { d: '"', u: '#' }
      ]
    },
    {
      d: '4', u: '{', m: [
        { d: '4', u: '{' },
        { d: '\'', u: '{' }
      ]
    },
    {
      d: '5', u: '(', m: [
        { d: '5', u: '(' },
        { d: '[', u: '(' }
      ]
    },
    {
      d: '6', u: '-', m: [
        { d: '6', u: '-' },
        { d: '|', u: '-' }
      ]
    },
    {
      d: '7', u: 'è', m: [
        { d: '7', u: 'è' },
        { d: '`', u: 'è' }
      ]
    },
    {
      d: '8', u: '_', m: [
        { d: '8', u: '_' },
        { d: '\/', u: '_' }
      ]
    },
    {
      d: '9', u: '', m: [
        { d: '9', u: 'ç' },
        { d: '^', u: 'Ç' }
      ]
    },
    {
      d: '0', u: 'à', m: [
        { d: '0', u: 'à' },
        { d: '@', u: 'À' }
      ]
    },
    /*
    {
      d: '°', u: ')', m: [
        { d: '°', u: ')' },
        { d: ']', u: ')' }
      ]
    },
    {
      d: '+', u: '=', m: [
        { d: '+', u: '=' },
        { d: '}', u: '=' }
      ]
    },
    */
    {}, // Delete
    {}, // Tab
    { d: 'q', u: 'Q' },
    { d: 'w', u: 'W' },
    {
      d: 'e', u: 'E', m: [
        { d: 'e', u: 'E' },
        { d: 'é', u: 'É' },
        { d: 'ê', u: 'Ê' }
      ]
    },
    { d: 'r', u: 'R' },
    { d: 't', u: 'T' },
    { d: 'y', u: 'Y' },
    {
      d: 'u', u: 'U', m: [
        { d: 'u', u: 'U' },
        { d: 'ú', u: 'Ú' },
        { d: 'ü', u: 'Ü' }
      ]
    },
    {
      d: 'i', u: 'I', m: [
        { d: 'i', u: 'I' },
        { d: 'í', u: 'Í' }
      ]
    },
    {
      d: 'o', u: 'O', m: [
        { d: 'o', u: 'O' },
        { d: 'ó', u: 'Ó' },
        { d: 'õ', u: 'Õ' },
        { d: 'ô', u: 'Ô' }
      ]
    },
    { d: 'p', u: 'P' },
    //{ d: '^', u: 'º' },
    //{ d: '`', u: '¨' },
    //{ d: '\'', u: '"' },
    {}, // Caps lock
    {
      d: 'a', u: 'A', m: [
        { d: 'a', u: 'A' },
        { d: 'á', u: 'Á' },
        { d: 'à', u: 'À' },
        { d: 'ã', u: 'Ã' },
        { d: 'â', u: 'Â' }
      ]
    },
    { d: 's', u: 'S' },
    { d: 'd', u: 'D' },
    { d: 'f', u: 'F' },
    { d: 'g', u: 'G' },
    { d: 'h', u: 'H' },
    { d: 'j', u: 'J' },
    { d: 'k', u: 'K' },
    { d: 'l', u: 'L' },
    { d: 'ñ', u: 'Ñ' },
    { d: ';', u: ':' },
    {}, // Return
    {}, // Left shift
    { d: 'z', u: 'Z' },
    { d: 'x', u: 'X' },
    {
      d: 'c', u: 'C', m: [
        { d: 'c', u: 'C' },
        { d: 'ç', u: 'Ç' }
      ]
    },
    { d: 'v', u: 'V' },
    { d: 'b', u: 'B' },
    { d: 'n', u: 'N' },
    { d: 'm', u: 'M' },
    { d: ',', u: '¿' },
    { d: '.', u: '?' },
    { d: 'ç', u: 'Ç' },
    {}, // Right shift
    {}  // Space
  ];
  
  