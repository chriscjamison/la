/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Bootstrap\'s JavaScript requires jQuery')
}

+function (jq) {
  'use strict';
  var version = jq.fn.jquery.split(' ')[0].split('.')
//  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 2)) {
//    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3')
//  }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.6
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function (jq) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  jq.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var jqel = this
    jq(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) jq(jqel).trigger(jq.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  jq(function () {
    jq.support.transition = transitionEnd()

    if (!jq.support.transition) return

    jq.event.special.bsTransitionEnd = {
      bindType: jq.support.transition.end,
      delegateType: jq.support.transition.end,
      handle: function (e) {
        if (jq(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.6
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function (jq) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    jq(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.6'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var jqthis    = jq(this)
    var selector = jqthis.attr('data-target')

    if (!selector) {
      selector = jqthis.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*jq)/, '') // strip for ie7
    }

    var jqparent = jq(selector)

    if (e) e.preventDefault()

    if (!jqparent.length) {
      jqparent = jqthis.closest('.alert')
    }

    jqparent.trigger(e = jq.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    jqparent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      jqparent.detach().trigger('closed.bs.alert').remove()
    }

    jq.support.transition && jqparent.hasClass('fade') ?
      jqparent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var jqthis = jq(this)
      var data  = jqthis.data('bs.alert')

      if (!data) jqthis.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call(jqthis)
    })
  }

  var old = jq.fn.alert

  jq.fn.alert             = Plugin
  jq.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  jq.fn.alert.noConflict = function () {
    jq.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

//  jq(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.6
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function (jq) {
  'use strict';

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.jqelement  = jq(element)
    this.options   = jq.extend({}, Button.DEFAULTS, options)
    this.isLoading = false
  }

  Button.VERSION  = '3.3.6'

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var jqel  = this.jqelement
    var val  = jqel.is('input') ? 'val' : 'html'
    var data = jqel.data()

    state += 'Text'

    if (data.resetText == null) jqel.data('resetText', jqel[val]())

    // push to event loop to allow forms to submit
    setTimeout(jq.proxy(function () {
      jqel[val](data[state] == null ? this.options[state] : data[state])

      if (state == 'loadingText') {
        this.isLoading = true
        jqel.addClass(d).attr(d, d)
      } else if (this.isLoading) {
        this.isLoading = false
        jqel.removeClass(d).removeAttr(d)
      }
    }, this), 0)
  }

  Button.prototype.toggle = function () {
    var changed = true
    var jqparent = this.jqelement.closest('[data-toggle="buttons"]')

    if (jqparent.length) {
      var jqinput = this.jqelement.find('input')
      if (jqinput.prop('type') == 'radio') {
        if (jqinput.prop('checked')) changed = false
        jqparent.find('.active').removeClass('active')
        this.jqelement.addClass('active')
      } else if (jqinput.prop('type') == 'checkbox') {
        if ((jqinput.prop('checked')) !== this.jqelement.hasClass('active')) changed = false
        this.jqelement.toggleClass('active')
      }
      jqinput.prop('checked', this.jqelement.hasClass('active'))
      if (changed) jqinput.trigger('change')
    } else {
      this.jqelement.attr('aria-pressed', !this.jqelement.hasClass('active'))
      this.jqelement.toggleClass('active')
    }
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  function Plugin(option) {
    return this.each(function () {
      var jqthis   = jq(this)
      var data    = jqthis.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) jqthis.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  var old = jq.fn.button

  jq.fn.button             = Plugin
  jq.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  jq.fn.button.noConflict = function () {
    jq.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  jq(document)
    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      var jqbtn = jq(e.target)
      if (!jqbtn.hasClass('btn')) jqbtn = jqbtn.closest('.btn')
      Plugin.call(jqbtn, 'toggle')
      if (!(jq(e.target).is('input[type="radio"]') || jq(e.target).is('input[type="checkbox"]'))) e.preventDefault()
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
      jq(e.target).closest('.btn').toggleClass('focus', /^focus(in)?jq/.test(e.type))
    })

}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.6
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function (jq) {
  'use strict';

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.jqelement    = jq(element)
    this.jqindicators = this.jqelement.find('.carousel-indicators')
    this.options     = options
    this.paused      = null
    this.sliding     = null
    this.interval    = null
    this.jqactive     = null
    this.jqitems      = null

    this.options.keyboard && this.jqelement.on('keydown.bs.carousel', jq.proxy(this.keydown, this))

    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.jqelement
      .on('mouseenter.bs.carousel', jq.proxy(this.pause, this))
      .on('mouseleave.bs.carousel', jq.proxy(this.cycle, this))
  }

  Carousel.VERSION  = '3.3.6'

  Carousel.TRANSITION_DURATION = 600

  Carousel.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: true,
    keyboard: true
  }

  Carousel.prototype.keydown = function (e) {
    if (/input|textarea/i.test(e.target.tagName)) return
    switch (e.which) {
      case 37: this.prev(); break
      case 39: this.next(); break
      default: return
    }

    e.preventDefault()
  }

  Carousel.prototype.cycle = function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval(jq.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getItemIndex = function (item) {
    this.jqitems = item.parent().children('.item')
    return this.jqitems.index(item || this.jqactive)
  }

  Carousel.prototype.getItemForDirection = function (direction, active) {
    var activeIndex = this.getItemIndex(active)
    var willWrap = (direction == 'prev' && activeIndex === 0)
                || (direction == 'next' && activeIndex == (this.jqitems.length - 1))
    if (willWrap && !this.options.wrap) return active
    var delta = direction == 'prev' ? -1 : 1
    var itemIndex = (activeIndex + delta) % this.jqitems.length
    return this.jqitems.eq(itemIndex)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getItemIndex(this.jqactive = this.jqelement.find('.item.active'))

    if (pos > (this.jqitems.length - 1) || pos < 0) return

    if (this.sliding)       return this.jqelement.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', this.jqitems.eq(pos))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.jqelement.find('.next, .prev').length && jq.support.transition) {
      this.jqelement.trigger(jq.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var jqactive   = this.jqelement.find('.item.active')
    var jqnext     = next || this.getItemForDirection(type, jqactive)
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var that      = this

    if (jqnext.hasClass('active')) return (this.sliding = false)

    var relatedTarget = jqnext[0]
    var slideEvent = jq.Event('slide.bs.carousel', {
      relatedTarget: relatedTarget,
      direction: direction
    })
    this.jqelement.trigger(slideEvent)
    if (slideEvent.isDefaultPrevented()) return

    this.sliding = true

    isCycling && this.pause()

    if (this.jqindicators.length) {
      this.jqindicators.find('.active').removeClass('active')
      var jqnextIndicator = jq(this.jqindicators.children()[this.getItemIndex(jqnext)])
      jqnextIndicator && jqnextIndicator.addClass('active')
    }

    var slidEvent = jq.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
    if (jq.support.transition && this.jqelement.hasClass('slide')) {
      jqnext.addClass(type)
      jqnext[0].offsetWidth // force reflow
      jqactive.addClass(direction)
      jqnext.addClass(direction)
      jqactive
        .one('bsTransitionEnd', function () {
          jqnext.removeClass([type, direction].join(' ')).addClass('active')
          jqactive.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () {
            that.jqelement.trigger(slidEvent)
          }, 0)
        })
        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
    } else {
      jqactive.removeClass('active')
      jqnext.addClass('active')
      this.sliding = false
      this.jqelement.trigger(slidEvent)
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var jqthis   = jq(this)
      var data    = jqthis.data('bs.carousel')
      var options = jq.extend({}, Carousel.DEFAULTS, jqthis.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) jqthis.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  var old = jq.fn.carousel

  jq.fn.carousel             = Plugin
  jq.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  jq.fn.carousel.noConflict = function () {
    jq.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  var clickHandler = function (e) {
    var href
    var jqthis   = jq(this)
    var jqtarget = jq(jqthis.attr('data-target') || (href = jqthis.attr('href')) && href.replace(/.*(?=#[^\s]+jq)/, '')) // strip for ie7
    if (!jqtarget.hasClass('carousel')) return
    var options = jq.extend({}, jqtarget.data(), jqthis.data())
    var slideIndex = jqthis.attr('data-slide-to')
    if (slideIndex) options.interval = false

    Plugin.call(jqtarget, options)

    if (slideIndex) {
      jqtarget.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  }

  jq(document)
    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)

  jq(window).on('load', function () {
    jq('[data-ride="carousel"]').each(function () {
      var jqcarousel = jq(this)
      Plugin.call(jqcarousel, jqcarousel.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.6
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function (jq) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.jqelement      = jq(element)
    this.options       = jq.extend({}, Collapse.DEFAULTS, options)
    this.jqtrigger      = jq('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.jqparent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.jqelement, this.jqtrigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.6'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.jqelement.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.jqelement.hasClass('in')) return

    var activesData
    var actives = this.jqparent && this.jqparent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = jq.Event('show.bs.collapse')
    this.jqelement.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.jqelement
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.jqtrigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.jqelement
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.jqelement
        .trigger('shown.bs.collapse')
    }

    if (!jq.support.transition) return complete.call(this)

    var scrollSize = jq.camelCase(['scroll', dimension].join('-'))

    this.jqelement
      .one('bsTransitionEnd', jq.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.jqelement[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.jqelement.hasClass('in')) return

    var startEvent = jq.Event('hide.bs.collapse')
    this.jqelement.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.jqelement[dimension](this.jqelement[dimension]())[0].offsetHeight

    this.jqelement
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.jqtrigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.jqelement
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!jq.support.transition) return complete.call(this)

    this.jqelement
      [dimension](0)
      .one('bsTransitionEnd', jq.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.jqelement.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return jq(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each(jq.proxy(function (i, element) {
        var jqelement = jq(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger(jqelement), jqelement)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function (jqelement, jqtrigger) {
    var isOpen = jqelement.hasClass('in')

    jqelement.attr('aria-expanded', isOpen)
    jqtrigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger(jqtrigger) {
    var href
    var target = jqtrigger.attr('data-target')
      || (href = jqtrigger.attr('href')) && href.replace(/.*(?=#[^\s]+jq)/, '') // strip for ie7

    return jq(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var jqthis   = jq(this)
      var data    = jqthis.data('bs.collapse')
      var options = jq.extend({}, Collapse.DEFAULTS, jqthis.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) jqthis.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = jq.fn.collapse

  jq.fn.collapse             = Plugin
  jq.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  jq.fn.collapse.noConflict = function () {
    jq.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  jq(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var jqthis   = jq(this)

    if (!jqthis.attr('data-target')) e.preventDefault()

    var jqtarget = getTargetFromTrigger(jqthis)
    var data    = jqtarget.data('bs.collapse')
    var option  = data ? 'toggle' : jqthis.data()

    Plugin.call(jqtarget, option)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.6
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function (jq) {
  'use strict';

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle="dropdown"]'
  var Dropdown = function (element) {
    jq(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.VERSION = '3.3.6'

  function getParent(jqthis) {
    var selector = jqthis.attr('data-target')

    if (!selector) {
      selector = jqthis.attr('href')
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*jq)/, '') // strip for ie7
    }

    var jqparent = selector && jq(selector)

    return jqparent && jqparent.length ? jqparent : jqthis.parent()
  }

  function clearMenus(e) {
    if (e && e.which === 3) return
    jq(backdrop).remove()
    jq(toggle).each(function () {
      var jqthis         = jq(this)
      var jqparent       = getParent(jqthis)
      var relatedTarget = { relatedTarget: this }

      if (!jqparent.hasClass('open')) return

      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && jq.contains(jqparent[0], e.target)) return

      jqparent.trigger(e = jq.Event('hide.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      jqthis.attr('aria-expanded', 'false')
      jqparent.removeClass('open').trigger(jq.Event('hidden.bs.dropdown', relatedTarget))
    })
  }

  Dropdown.prototype.toggle = function (e) {
    var jqthis = jq(this)

    if (jqthis.is('.disabled, :disabled')) return

    var jqparent  = getParent(jqthis)
    var isActive = jqparent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !jqparent.closest('.navbar-nav').length) {
        // if mobile we use a backdrop because click events don't delegate
        jq(document.createElement('div'))
          .addClass('dropdown-backdrop')
          .insertAfter(jq(this))
          .on('click', clearMenus)
      }

      var relatedTarget = { relatedTarget: this }
      jqparent.trigger(e = jq.Event('show.bs.dropdown', relatedTarget))

      if (e.isDefaultPrevented()) return

      jqthis
        .trigger('focus')
        .attr('aria-expanded', 'true')

      jqparent
        .toggleClass('open')
        .trigger(jq.Event('shown.bs.dropdown', relatedTarget))
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return

    var jqthis = jq(this)

    e.preventDefault()
    e.stopPropagation()

    if (jqthis.is('.disabled, :disabled')) return

    var jqparent  = getParent(jqthis)
    var isActive = jqparent.hasClass('open')

    if (!isActive && e.which != 27 || isActive && e.which == 27) {
      if (e.which == 27) jqparent.find(toggle).trigger('focus')
      return jqthis.trigger('click')
    }

    var desc = ' li:not(.disabled):visible a'
    var jqitems = jqparent.find('.dropdown-menu' + desc)

    if (!jqitems.length) return

    var index = jqitems.index(e.target)

    if (e.which == 38 && index > 0)                 index--         // up
    if (e.which == 40 && index < jqitems.length - 1) index++         // down
    if (!~index)                                    index = 0

    jqitems.eq(index).trigger('focus')
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var jqthis = jq(this)
      var data  = jqthis.data('bs.dropdown')

      if (!data) jqthis.data('bs.dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call(jqthis)
    })
  }

  var old = jq.fn.dropdown

  jq.fn.dropdown             = Plugin
  jq.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  jq.fn.dropdown.noConflict = function () {
    jq.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  jq(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)

}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.6
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function (jq) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.jqbody               = jq(document.body)
    this.jqelement            = jq(element)
    this.jqdialog             = this.jqelement.find('.modal-dialog')
    this.jqbackdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.jqelement
        .find('.modal-content')
        .load(this.options.remote, jq.proxy(function () {
          this.jqelement.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.6'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = jq.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.jqelement.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.jqbody.addClass('modal-open')

    this.escape()
    this.resize()

    this.jqelement.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', jq.proxy(this.hide, this))

    this.jqdialog.on('mousedown.dismiss.bs.modal', function () {
      that.jqelement.one('mouseup.dismiss.bs.modal', function (e) {
        if (jq(e.target).is(that.jqelement)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = jq.support.transition && that.jqelement.hasClass('fade')

      if (!that.jqelement.parent().length) {
        that.jqelement.appendTo(that.jqbody) // don't move modals dom position
      }

      that.jqelement
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.jqelement[0].offsetWidth // force reflow
      }

      that.jqelement.addClass('in')

      that.enforceFocus()

      var e = jq.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.jqdialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.jqelement.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.jqelement.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = jq.Event('hide.bs.modal')

    this.jqelement.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    jq(document).off('focusin.bs.modal')

    this.jqelement
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.jqdialog.off('mousedown.dismiss.bs.modal')

    jq.support.transition && this.jqelement.hasClass('fade') ?
      this.jqelement
        .one('bsTransitionEnd', jq.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    jq(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', jq.proxy(function (e) {
        if (this.jqelement[0] !== e.target && !this.jqelement.has(e.target).length) {
          this.jqelement.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.jqelement.on('keydown.dismiss.bs.modal', jq.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.jqelement.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      jq(window).on('resize.bs.modal', jq.proxy(this.handleUpdate, this))
    } else {
      jq(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.jqelement.hide()
    this.backdrop(function () {
      that.jqbody.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.jqelement.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.jqbackdrop && this.jqbackdrop.remove()
    this.jqbackdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.jqelement.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = jq.support.transition && animate

      this.jqbackdrop = jq(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.jqbody)

      this.jqelement.on('click.dismiss.bs.modal', jq.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.jqelement[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.jqbackdrop[0].offsetWidth // force reflow

      this.jqbackdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.jqbackdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.jqbackdrop) {
      this.jqbackdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      jq.support.transition && this.jqelement.hasClass('fade') ?
        this.jqbackdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.jqelement[0].scrollHeight > document.documentElement.clientHeight

    this.jqelement.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.jqelement.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.jqbody.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.jqbody.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.jqbody.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.jqbody.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.jqbody[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var jqthis   = jq(this)
      var data    = jqthis.data('bs.modal')
      var options = jq.extend({}, Modal.DEFAULTS, jqthis.data(), typeof option == 'object' && option)

      if (!data) jqthis.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = jq.fn.modal

  jq.fn.modal             = Plugin
  jq.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  jq.fn.modal.noConflict = function () {
    jq.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  jq(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var jqthis   = jq(this)
    var href    = jqthis.attr('href')
    var jqtarget = jq(jqthis.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+jq)/, ''))) // strip for ie7
    var option  = jqtarget.data('bs.modal') ? 'toggle' : jq.extend({ remote: !/#/.test(href) && href }, jqtarget.data(), jqthis.data())

    if (jqthis.is('a')) e.preventDefault()

    jqtarget.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      jqtarget.one('hidden.bs.modal', function () {
        jqthis.is(':visible') && jqthis.trigger('focus')
      })
    })
    Plugin.call(jqtarget, option, this)
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.6
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function (jq) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.jqelement   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.6'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.jqelement  = jq(element)
    this.options   = this.getOptions(options)
    this.jqviewport = this.options.viewport && jq(jq.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.jqelement) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.jqelement[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.jqelement.on('click.' + this.type, this.options.selector, jq.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.jqelement.on(eventIn  + '.' + this.type, this.options.selector, jq.proxy(this.enter, this))
        this.jqelement.on(eventOut + '.' + this.type, this.options.selector, jq.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = jq.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = jq.extend({}, this.getDefaults(), this.jqelement.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && jq.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : jq(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      jq(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof jq.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : jq(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      jq(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof jq.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = jq.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.jqelement.trigger(e)

      var inDom = jq.contains(this.jqelement[0].ownerDocument.documentElement, this.jqelement[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var jqtip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      jqtip.attr('id', tipId)
      this.jqelement.attr('aria-describedby', tipId)

      if (this.options.animation) jqtip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, jqtip[0], this.jqelement[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      jqtip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? jqtip.appendTo(this.options.container) : jqtip.insertAfter(this.jqelement)
      this.jqelement.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = jqtip[0].offsetWidth
      var actualHeight = jqtip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.jqviewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        jqtip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.jqelement.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      jq.support.transition && this.jqtip.hasClass('fade') ?
        jqtip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var jqtip   = this.tip()
    var width  = jqtip[0].offsetWidth
    var height = jqtip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt(jqtip.css('margin-top'), 10)
    var marginLeft = parseInt(jqtip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // jq.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    jq.offset.setOffset(jqtip[0], jq.extend({
      using: function (props) {
        jqtip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    jqtip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = jqtip[0].offsetWidth
    var actualHeight = jqtip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    jqtip.offset(offset)
    this.replaceArrow(arrowDelta, jqtip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var jqtip  = this.tip()
    var title = this.getTitle()

    jqtip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    jqtip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var jqtip = jq(this.jqtip)
    var e    = jq.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') jqtip.detach()
      that.jqelement
        .removeAttr('aria-describedby')
        .trigger('hidden.bs.' + that.type)
      callback && callback()
    }

    this.jqelement.trigger(e)

    if (e.isDefaultPrevented()) return

    jqtip.removeClass('in')

    jq.support.transition && jqtip.hasClass('fade') ?
      jqtip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var jqe = this.jqelement
    if (jqe.attr('title') || typeof jqe.attr('data-original-title') != 'string') {
      jqe.attr('data-original-title', jqe.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function (jqelement) {
    jqelement   = jqelement || this.jqelement

    var el     = jqelement[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = jq.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var elOffset  = isBody ? { top: 0, left: 0 } : jqelement.offset()
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : jqelement.scrollTop() }
    var outerDims = isBody ? { width: jq(window).width(), height: jq(window).height() } : null

    return jq.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.jqviewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.jqviewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var jqe = this.jqelement
    var o  = this.options

    title = jqe.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call(jqe[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.jqtip) {
      this.jqtip = jq(this.options.template)
      if (this.jqtip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.jqtip
  }

  Tooltip.prototype.arrow = function () {
    return (this.jqarrow = this.jqarrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = jq(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        jq(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.jqelement.off('.' + that.type).removeData('bs.' + that.type)
      if (that.jqtip) {
        that.jqtip.detach()
      }
      that.jqtip = null
      that.jqarrow = null
      that.jqviewport = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var jqthis   = jq(this)
      var data    = jqthis.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) jqthis.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = jq.fn.tooltip

  jq.fn.tooltip             = Plugin
  jq.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  jq.fn.tooltip.noConflict = function () {
    jq.fn.tooltip = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.6
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function (jq) {
  'use strict';

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!jq.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.VERSION  = '3.3.6'

  Popover.DEFAULTS = jq.extend({}, jq.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = jq.extend({}, jq.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var jqtip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    jqtip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    jqtip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
    ](content)

    jqtip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!jqtip.find('.popover-title').html()) jqtip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var jqe = this.jqelement
    var o  = this.options

    return jqe.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call(jqe[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return (this.jqarrow = this.jqarrow || this.tip().find('.arrow'))
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var jqthis   = jq(this)
      var data    = jqthis.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) jqthis.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = jq.fn.popover

  jq.fn.popover             = Plugin
  jq.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  jq.fn.popover.noConflict = function () {
    jq.fn.popover = old
    return this
  }

}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.6
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function (jq) {
  'use strict';

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    this.jqbody          = jq(document.body)
    this.jqscrollElement = jq(element).is(document.body) ? jq(window) : jq(element)
    this.options        = jq.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target || '') + ' .nav li > a'
    this.offsets        = []
    this.targets        = []
    this.activeTarget   = null
    this.scrollHeight   = 0

    this.jqscrollElement.on('scroll.bs.scrollspy', jq.proxy(this.process, this))
    this.refresh()
    this.process()
  }

  ScrollSpy.VERSION  = '3.3.6'

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.getScrollHeight = function () {
    return this.jqscrollElement[0].scrollHeight || Math.max(this.jqbody[0].scrollHeight, document.documentElement.scrollHeight)
  }

  ScrollSpy.prototype.refresh = function () {
    var that          = this
    var offsetMethod  = 'offset'
    var offsetBase    = 0

    this.offsets      = []
    this.targets      = []
    this.scrollHeight = this.getScrollHeight()

    if (!jq.isWindow(this.jqscrollElement[0])) {
      offsetMethod = 'position'
      offsetBase   = this.jqscrollElement.scrollTop()
    }

    this.jqbody
      .find(this.selector)
      .map(function () {
        var jqel   = jq(this)
        var href  = jqel.data('target') || jqel.attr('href')
        var jqhref = /^#./.test(href) && jq(href)

        return (jqhref
          && jqhref.length
          && jqhref.is(':visible')
          && [[jqhref[offsetMethod]().top + offsetBase, href]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        that.offsets.push(this[0])
        that.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.jqscrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.getScrollHeight()
    var maxScroll    = this.options.offset + scrollHeight - this.jqscrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (this.scrollHeight != scrollHeight) {
      this.refresh()
    }

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
    }

    if (activeTarget && scrollTop < offsets[0]) {
      this.activeTarget = null
      return this.clear()
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
        && this.activate(targets[i])
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    this.clear()

    var selector = this.selector +
      '[data-target="' + target + '"],' +
      this.selector + '[href="' + target + '"]'

    var active = jq(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length) {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate.bs.scrollspy')
  }

  ScrollSpy.prototype.clear = function () {
    jq(this.selector)
      .parentsUntil(this.options.target, '.active')
      .removeClass('active')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var jqthis   = jq(this)
      var data    = jqthis.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) jqthis.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = jq.fn.scrollspy

  jq.fn.scrollspy             = Plugin
  jq.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  jq.fn.scrollspy.noConflict = function () {
    jq.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  jq(window).on('load.bs.scrollspy.data-api', function () {
    jq('[data-spy="scroll"]').each(function () {
      var jqspy = jq(this)
      Plugin.call(jqspy, jqspy.data())
    })
  })

}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.6
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function (jq) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = jq(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.6'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var jqthis    = this.element
    var jqul      = jqthis.closest('ul:not(.dropdown-menu)')
    var selector = jqthis.data('target')

    if (!selector) {
      selector = jqthis.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*jq)/, '') // strip for ie7
    }

    if (jqthis.parent('li').hasClass('active')) return

    var jqprevious = jqul.find('.active:last a')
    var hideEvent = jq.Event('hide.bs.tab', {
      relatedTarget: jqthis[0]
    })
    var showEvent = jq.Event('show.bs.tab', {
      relatedTarget: jqprevious[0]
    })

    jqprevious.trigger(hideEvent)
    jqthis.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var jqtarget = jq(selector)

    this.activate(jqthis.closest('li'), jqul)
    this.activate(jqtarget, jqtarget.parent(), function () {
      jqprevious.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: jqthis[0]
      })
      jqthis.trigger({
        type: 'shown.bs.tab',
        relatedTarget: jqprevious[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var jqactive    = container.find('> .active')
    var transition = callback
      && jq.support.transition
      && (jqactive.length && jqactive.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      jqactive
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    jqactive.length && transition ?
      jqactive
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    jqactive.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var jqthis = jq(this)
      var data  = jqthis.data('bs.tab')

      if (!data) jqthis.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = jq.fn.tab

  jq.fn.tab             = Plugin
  jq.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  jq.fn.tab.noConflict = function () {
    jq.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call(jq(this), 'show')
  }

  jq(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.6
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function (jq) {
  'use strict';

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = jq.extend({}, Affix.DEFAULTS, options)

    this.jqtarget = jq(this.options.target)
      .on('scroll.bs.affix.data-api', jq.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  jq.proxy(this.checkPositionWithEventLoop, this))

    this.jqelement     = jq(element)
    this.affixed      = null
    this.unpin        = null
    this.pinnedOffset = null

    this.checkPosition()
  }

  Affix.VERSION  = '3.3.6'

  Affix.RESET    = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0,
    target: window
  }

  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
    var scrollTop    = this.jqtarget.scrollTop()
    var position     = this.jqelement.offset()
    var targetHeight = this.jqtarget.height()

    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

    if (this.affixed == 'bottom') {
      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
    }

    var initializing   = this.affixed == null
    var colliderTop    = initializing ? scrollTop : position.top
    var colliderHeight = initializing ? targetHeight : height

    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

    return false
  }

  Affix.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset
    this.jqelement.removeClass(Affix.RESET).addClass('affix')
    var scrollTop = this.jqtarget.scrollTop()
    var position  = this.jqelement.offset()
    return (this.pinnedOffset = position.top - scrollTop)
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout(jq.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.jqelement.is(':visible')) return

    var height       = this.jqelement.height()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom
    var scrollHeight = Math.max(jq(document).height(), jq(document.body).height())

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.jqelement)
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.jqelement)

    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

    if (this.affixed != affix) {
      if (this.unpin != null) this.jqelement.css('top', '')

      var affixType = 'affix' + (affix ? '-' + affix : '')
      var e         = jq.Event(affixType + '.bs.affix')

      this.jqelement.trigger(e)

      if (e.isDefaultPrevented()) return

      this.affixed = affix
      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

      this.jqelement
        .removeClass(Affix.RESET)
        .addClass(affixType)
        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
    }

    if (affix == 'bottom') {
      this.jqelement.offset({
        top: scrollHeight - height - offsetBottom
      })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var jqthis   = jq(this)
      var data    = jqthis.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) jqthis.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = jq.fn.affix

  jq.fn.affix             = Plugin
  jq.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  jq.fn.affix.noConflict = function () {
    jq.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  jq(window).on('load', function () {
    jq('[data-spy="affix"]').each(function () {
      var jqspy = jq(this)
      var data = jqspy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
      if (data.offsetTop    != null) data.offset.top    = data.offsetTop

      Plugin.call(jqspy, data)
    })
  })

}(jQuery);
