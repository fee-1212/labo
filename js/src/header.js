import $ from 'jquery';

/**
 * -------------------------------------------------------------------------
 * 头部组件 header.js
 * author:陈涛
 * version：1.0.0
 * -------------------------------------------------------------------------
 */

const Header = (($) => {
    /**
     * ----------------------------------
     * Constants 常量
     * ----------------------------------
     */
    const NAME = 'beeHeader'
    const VERSION = '1.0.0'
    const DATA_KEY = 'bee.header'
    const JQUERY_NO_CONFLICT  = $.fn[NAME]
    const DEFAULT = {
        logo:"",
        text:""
    }

    /* 定义Header类 */

    class Header {

        /* 构造函数 */

        constructor(element,config){
            this._element = element,this._config = this._getConfig(config)
            this._initDom()
        }

        _initDom (){
            let element = this._element,config = this._config
            element.classList.add('bee-header');
            $(element).append(
                `<img class="logo" src="${config.logo}"  />`+
                `<span class="helper" ></span>`+
                `<span class="headerText">${config.text}</span>`
            )
        }

        _getConfig(config){
            return {
                ...DEFAULT,
                ...config
            }
        }

        static get VERSION(){
            return VERSION
        }

        /* 绑定到jQuery对象上*/
        static _jQueryInterface(config){
            return this.each(function () {
                const $element = $(this)
                let data = $element.data(DATA_KEY)
                if (!data) {
                    data = new Header(this,config)
                    $element.data(DATA_KEY, data)
                }
            })
        }
    }

    /**
     * ============================================================
     * jQuery
     * ============================================================
     */

    $.fn[NAME]             = Header._jQueryInterface
    $.fn[NAME].Constructor = Header
    $.fn[NAME].noConflict = function(){
        $.fn[NAME] = JQUERY_NO_CONFLICT
        return Header._jQueryInterface
    }

    return Header;
})($)


export default Header