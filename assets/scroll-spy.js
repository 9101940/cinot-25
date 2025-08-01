!function(){"use strict";customElements.get("scroll-spy")||customElements.define("scroll-spy",class extends HTMLElement{constructor(){super(),this.scrollCallback=()=>this.onScroll(),this.toggleScrollObserver=this.toggleScrollObserver.bind(this)}connectedCallback(){Shopify.visualPreviewMode||(this.container=this?.closest(this?.getAttribute("data-scroll-spy-container"))||document,this.scrollSpyButton=this.querySelector("[data-scroll-spy]"),this.elementToSpy=this.container.querySelector(this.scrollSpyButton.getAttribute("data-scroll-spy")),this.anchorSelector=`[data-scroll-spy="#${this.elementToSpy.id}"]`,this.anchor=this.container.querySelector(this.anchorSelector),this.anchorSiblings=this.container.querySelectorAll("[data-scroll-spy]"),this.initialized=!1,this.anchor&&(this.triggerPoint=this.anchor.getAttribute("data-scroll-trigger-point"),this.toggleScrollObserver(),document.addEventListener("theme:resize:width",this.toggleScrollObserver),document.addEventListener("shopify:section:load",this.toggleScrollObserver)))}toggleScrollObserver(){this.stickyHeaderHeight=window.theme.readHeights().stickyHeaderHeight,this.isEligible()?this.initialized||(document.addEventListener("theme:scroll",this.scrollCallback),this.initialized=!0):(document.removeEventListener("theme:scroll",this.scrollCallback),this.initialized=!1)}isEligible(){const t=!window.theme.isMobile();return!t&&this.anchor.hasAttribute("data-scroll-spy-mobile")||t&&this.anchor.hasAttribute("data-scroll-spy-desktop")||!this.anchor.hasAttribute("data-scroll-spy-desktop")&&!this.anchor.hasAttribute("data-scroll-spy-mobile")}onScroll(){this.top=this.elementToSpy.getBoundingClientRect().top;const t=Math.round(window.innerHeight),e=Math.round(window.scrollY),i=e+t,s=Math.round(this.top+e-this.stickyHeaderHeight),o=this.elementToSpy.offsetHeight;s<i&&!(s+o<e)&&this.triggerPointReached()&&(this.anchorSiblings.forEach((t=>{t.matches(this.anchorSelector)||t.classList.remove("is-selected")})),this.anchor.classList.add("is-selected"))}triggerPointReached(){let t=!1;switch(this.triggerPoint){case"top":t=this.top-this.stickyHeaderHeight<=0;break;case"middle":t=this.top<=window.innerHeight/2;break;case"bottom":t=this.top<=window.innerHeight;break;default:t=this.top<=0}return t}disconnectedCallback(){document.removeEventListener("theme:resize:width",this.toggleScrollObserver),document.removeEventListener("shopify:section:load",this.toggleScrollObserver),document.removeEventListener("theme:scroll",this.scrollCallback)}})}();
