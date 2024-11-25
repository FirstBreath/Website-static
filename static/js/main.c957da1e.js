/*! For license information please see main.c957da1e.js.LICENSE.txt */
(()=>{var e={5108:function(e,c,l){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,c,l,a){void 0===a&&(a=l);var t=Object.getOwnPropertyDescriptor(c,l);t&&!("get"in t?!c.__esModule:t.writable||t.configurable)||(t={enumerable:!0,get:function(){return c[l]}}),Object.defineProperty(e,a,t)}:function(e,c,l,a){void 0===a&&(a=l),e[a]=c[l]}),t=this&&this.__setModuleDefault||(Object.create?function(e,c){Object.defineProperty(e,"default",{enumerable:!0,value:c})}:function(e,c){e.default=c}),n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var c={};if(null!=e)for(var l in e)"default"!==l&&Object.prototype.hasOwnProperty.call(e,l)&&a(c,e,l);return t(c,e),c};Object.defineProperty(c,"__esModule",{value:!0}),c.Badge=void 0;const r=n(l(5464)),s=l(9381),i={[s.BadgeColors.PRIMARY]:r.css`
        background: ${e=>{let{theme:c}=e;return c.colors.primary}};
    `,[s.BadgeColors.SECONDARY]:r.css`
        background: ${e=>{let{theme:c}=e;return c.colors.secondary}};
    `,[s.BadgeColors.SUCCESS]:r.css`
        background: ${e=>{let{theme:c}=e;return c.colors.success}};
    `,[s.BadgeColors.DANGER]:r.css`
        background: ${e=>{let{theme:c}=e;return c.colors.error}};
    `},o={[s.BadgeTypes.BADGE]:r.css`
        border-radius: ${e=>{let{theme:c}=e;return c.borderRadius}};
    `,[s.BadgeTypes.PILL]:r.css`
        border-radius: 9999px;
    `},f={[s.BadgeSizes.SMALL]:r.css`
        padding: ${e=>{let{theme:c}=e;return c.spacing(1)}} ${e=>{let{theme:c}=e;return c.spacing(2)}};
    `,[s.BadgeSizes.MEDIUM]:r.css`
        padding: ${e=>{let{theme:c}=e;return c.spacing(2)}} ${e=>{let{theme:c}=e;return c.spacing(3)}};
    `,[s.BadgeSizes.LARGE]:r.css`
        padding: ${e=>{let{theme:c}=e;return c.spacing(3)}} ${e=>{let{theme:c}=e;return c.spacing(4)}};
    `};c.Badge=r.default.div`
    ${e=>{let{color:c}=e;return i[null!==c&&void 0!==c?c:s.BadgeColors.PRIMARY]}};
    ${e=>{let{type:c}=e;return o[null!==c&&void 0!==c?c:s.BadgeTypes.BADGE]}};
    ${e=>{let{size:c}=e;return f[null!==c&&void 0!==c?c:s.BadgeSizes.MEDIUM]}};

    color: ${e=>{let{theme:c}=e;return c.colors.background}};
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${e=>{let{theme:c}=e;return c.typographies.p.fontFamily}};
    font-size: ${e=>{let{theme:c,size:l}=e;return l==s.BadgeSizes.SMALL?c.typographies.small.fontSize:c.typographies.p.fontSize}};
    font-weight: 600;
    line-height: 24px;
    margin: 0;
`},9381:(e,c)=>{"use strict";var l,a,t;Object.defineProperty(c,"__esModule",{value:!0}),c.BadgeColors=c.BadgeSizes=c.BadgeTypes=void 0,function(e){e.BADGE="badge",e.PILL="pill"}(l||(c.BadgeTypes=l={})),function(e){e.SMALL="small",e.MEDIUM="medium",e.LARGE="large"}(a||(c.BadgeSizes=a={})),function(e){e.PRIMARY="primary",e.SECONDARY="secondary",e.SUCCESS="success",e.DANGER="danger"}(t||(c.BadgeColors=t={}))},1009:(e,c,l)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.Badge=c.BadgeTypes=c.BadgeSizes=c.BadgeColors=void 0;var a=l(9381);Object.defineProperty(c,"BadgeColors",{enumerable:!0,get:function(){return a.BadgeColors}}),Object.defineProperty(c,"BadgeSizes",{enumerable:!0,get:function(){return a.BadgeSizes}}),Object.defineProperty(c,"BadgeTypes",{enumerable:!0,get:function(){return a.BadgeTypes}});var t=l(5108);Object.defineProperty(c,"Badge",{enumerable:!0,get:function(){return t.Badge}})},9433:function(e,c,l){"use strict";var a=this&&this.__rest||function(e,c){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&c.indexOf(a)<0&&(l[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(a=Object.getOwnPropertySymbols(e);t<a.length;t++)c.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(l[a[t]]=e[a[t]])}return l},t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(c,"__esModule",{value:!0}),c.Button=void 0;const n=t(l(5043)),r=l(2927),s=l(1870);c.Button=Object.assign((e=>{var{children:c,type:l=r.ButtonType.PRIMARY,size:t=r.ButtonSize.MEDIUM,onClick:i}=e,o=a(e,["children","type","size","onClick"]);return n.default.createElement(s.ButtonStyle,Object.assign({},o,{type:l,size:t,onClick:i}),n.default.createElement(s.ButtonText,{type:l,size:t},c))}),{ButtonType:r.ButtonType,ButtonSize:r.ButtonSize})},1870:function(e,c,l){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,c,l,a){void 0===a&&(a=l);var t=Object.getOwnPropertyDescriptor(c,l);t&&!("get"in t?!c.__esModule:t.writable||t.configurable)||(t={enumerable:!0,get:function(){return c[l]}}),Object.defineProperty(e,a,t)}:function(e,c,l,a){void 0===a&&(a=l),e[a]=c[l]}),t=this&&this.__setModuleDefault||(Object.create?function(e,c){Object.defineProperty(e,"default",{enumerable:!0,value:c})}:function(e,c){e.default=c}),n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var c={};if(null!=e)for(var l in e)"default"!==l&&Object.prototype.hasOwnProperty.call(e,l)&&a(c,e,l);return t(c,e),c};Object.defineProperty(c,"__esModule",{value:!0}),c.ButtonText=c.ButtonStyle=void 0;const r=n(l(5464)),s=l(2927),i=r.css`
    border: none;
    background: ${e=>{let{theme:c}=e;return c.colors.primary}};

    &:hover {
        background: ${e=>{let{theme:c}=e;return c.primarySwatch[600]}};
    }
`,o=r.css`
    border: none;
    background: ${e=>{let{theme:c}=e;return c.colors.secondary}};

    &:hover {
        background: ${e=>{let{theme:c}=e;return c.primarySwatch[400]}};
    }
`,f=r.css`
    border: 1px solid ${e=>{let{theme:c}=e;return c.colors.border}};
    background: ${e=>{let{theme:c}=e;return c.colors.background}};

    &:hover {
        background: ${e=>{let{theme:c}=e;return c.colors.surface}};
    }
`,u={[s.ButtonType.PRIMARY]:i,[s.ButtonType.SECONDARY]:o,[s.ButtonType.TERTIARY]:f},p=r.css`
    padding: ${e=>{let{theme:c}=e;return c.spacing(1)}} 16px;
`,d=r.css`
    padding: ${e=>{let{theme:c}=e;return c.spacing(2)}} 16px;
`,m=r.css`
    padding: ${e=>{let{theme:c}=e;return c.spacing(3)}} 16px;
`,h={[s.ButtonSize.SMALL]:p,[s.ButtonSize.MEDIUM]:d,[s.ButtonSize.LARGE]:m};c.ButtonStyle=r.default.button`
    ${e=>{let{type:c}=e;return u[c]}};
    ${e=>{let{size:c}=e;return h[c]}};
    transition: all 0.5s;
    
    border-radius: 8px;
    cursor: pointer;
    box-shadow: ${e=>{let{theme:c}=e;return c.shadows.default}};

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
`,c.ButtonText=r.default.p`
    color: ${e=>{let{type:c,theme:l}=e;return c===s.ButtonType.TERTIARY?l.colors.primary:l.colors.background}};
    font-family: ${e=>{let{theme:c}=e;return c.typographies.p.fontFamily}};
    font-size: ${e=>{let{size:c}=e;return c===s.ButtonSize.SMALL?"12px":"16px"}};
    font-style: ${e=>{let{theme:c}=e;return c.typographies.p.fontStyle}};
    font-weight: 600;
    line-height: 24px;
    margin: 0;
`},2927:(e,c)=>{"use strict";var l,a;Object.defineProperty(c,"__esModule",{value:!0}),c.ButtonSize=c.ButtonType=void 0,function(e){e.PRIMARY="primary",e.SECONDARY="secondary",e.TERTIARY="tertiary"}(l||(c.ButtonType=l={})),function(e){e.SMALL="small",e.MEDIUM="medium",e.LARGE="large"}(a||(c.ButtonSize=a={}))},1278:function(e,c,l){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,c,l,a){void 0===a&&(a=l);var t=Object.getOwnPropertyDescriptor(c,l);t&&!("get"in t?!c.__esModule:t.writable||t.configurable)||(t={enumerable:!0,get:function(){return c[l]}}),Object.defineProperty(e,a,t)}:function(e,c,l,a){void 0===a&&(a=l),e[a]=c[l]}),t=this&&this.__exportStar||function(e,c){for(var l in e)"default"===l||Object.prototype.hasOwnProperty.call(c,l)||a(c,e,l)};Object.defineProperty(c,"__esModule",{value:!0}),t(l(9433),c)},9630:function(e,c,l){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(c,"__esModule",{value:!0}),c.Card=void 0;const t=a(l(5464));c.Card=t.default.div`
    padding: 24px;
    gap: 40px;

    border-radius: ${e=>{let{theme:c}=e;return c.borderRadius}};
    background: ${e=>{let{theme:c}=e;return c.colors.background}};
    border: 1px solid ${e=>{let{theme:c}=e;return c.colors.border}};
    background: #FFF;
    box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.05);
`},7096:function(e,c,l){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,c,l,a){void 0===a&&(a=l);var t=Object.getOwnPropertyDescriptor(c,l);t&&!("get"in t?!c.__esModule:t.writable||t.configurable)||(t={enumerable:!0,get:function(){return c[l]}}),Object.defineProperty(e,a,t)}:function(e,c,l,a){void 0===a&&(a=l),e[a]=c[l]}),t=this&&this.__exportStar||function(e,c){for(var l in e)"default"===l||Object.prototype.hasOwnProperty.call(c,l)||a(c,e,l)};Object.defineProperty(c,"__esModule",{value:!0}),t(l(9630),c)},8903:function(e,c,l){"use strict";var a=this&&this.__rest||function(e,c){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&c.indexOf(a)<0&&(l[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(a=Object.getOwnPropertySymbols(e);t<a.length;t++)c.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(l[a[t]]=e[a[t]])}return l},t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(c,"__esModule",{value:!0}),c.Dropdown=void 0;const n=t(l(5043)),r=l(12),s=l(3910),i=l(4925);c.Dropdown=e=>{var{options:c,placeholder:l,onSelect:t,defaultSelected:o,disabled:f}=e,u=a(e,["options","placeholder","onSelect","defaultSelected","disabled"]);const[p,d]=n.default.useState(!1),[m,h]=n.default.useState(o||null);return n.default.createElement(r.DropdownContainer,Object.assign({},u),n.default.createElement(r.DropdownHeader,{onClick:()=>d(!p),disabled:f},m||l||"Select an option",n.default.createElement(r.Arrow,{isOpen:p},n.default.createElement(s.FontAwesomeIcon,{icon:i.faCaretDown}))),p&&n.default.createElement(r.DropdownList,null,c.map(((e,c)=>n.default.createElement(r.DropdownItem,{key:c,onClick:()=>((e,c)=>{h(e),d(!1),t(e,c)})(e,c)},n.default.createElement(r.DropdownItemButton,null,e))))))}},12:function(e,c,l){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(c,"__esModule",{value:!0}),c.DropdownItemButton=c.DropdownItem=c.DropdownList=c.Arrow=c.DropdownHeader=c.DropdownContainer=void 0;const t=a(l(5464));c.DropdownContainer=t.default.div`
    position: relative;
    width: 200px;
    font-family: Arial, sans-serif;
`,c.DropdownHeader=t.default.button`
    background: ${e=>{let{theme:c}=e;return c.colors.background}};
    border: 1px solid ${e=>{let{theme:c}=e;return c.colors.border}};
    border-radius: ${e=>{let{theme:c}=e;return c.borderRadius}};
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    box-shadow: ${e=>{let{theme:c}=e;return c.shadows.default}};
`,c.Arrow=t.default.span`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    transform: ${e=>{let{isOpen:c}=e;return c?"rotate(180deg)":"rotate(0deg)"}};
    transition: transform 0.5s ease;
`,c.DropdownList=t.default.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: ${e=>{let{theme:c}=e;return c.colors.background}};
    border: 1px solid ${e=>{let{theme:c}=e;return c.colors.border}};;
    border-radius: ${e=>{let{theme:c}=e;return c.borderRadius}};
    box-shadow: ${e=>{let{theme:c}=e;return c.shadows.default}};
    z-index: 1000;
`,c.DropdownItem=t.default.li`
    padding: 10px;
    cursor: pointer;

    &:hover {
        background: ${e=>{let{theme:c}=e;return c.colors.surface}};
    }
`,c.DropdownItemButton=t.default.button`
    background: none;
    border: none;
    color: inherit;
    font-size: inherit;
    cursor: pointer;
`},6063:function(e,c,l){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,c,l,a){void 0===a&&(a=l);var t=Object.getOwnPropertyDescriptor(c,l);t&&!("get"in t?!c.__esModule:t.writable||t.configurable)||(t={enumerable:!0,get:function(){return c[l]}}),Object.defineProperty(e,a,t)}:function(e,c,l,a){void 0===a&&(a=l),e[a]=c[l]}),t=this&&this.__exportStar||function(e,c){for(var l in e)"default"===l||Object.prototype.hasOwnProperty.call(c,l)||a(c,e,l)};Object.defineProperty(c,"__esModule",{value:!0}),t(l(8903),c)},8899:function(e,c,l){"use strict";var a=this&&this.__rest||function(e,c){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&c.indexOf(a)<0&&(l[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(a=Object.getOwnPropertySymbols(e);t<a.length;t++)c.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(l[a[t]]=e[a[t]])}return l},t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(c,"__esModule",{value:!0}),c.Input=void 0;const n=t(l(5043)),r=l(8064);c.Input=e=>{var{label:c,placeholder:l,onChange:t,type:s,validate:i}=e,o=a(e,["label","placeholder","onChange","type","validate"]);const[f,u]=n.default.useState(""),[p,d]=n.default.useState(null);return n.default.createElement(r.InputWrapper,Object.assign({},o),n.default.createElement(r.Label,null,c),n.default.createElement(r.InputStyle,{placeholder:l,value:f,onChange:e=>{const c=e.target.value;u(c),t&&t(c),i&&d(i(c))},isError:!!p,type:s}),p&&n.default.createElement(r.ErrorMessage,null,p))}},8064:function(e,c,l){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(c,"__esModule",{value:!0}),c.ErrorMessage=c.InputStyle=c.Label=c.InputWrapper=void 0;const t=a(l(5464));c.InputWrapper=t.default.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 4px;
`,c.Label=t.default.label`
    position: absolute;
    top: -8px;
    left: 12px;
    background: ${e=>{let{theme:c}=e;return c.colors.background}};
    padding: 0 4px;
    font-size: ${e=>{let{theme:c}=e;return c.typographies.p.fontSize}};
    font-family: ${e=>{let{theme:c}=e;return c.typographies.p.fontFamily}};
    font-weight: ${e=>{let{theme:c}=e;return c.typographies.p.fontWeight}};
    transition: 0.3s;
    color: ${e=>{let{theme:c}=e;return c.colors.textPrimary}};
`,c.InputStyle=t.default.input`
    padding: 16px 8px 8px 8px;
    color: ${e=>{let{theme:c}=e;return c.colors.textSecondary}};
    font-family: ${e=>{let{theme:c}=e;return c.typographies.p.fontFamily}};
    font-weight: ${e=>{let{theme:c}=e;return c.typographies.p.fontWeight}};
    font-size: ${e=>{let{theme:c}=e;return c.typographies.p.fontSize}};
    background: none;
    border: 1px solid ${e=>{let{theme:c}=e;return c.colors.border}};
    border-radius: ${e=>{let{theme:c}=e;return c.borderRadius}};
    outline: none;
    box-shadow: ${e=>{let{theme:c}=e;return c.shadows.default}};

    transition: border-color 0.5s;

    &:focus {
        border-color: ${e=>{let{theme:c,isSuccess:l,isError:a}=e;return l?c.colors.success:a?c.colors.error:c.colors.primary}};
`,c.ErrorMessage=t.default.span`
    color: red;
    margin-top: 4px;
`},8955:function(e,c,l){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,c,l,a){void 0===a&&(a=l);var t=Object.getOwnPropertyDescriptor(c,l);t&&!("get"in t?!c.__esModule:t.writable||t.configurable)||(t={enumerable:!0,get:function(){return c[l]}}),Object.defineProperty(e,a,t)}:function(e,c,l,a){void 0===a&&(a=l),e[a]=c[l]}),t=this&&this.__exportStar||function(e,c){for(var l in e)"default"===l||Object.prototype.hasOwnProperty.call(c,l)||a(c,e,l)};Object.defineProperty(c,"__esModule",{value:!0}),t(l(8899),c)},2299:function(e,c,l){"use strict";var a=this&&this.__rest||function(e,c){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&c.indexOf(a)<0&&(l[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(a=Object.getOwnPropertySymbols(e);t<a.length;t++)c.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(l[a[t]]=e[a[t]])}return l},t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(c,"__esModule",{value:!0}),c.Modal=void 0;const n=t(l(5043)),r=l(5640);c.Modal=e=>{var{isOpen:c,onClose:l,children:t}=e,s=a(e,["isOpen","onClose","children"]);return c?n.default.createElement(r.Backdrop,Object.assign({onClick:l},s),n.default.createElement(r.ModalContent,{onClick:e=>e.stopPropagation()},n.default.createElement(r.CloseButton,{onClick:l},"\xd7"),t)):null}},5640:function(e,c,l){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(c,"__esModule",{value:!0}),c.CloseButton=c.ModalContent=c.Backdrop=void 0;const t=a(l(5464));c.Backdrop=t.default.div.attrs({"data-testid":"backdrop"})`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`,c.ModalContent=t.default.div.attrs({"data-testid":"modal-content"})`
    background: ${e=>{let{theme:c}=e;return c.colors.background}};
    padding: 20px;
    border-radius: ${e=>{let{theme:c}=e;return c.borderRadius}};
    width: 70%;
    position: relative;
    border: 1px solid ${e=>{let{theme:c}=e;return c.colors.border}};

    // media queries to phone set width to 100%
    @media (max-width: 600px) {
        width: 100%;
    }
`,c.CloseButton=t.default.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
`},1711:function(e,c,l){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,c,l,a){void 0===a&&(a=l);var t=Object.getOwnPropertyDescriptor(c,l);t&&!("get"in t?!c.__esModule:t.writable||t.configurable)||(t={enumerable:!0,get:function(){return c[l]}}),Object.defineProperty(e,a,t)}:function(e,c,l,a){void 0===a&&(a=l),e[a]=c[l]}),t=this&&this.__exportStar||function(e,c){for(var l in e)"default"===l||Object.prototype.hasOwnProperty.call(c,l)||a(c,e,l)};Object.defineProperty(c,"__esModule",{value:!0}),t(l(2299),c)},9155:function(e,c,l){"use strict";var a=this&&this.__rest||function(e,c){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&c.indexOf(a)<0&&(l[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(a=Object.getOwnPropertySymbols(e);t<a.length;t++)c.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(l[a[t]]=e[a[t]])}return l},t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(c,"__esModule",{value:!0}),c.Slider=void 0;const n=t(l(5043)),r=l(1552),s=l(6778);c.Slider=e=>{var{elements:c}=e,l=a(e,["elements"]);const t=c.length%2===0,i=Math.floor(c.length/2),[o,f]=n.default.useState(i);return n.default.createElement(r.SliderContainer,Object.assign({},l),n.default.createElement(r.SliderElementsContainer,{length:t?c.length+1:c.length},c.map(((e,c)=>n.default.createElement(r.SliderElement,{key:c,translate:-1*(o-i)+"00%"},e))),t?n.default.createElement(r.SliderElement,{translate:-1*(o-i)+"00%"}):""),n.default.createElement(s.SliderIndicator,{length:c.length,activeIndex:o,onClick:f}))}},1552:function(e,c,l){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(c,"__esModule",{value:!0}),c.SliderElement=c.SliderElementsContainer=c.SliderContainer=void 0;const t=a(l(5464));c.SliderContainer=t.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    align-self: stretch;
    width: 100%;
    overflow: hidden;
`,c.SliderElementsContainer=t.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.5s ease-in-out;
    width: ${e=>100*e.length}%;
`,c.SliderElement=t.default.div`
    transform: translateX(${e=>{let{translate:c}=e;return c}});
    transition: transform 0.5s ease;
    width: 100%;
`},3129:function(e,c,l){"use strict";var a=this&&this.__rest||function(e,c){var l={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&c.indexOf(a)<0&&(l[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var t=0;for(a=Object.getOwnPropertySymbols(e);t<a.length;t++)c.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(l[a[t]]=e[a[t]])}return l},t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(c,"__esModule",{value:!0}),c.SliderIndicator=void 0;const n=t(l(5043)),r=l(926);c.SliderIndicator=e=>{var{length:c,activeIndex:l,onClick:t=()=>{}}=e,s=a(e,["length","activeIndex","onClick"]);return n.default.createElement(r.SliderIndicatorContainer,Object.assign({},s),Array.from({length:c}).map(((e,c)=>n.default.createElement(r.SliderIndicatorDot,{key:c,active:c==l,onClick:()=>t(c),"data-testid":"slider-dot","data-active":c==l}))))}},926:function(e,c,l){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(c,"__esModule",{value:!0}),c.SliderIndicatorDot=c.SliderIndicatorContainer=void 0;const t=a(l(5464));c.SliderIndicatorContainer=t.default.div`
    display: flex;
    align-items: center;
    gap: 10px;
`,c.SliderIndicatorDot=t.default.button`
    width: ${e=>{let{active:c}=e;return c?"50px":"30px"}};
    height: 5px;
    cursor: ${e=>{let{active:c}=e;return c?"default":"pointer"}};
    border-radius: ${e=>{let{theme:c}=e;return c.borderRadius}};
    box-shadow: ${e=>{let{theme:c}=e;return c.shadows.default}};
    transition-duration: 0.5s;
    background: ${e=>{let{theme:c,active:l}=e;return l?c.colors.primary:c.colors.surface}};
    border: none;

    &:hover {
        background: ${e=>{let{theme:c,active:l}=e;return l?c.colors.primary:c.colors.secondary}};
    }

`},6778:function(e,c,l){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,c,l,a){void 0===a&&(a=l);var t=Object.getOwnPropertyDescriptor(c,l);t&&!("get"in t?!c.__esModule:t.writable||t.configurable)||(t={enumerable:!0,get:function(){return c[l]}}),Object.defineProperty(e,a,t)}:function(e,c,l,a){void 0===a&&(a=l),e[a]=c[l]}),t=this&&this.__exportStar||function(e,c){for(var l in e)"default"===l||Object.prototype.hasOwnProperty.call(c,l)||a(c,e,l)};Object.defineProperty(c,"__esModule",{value:!0}),t(l(3129),c)},4571:function(e,c,l){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,c,l,a){void 0===a&&(a=l);var t=Object.getOwnPropertyDescriptor(c,l);t&&!("get"in t?!c.__esModule:t.writable||t.configurable)||(t={enumerable:!0,get:function(){return c[l]}}),Object.defineProperty(e,a,t)}:function(e,c,l,a){void 0===a&&(a=l),e[a]=c[l]}),t=this&&this.__exportStar||function(e,c){for(var l in e)"default"===l||Object.prototype.hasOwnProperty.call(c,l)||a(c,e,l)};Object.defineProperty(c,"__esModule",{value:!0}),t(l(9155),c),t(l(6778),c)},643:function(e,c,l){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(c,"__esModule",{value:!0}),c.H1=void 0;const t=a(l(5464));c.H1=t.default.h1`
    font-family: ${e=>{let{theme:c}=e;return c.typographies.h1.fontFamily}};
    font-size: ${e=>{let{theme:c}=e;return c.typographies.h1.fontSize}};
    font-weight: ${e=>{let{theme:c}=e;return c.typographies.h1.fontWeight}};
    font-style: ${e=>{let{theme:c}=e;return c.typographies.h1.fontStyle}};
    color: ${e=>{let{theme:c}=e;return c.colors.textPrimary}};
    line-height: ${e=>{let{theme:c}=e;return c.typographies.h1.lineHeight}};
    letter-spacing: ${e=>{let{theme:c}=e;return c.typographies.h1.letterSpacing}};
    text-align: center;
    margin: 0;
`},9778:function(e,c,l){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,c,l,a){void 0===a&&(a=l);var t=Object.getOwnPropertyDescriptor(c,l);t&&!("get"in t?!c.__esModule:t.writable||t.configurable)||(t={enumerable:!0,get:function(){return c[l]}}),Object.defineProperty(e,a,t)}:function(e,c,l,a){void 0===a&&(a=l),e[a]=c[l]}),t=this&&this.__exportStar||function(e,c){for(var l in e)"default"===l||Object.prototype.hasOwnProperty.call(c,l)||a(c,e,l)};Object.defineProperty(c,"__esModule",{value:!0}),t(l(643),c)},8457:function(e,c,l){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(c,"__esModule",{value:!0}),c.H2=void 0;const t=a(l(5464));c.H2=t.default.h2`
    font-family: ${e=>{let{theme:c}=e;return c.typographies.h2.fontFamily}};
    font-size: ${e=>{let{theme:c}=e;return c.typographies.h2.fontSize}};
    font-weight: ${e=>{let{theme:c}=e;return c.typographies.h2.fontWeight}};
    font-style: ${e=>{let{theme:c}=e;return c.typographies.h2.fontStyle}};
    color: ${e=>{let{theme:c}=e;return c.colors.textPrimary}};
    line-height: ${e=>{let{theme:c}=e;return c.typographies.h2.lineHeight}};
    letter-spacing: ${e=>{let{theme:c}=e;return c.typographies.h2.letterSpacing}};
    margin: 0;
    text-align: center;
`},9495:function(e,c,l){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,c,l,a){void 0===a&&(a=l);var t=Object.getOwnPropertyDescriptor(c,l);t&&!("get"in t?!c.__esModule:t.writable||t.configurable)||(t={enumerable:!0,get:function(){return c[l]}}),Object.defineProperty(e,a,t)}:function(e,c,l,a){void 0===a&&(a=l),e[a]=c[l]}),t=this&&this.__exportStar||function(e,c){for(var l in e)"default"===l||Object.prototype.hasOwnProperty.call(c,l)||a(c,e,l)};Object.defineProperty(c,"__esModule",{value:!0}),t(l(8457),c)},7039:function(e,c,l){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(c,"__esModule",{value:!0}),c.H3=void 0;const t=a(l(5464));c.H3=t.default.div`
    font-family: ${e=>{let{theme:c}=e;return c.typographies.h3.fontFamily}};
    font-size: ${e=>{let{theme:c}=e;return c.typographies.h3.fontSize}};
    font-weight: ${e=>{let{theme:c}=e;return c.typographies.h3.fontWeight}};
    font-style: ${e=>{let{theme:c}=e;return c.typographies.h3.fontStyle}};
    color: ${e=>{let{theme:c}=e;return c.colors.textPrimary}};
    line-height: ${e=>{let{theme:c}=e;return c.typographies.h3.lineHeight}};
    letter-spacing: ${e=>{let{theme:c}=e;return c.typographies.h3.letterSpacing}};
    text-align: center;
    margin: 0;
`},3568:function(e,c,l){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,c,l,a){void 0===a&&(a=l);var t=Object.getOwnPropertyDescriptor(c,l);t&&!("get"in t?!c.__esModule:t.writable||t.configurable)||(t={enumerable:!0,get:function(){return c[l]}}),Object.defineProperty(e,a,t)}:function(e,c,l,a){void 0===a&&(a=l),e[a]=c[l]}),t=this&&this.__exportStar||function(e,c){for(var l in e)"default"===l||Object.prototype.hasOwnProperty.call(c,l)||a(c,e,l)};Object.defineProperty(c,"__esModule",{value:!0}),t(l(7039),c)},3263:function(e,c,l){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(c,"__esModule",{value:!0}),c.P=void 0;const t=a(l(5464));c.P=t.default.p`
    font-family: ${e=>{let{theme:c}=e;return c.typographies.p.fontFamily}};
    font-size: ${e=>{let{theme:c}=e;return c.typographies.p.fontSize}};
    font-weight: ${e=>{let{theme:c}=e;return c.typographies.p.fontWeight}};
    font-style: ${e=>{let{theme:c}=e;return c.typographies.p.fontStyle}};
    color: ${e=>{let{theme:c}=e;return c.colors.textSecondary}};
    line-height: ${e=>{let{theme:c}=e;return c.typographies.p.lineHeight}};
    letter-spacing: ${e=>{let{theme:c}=e;return c.typographies.p.letterSpacing}};
    text-align: center;
`},7671:function(e,c,l){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,c,l,a){void 0===a&&(a=l);var t=Object.getOwnPropertyDescriptor(c,l);t&&!("get"in t?!c.__esModule:t.writable||t.configurable)||(t={enumerable:!0,get:function(){return c[l]}}),Object.defineProperty(e,a,t)}:function(e,c,l,a){void 0===a&&(a=l),e[a]=c[l]}),t=this&&this.__exportStar||function(e,c){for(var l in e)"default"===l||Object.prototype.hasOwnProperty.call(c,l)||a(c,e,l)};Object.defineProperty(c,"__esModule",{value:!0}),t(l(3263),c)},2847:function(e,c,l){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(c,"__esModule",{value:!0}),c.Small=void 0;const t=a(l(5464));c.Small=t.default.span`
    font-family: ${e=>{let{theme:c}=e;return c.typographies.small.fontFamily}};
    font-size: ${e=>{let{theme:c}=e;return c.typographies.small.fontSize}};
    font-weight: ${e=>{let{theme:c}=e;return c.typographies.small.fontWeight}};
    font-style: ${e=>{let{theme:c}=e;return c.typographies.small.fontStyle}};
    color: ${e=>{let{theme:c}=e;return c.colors.textSecondary}};
    line-height: ${e=>{let{theme:c}=e;return c.typographies.small.lineHeight}};
    letter-spacing: ${e=>{let{theme:c}=e;return c.typographies.small.letterSpacing}};
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${e=>{let{theme:c}=e;return c.colors.background}};
`;var Re=l(8296);const De=Oe.default.div`
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    background-color: ${e=>{let{theme:c,onTop:l}=e;return l?c.colors.background:"transparent"}};
    ${e=>{let{onTop:c,theme:l}=e;return c&&`box-shadow: ${l.shadows.medium};`}}
    transition: all 0.5s;
`,Fe=Oe.default.div`
    display: flex;
    width: 70%;
    padding: ${e=>{let{theme:c}=e;return c.spacing(3)}};
    justify-content: space-between;
    align-items: center;
`,Be=Oe.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`,je=(0,Oe.default)(Pe)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-decoration: none;
    font-family: ${e=>{let{theme:c}=e;return c.typographies.p.fontFamily}};
    font-size: ${e=>{let{theme:c}=e;return c.typographies.p.fontSize}};
    font-style: ${e=>{let{theme:c}=e;return c.typographies.p.fontStyle}};
    font-weight: ${e=>{let{theme:c}=e;return c.typographies.h1.fontWeight}};
    line-height: ${e=>{let{theme:c}=e;return c.typographies.p.lineHeight}};
    color: ${e=>{let{theme:c}=e;return c.primarySwatch[400]}};
    transition: border-bottom-color 0.5s;
    border-bottom: 2px solid ${e=>{let{theme:c,isActive:l}=e;return l?c.colors.primary:"transparent"}};

    &:hover {
        color: ${e=>{let{theme:c}=e;return c.colors.primary}};
    }
`,He=Oe.default.img`
    width: 50px;
    height: 50px;
    @media (max-width: 768px) {
        display: none;
    }
`,Ie=(0,Oe.default)(Re.Dropdown)`
    border: ${e=>{let{theme:c,onTop:l}=e;return l?c.colors.border:"transparent"}}
`;l(1844);Object.create(null);const Ue={},$e=function(){for(var e=arguments.length,c=new Array(e),l=0;l<e;l++)c[l]=arguments[l];Ge(c[0])&&Ue[c[0]]||(Ge(c[0])&&(Ue[c[0]]=new Date),function(){if(console?.warn){for(var e=arguments.length,c=new Array(e),l=0;l<e;l++)c[l]=arguments[l];Ge(c[0])&&(c[0]=`react-i18next:: ${c[0]}`),console.warn(...c)}}(...c))},We=(e,c)=>()=>{if(e.isInitialized)c();else{const l=()=>{setTimeout((()=>{e.off("initialized",l)}),0),c()};e.on("initialized",l)}},Ve=(e,c,l)=>{e.loadNamespaces(c,We(e,l))},qe=(e,c,l,a)=>{if(Ge(l)&&(l=[l]),e.options.preload&&e.options.preload.indexOf(c)>-1)return Ve(e,l,a);l.forEach((c=>{e.options.ns.indexOf(c)<0&&e.options.ns.push(c)})),e.loadLanguages(c,We(e,a))},Ge=e=>"string"===typeof e,Ke=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,Qe={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"\xa9","&#169;":"\xa9","&reg;":"\xae","&#174;":"\xae","&hellip;":"\u2026","&#8230;":"\u2026","&#x2F;":"/","&#47;":"/"},Ye=e=>Qe[e];let Xe={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:e=>e.replace(Ke,Ye)};let Je;const Ze={type:"3rdParty",init(e){!function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Xe={...Xe,...e}}(e.options.react),(e=>{Je=e})(e)}},ec=(0,c.createContext)();class cc{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach((e=>{this.usedNamespaces[e]||(this.usedNamespaces[e]=!0)}))}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const lc=(e,c,l,a)=>e.getFixedT(c,l,a),ac=function(e){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{i18n:a}=l,{i18n:t,defaultNS:n}=(0,c.useContext)(ec)||{},r=a||t||Je;if(r&&!r.reportNamespaces&&(r.reportNamespaces=new cc),!r){$e("You will need to pass in an i18next instance by using initReactI18next");const e=(e,c)=>{return Ge(c)?c:"object"===typeof(l=c)&&null!==l&&Ge(c.defaultValue)?c.defaultValue:Array.isArray(e)?e[e.length-1]:e;var l},c=[e,{},!1];return c.t=e,c.i18n={},c.ready=!1,c}r.options.react?.wait&&$e("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const s={...Xe,...r.options.react,...l},{useSuspense:i,keyPrefix:o}=s;let f=e||n||r.options?.defaultNS;f=Ge(f)?[f]:f||["translation"],r.reportNamespaces.addUsedNamespaces?.(f);const u=(r.isInitialized||r.initializedStoreOnce)&&f.every((e=>function(e,c){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return c.languages&&c.languages.length?c.hasLoadedNamespace(e,{lng:l.lng,precheck:(c,a)=>{if(l.bindI18n?.indexOf("languageChanging")>-1&&c.services.backendConnector.backend&&c.isLanguageChangingTo&&!a(c.isLanguageChangingTo,e))return!1}}):($e("i18n.languages were undefined or empty",c.languages),!0)}(e,r,s))),p=((e,l,a,t)=>(0,c.useCallback)(lc(e,l,a,t),[e,l,a,t]))(r,l.lng||null,"fallback"===s.nsMode?f:f[0],o),d=()=>p,m=()=>lc(r,l.lng||null,"fallback"===s.nsMode?f:f[0],o),[h,g]=(0,c.useState)(d);let z=f.join();l.lng&&(z=`${l.lng}${z}`);const L=((e,l)=>{const a=(0,c.useRef)();return(0,c.useEffect)((()=>{a.current=l?a.current:e}),[e,l]),a.current})(z),M=(0,c.useRef)(!0);(0,c.useEffect)((()=>{const{bindI18n:e,bindI18nStore:c}=s;M.current=!0,u||i||(l.lng?qe(r,l.lng,f,(()=>{M.current&&g(m)})):Ve(r,f,(()=>{M.current&&g(m)}))),u&&L&&L!==z&&M.current&&g(m);const a=()=>{M.current&&g(m)};return e&&r?.on(e,a),c&&r?.store.on(c,a),()=>{M.current=!1,r&&e?.split(" ").forEach((e=>r.off(e,a))),c&&r&&c.split(" ").forEach((e=>r.store.off(e,a)))}}),[r,z]),(0,c.useEffect)((()=>{M.current&&u&&g(d)}),[r,o,u]);const C=[h,r,u];if(C.t=h,C.i18n=r,C.ready=u,u)return C;if(!u&&!i)return C;throw new Promise((e=>{l.lng?qe(r,l.lng,f,(()=>e())):Ve(r,f,(()=>e()))}))};var tc=l(579);const nc=e=>{let{links:l}=e;const a=Y(),{i18n:t}=ac(),{pathname:n}=a,[r,s]=c.useState(0),i=()=>{const e=window.pageYOffset;s(e)};c.useEffect((()=>(window.addEventListener("scroll",i,{passive:!0}),()=>{window.removeEventListener("scroll",i)})),[]);const o=[{display:(0,tc.jsx)("img",{src:"/images/icons/flags/frensh.png",alt:"french flag",width:"25"}),value:"fr"},{display:(0,tc.jsx)("img",{src:"/images/icons/flags/english.png",alt:"english flag",width:"25"}),value:"en"}];return(0,tc.jsx)(De,{onTop:0!==r,children:(0,tc.jsxs)(Fe,{children:[(0,tc.jsx)(He,{src:"/images/logo.png",alt:"First Breath Logo"}),(0,tc.jsxs)(Be,{children:[l.map(((e,c)=>(0,tc.jsx)(je,{to:e.url,isActive:e.url===n,children:e.name},c))),(0,tc.jsx)(Ie,{onTop:0!==r,options:o.map((e=>e.display)),onSelect:(e,c)=>{if(void 0===c)return;const l=o[c];console.log(l.value),t.changeLanguage(l.value)},defaultSelected:o[0].display})]})]})})},rc=Oe.default.footer`
    display: flex;
    padding: 70px 15px 0px 15px;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    align-self: stretch;
    background-color: ${e=>{let{theme:c}=e;return c.colors.surface}};
`,sc=Oe.default.img.attrs({src:"/images/logo.png"})`
    width: 100px;
    height: 100px;
    flex-shrink: 0;
`,ic=Oe.default.div`
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 40px;
    align-self: stretch;

    font-family: ${e=>{let{theme:c}=e;return c.typographies.p.fontFamily}};
    font-size: ${e=>{let{theme:c}=e;return c.typographies.p.fontSize}};
    font-style: ${e=>{let{theme:c}=e;return c.typographies.p.fontStyle}};
    font-weight: ${e=>{let{theme:c}=e;return c.typographies.p.fontWeight}};
    line-height: ${e=>{let{theme:c}=e;return c.typographies.p.lineHeight}};
    color: ${e=>{let{theme:c}=e;return c.colors.textSecondary}};
    text-decoration: none;
`,oc=(0,Oe.default)(Pe)`
    font-family: ${e=>{let{theme:c}=e;return c.typographies.p.fontFamily}};
    font-size: ${e=>{let{theme:c}=e;return c.typographies.p.fontSize}};
    font-style: ${e=>{let{theme:c}=e;return c.typographies.p.fontStyle}};
    font-weight: ${e=>{let{theme:c}=e;return c.typographies.h1.fontWeight}};
    line-height: ${e=>{let{theme:c}=e;return c.typographies.p.lineHeight}};
    color: ${e=>{let{theme:c}=e;return c.colors.textSecondary}};
    text-decoration: none;
    transition-duration: 0.5s;

    &:hover {
        color: ${e=>{let{theme:c}=e;return c.colors.primary}};
    }
`,fc=Oe.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    align-self: stretch;
`,uc=Oe.default.a`
    display: flex;
    width: 50px;
    height: 50px;
    padding: 5px 5px;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    border: 1px solid ${e=>{let{theme:c}=e;return c.colors.textSecondary}};
    background: rgba(255, 255, 255, 0.00);

    transition: transform 0.5s;

    &:hover {
        transform: scale(1.1);
    }
`,pc=Oe.default.div`
    display: flex;
    width: 1120px;
    padding: 24px 0px;
    justify-content: center;
    align-items: center;

    border-top: 1px solid ${e=>{let{theme:c}=e;return c.colors.border}};
`;var dc=l(3279);const mc=e=>{let{links:c,socials:l}=e;const{t:a}=ac();return(0,tc.jsxs)(rc,{children:[(0,tc.jsx)(sc,{alt:a("common.alt-logo")}),(0,tc.jsx)(ic,{children:c.map(((e,c)=>(0,tc.jsx)(oc,{to:e.url,children:e.name},c)))}),(0,tc.jsx)(fc,{children:l.map(((e,c)=>(0,tc.jsx)(uc,{onClick:()=>{dc.Ay.event({category:"Buttons",action:"Clicked",label:"Social Buttons"})},target:"_blank",href:e.link,rel:"noreferrer",children:e.logo},c)))}),(0,tc.jsx)(pc,{children:a("layout.footer.all-right-reserved")})]})},hc=()=>{const{t:e}=ac(),c=[{name:e("layout.navbar.home"),url:"/"},{name:e("layout.navbar.about"),url:"/about"},{name:e("layout.navbar.blog"),url:"/blog"},{name:e("layout.navbar.data-bank"),url:"/data-bank"}],l=[{logo:(0,tc.jsx)("img",{src:"/images/socials/facebook.svg",alt:e("common.social-media.facebook")}),link:"https://www.facebook.com/"},{logo:(0,tc.jsx)("img",{src:"/images/socials/instagram.svg",alt:e("common.social-media.facebook")}),link:"https://www.instagram.com/"},{logo:(0,tc.jsx)("img",{src:"/images/socials/x.svg",alt:e("common.social-media.facebook")}),link:"https://www.twitter.com/"},{logo:(0,tc.jsx)("img",{src:"/images/socials/linkedin.svg",alt:e("common.social-media.facebook")}),link:"https://www.linkedin.com/"}];return(0,tc.jsxs)(_e,{children:[(0,tc.jsx)(nc,{links:c}),(0,tc.jsx)(ge,{}),(0,tc.jsx)(mc,{links:c,socials:l})]})},gc=Oe.default.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    padding: 0;
`,zc=(Oe.default.h1`
    font-size: ${e=>{let{theme:c}=e;return c.typographies.h1.fontSize}};
    font-weight: ${e=>{let{theme:c}=e;return c.typographies.h1.fontWeight}};
    color: ${e=>{let{theme:c}=e;return c.colors.textPrimary}};
    font-family: ${e=>{let{theme:c}=e;return c.typographies.h1.fontFamily}};
    margin-bottom: ${e=>{let{theme:c}=e;return c.spacing(4)}};
    text-align: center;
    line-height: ${e=>{let{theme:c}=e;return c.typographies.h1.lineHeight}};
`,Oe.default.section`
    display: flex;
    padding: 100px 15px 50px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    align-self: stretch;

    background-image: url("/images/hero-background.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`),Lc=Oe.default.div`
    color: ${e=>{let{theme:c}=e;return c.colors.primary}};
`,Mc=Oe.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 60%;
`,Cc=Oe.default.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    align-self: stretch;
`,bc=Oe.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`,yc=()=>{const{t:e}=ac();return(0,tc.jsxs)(zc,{children:[(0,tc.jsx)(Cc,{children:(0,tc.jsxs)(Mc,{children:[(0,tc.jsxs)(Re.H1,{children:[e("pages.home.hero.title")," ",(0,tc.jsxs)(Lc,{children:[e("common.app-name")," "]})]}),(0,tc.jsx)(Re.P,{children:e("pages.home.hero.description")})]})}),(0,tc.jsxs)(bc,{children:[(0,tc.jsx)(Re.Button,{type:Re.Button.ButtonType.PRIMARY,children:e("pages.home.hero.buttons.get-started")}),(0,tc.jsx)(Re.Button,{type:Re.Button.ButtonType.TERTIARY,children:e("pages.home.hero.buttons.learn-more")})]})]})},xc=Oe.default.div`
    display: flex;
    padding: 50px 15px 100px;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    align-self: stretch;
`,vc=Oe.default.h2`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
`,Sc=(Oe.default.div`
    display: flex;
    padding: 0px 40px;
    justify-content: center;
    align-items: flex-start;
    gap: 40px;
`,Oe.default.button`
    border: none;
    cursor: pointer;
    background: none;
    color: ${e=>{let{theme:c,isActive:l}=e;return l?c.colors.textPrimary:c.colors.textSecondary}};
    font-family: ${e=>{let{theme:c}=e;return c.typographies.p.fontFamily}};
    font-size: ${e=>{let{theme:c}=e;return c.typographies.p.fontSize}};

    &:hover {
        color: ${e=>{let{theme:c}=e;return c.colors.primary}};
    }
`,Oe.default.img`
    border: ${e=>{let{theme:c}=e;return`1px solid ${c.colors.border}`}};
    border-radius: 50%;
    width: 24px;
`,Oe.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`),wc=Oe.default.div`
    display: flex;
    flex-direction: row;
    max-width: 521px;
    padding: 30px;
    gap: 24px;

    border-radius: ${e=>{let{theme:c}=e;return c.borderRadius}};
    border: 1px solid ${e=>{let{theme:c}=e;return c.colors.border}};
    box-shadow: ${e=>{let{theme:c}=e;return c.shadows.default}};
    background: ${e=>{let{theme:c}=e;return c.colors.background}};

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`,kc=Oe.default.div`
    display: flex;
    width: 200px;
    height: 200px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: ${e=>{let{theme:c}=e;return c.borderRadius}};
    background: url(${e=>{let{src:c}=e;return c}}) lightgray 50% / cover no-repeat;
`,Nc=Oe.default.div`
    display: flex;
    width: 237px;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    flex-shrink: 0;
`,Ac=Oe.default.div`
    display: flex;
    width: 237px;
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
`,Pc=Oe.default.div`
    display: flex;
    gap: 8px;
`,Tc=Oe.default.div`
    display: flex;
    align-items: flex-start;
    gap: 10px;
`,Ec=e=>{let{name:c,socials:l,image:a,description:t,badges:n}=e;return(0,tc.jsx)(Sc,{children:(0,tc.jsxs)(wc,{children:[(0,tc.jsx)(kc,{src:a}),(0,tc.jsxs)(Nc,{children:[(0,tc.jsxs)(Ac,{children:[(0,tc.jsx)(Re.H3,{children:c}),(0,tc.jsx)(Re.P,{children:t}),(0,tc.jsx)(Pc,{children:n&&n.map((e=>(0,tc.jsx)(Re.Badge,{type:Re.BadgeTypes.PILL,color:Re.BadgeColors.PRIMARY,size:Re.BadgeSizes.SMALL,children:e.text})))})]}),(0,tc.jsx)(Tc,{children:l.map((e=>(0,tc.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.logo})))})]})]})})},Oc=()=>{const{t:e}=ac(),c=[{name:"David Plouvier",image:"/images/teams/David.jpeg",description:"D\xe9veloppeur Fullstack",socials:[]},{name:"Simon Riembault",image:"/images/teams/Simon.jpeg",description:"D\xe9veloppeur Fullstack",socials:[]},{name:"Nathan Delenclos",image:"/images/teams/Nathan.jpeg",description:"D\xe9veloppeur Fullstack",badges:[{text:"Developer"}],socials:[]},{name:"Florian Minguet",image:"/images/teams/Florian.jpeg",description:"D\xe9veloppeur Fullstack",socials:[]}].map(((e,c)=>(0,tc.jsx)(Ec,{...e},c)));return(0,tc.jsxs)(xc,{children:[(0,tc.jsx)(vc,{children:(0,tc.jsx)(Re.H2,{children:e("pages.home.teams.title")})}),(0,tc.jsx)(Re.Slider,{elements:c})]})},_c=Oe.default.div`
    display: flex;
    padding: 100px 15px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    align-self: stretch;
`,Rc=Oe.default.div`
    display: flex;
    width: 70%;
    padding-bottom: 32px;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid ${e=>{let{theme:c}=e;return c.colors.border}};

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 16px;
    }
`,Dc=(0,Oe.default)(Re.H2)`
    width: 50%;
    text-align: left;
    @media (max-width: 768px) {
        width: 100%;
        text-align: center;
    }
`,Fc=(0,Oe.default)(Re.P)`
    width: 50%;
    text-align: left;
    @media (max-width: 768px) {
        width: 100%;
        text-align: center;
    }
`,Bc=Oe.default.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`,jc=Oe.default.img.attrs({src:"/images/feature-cover.png"})`
    width: 400px;
`,Hc=Oe.default.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
`,Ic=Oe.default.div`
    display: flex;
    width: 352px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
`,Uc=(0,Oe.default)(Re.P)`
    max-width: 352px;
    text-align: left;
`,$c=Oe.default.img.attrs({src:"/images/icons/check.svg"})`
    width: 16px;
    height: 16px;
    color: ${e=>{let{theme:c}=e;return c.colors.primary}};

    border: 1px solid ${e=>{let{theme:c}=e;return c.colors.primary}};
    border-radius: 50%;
`,Wc=()=>{const{t:e}=ac();return(0,tc.jsxs)(_c,{children:[(0,tc.jsxs)(Rc,{children:[(0,tc.jsx)(Dc,{children:e("pages.home.features.title")}),(0,tc.jsx)(Fc,{children:e("pages.home.features.description")})]}),(0,tc.jsxs)(Bc,{children:[(0,tc.jsx)(jc,{alt:"feature cover"}),(0,tc.jsxs)(Hc,{children:[(0,tc.jsxs)(Ic,{children:[(0,tc.jsxs)(Re.H3,{children:[(0,tc.jsx)($c,{})," ",e("pages.home.features.features.0.title")]}),(0,tc.jsx)(Uc,{children:e("pages.home.features.features.0.description")})]}),(0,tc.jsxs)(Ic,{children:[(0,tc.jsxs)(Re.H3,{children:[(0,tc.jsx)($c,{})," ",e("pages.home.features.features.1.title")]}),(0,tc.jsx)(Uc,{children:e("pages.home.features.features.1.description")})]})]}),(0,tc.jsxs)(Hc,{children:[(0,tc.jsxs)(Ic,{children:[(0,tc.jsxs)(Re.H3,{children:[(0,tc.jsx)($c,{})," ",e("pages.home.features.features.2.title")]}),(0,tc.jsx)(Uc,{children:e("pages.home.features.features.2.description")})]}),(0,tc.jsxs)(Ic,{children:[(0,tc.jsxs)(Re.H3,{children:[(0,tc.jsx)($c,{})," ",e("pages.home.features.features.3.title")]}),(0,tc.jsx)(Uc,{children:e("pages.home.features.features.3.description")})]})]})]})]})},Vc=()=>(0,tc.jsxs)(gc,{children:[(0,tc.jsx)(yc,{}),(0,tc.jsx)(Wc,{}),(0,tc.jsx)(Oc,{})]}),qc={index:{element:(0,tc.jsx)(hc,{}),path:"/",children:{home:{element:(0,tc.jsx)(Vc,{}),path:"",index:!0},about:{element:(0,tc.jsx)(Vc,{}),path:"about"},blog:{element:(0,tc.jsx)(Vc,{}),path:"blog"},dataBank:{element:(0,tc.jsx)(Vc,{}),path:"data-bank"}}}},Gc=(0,c.createContext)(void 0),Kc=e=>{let{children:l,defaultTheme:a}=e;const[t,n]=(0,c.useState)(a);return(0,tc.jsx)(Gc.Provider,{value:{theme:t,setTheme:n},children:(0,tc.jsx)(Oe.ThemeProvider,{theme:t,children:l})})},Qc=e=>Object.values(e).map(((e,c)=>e.children?(0,tc.jsx)(ze,{element:e.element,path:e.path,children:Qc(e.children).map((e=>e))},c):(0,tc.jsx)(ze,{index:e.index,element:e.element,path:e.path},c)));const Yc=function(){return c.useEffect((()=>{var e;dc.Ay.initialize(null!==(e="G-7XVLV051MJ")?e:""),(e=>{dc.Ay.send({hitType:"pageview",page:e})})(window.location.pathname+window.location.search)}),[]),(0,tc.jsx)(Kc,{defaultTheme:Re.defaultTheme,children:(0,tc.jsx)(ke,{children:(0,tc.jsx)(Me,{children:Qc(qc)})})})},Xc=e=>{e&&e instanceof Function&&l.e(453).then(l.bind(l,6453)).then((c=>{let{getCLS:l,getFID:a,getFCP:t,getLCP:n,getTTFB:r}=c;l(e),a(e),t(e),n(e),r(e)}))},Jc=e=>"string"===typeof e,Zc=()=>{let e,c;const l=new Promise(((l,a)=>{e=l,c=a}));return l.resolve=e,l.reject=c,l},el=e=>null==e?"":""+e,cl=/###/g,ll=e=>e&&e.indexOf("###")>-1?e.replace(cl,"."):e,al=e=>!e||Jc(e),tl=(e,c,l)=>{const a=Jc(c)?c.split("."):c;let t=0;for(;t<a.length-1;){if(al(e))return{};const c=ll(a[t]);!e[c]&&l&&(e[c]=new l),e=Object.prototype.hasOwnProperty.call(e,c)?e[c]:{},++t}return al(e)?{}:{obj:e,k:ll(a[t])}},nl=(e,c,l)=>{const{obj:a,k:t}=tl(e,c,Object);if(void 0!==a||1===c.length)return void(a[t]=l);let n=c[c.length-1],r=c.slice(0,c.length-1),s=tl(e,r,Object);for(;void 0===s.obj&&r.length;)n=`${r[r.length-1]}.${n}`,r=r.slice(0,r.length-1),s=tl(e,r,Object),s&&s.obj&&"undefined"!==typeof s.obj[`${s.k}.${n}`]&&(s.obj=void 0);s.obj[`${s.k}.${n}`]=l},rl=(e,c)=>{const{obj:l,k:a}=tl(e,c);if(l)return l[a]},sl=(e,c,l)=>{for(const a in c)"__proto__"!==a&&"constructor"!==a&&(a in e?Jc(e[a])||e[a]instanceof String||Jc(c[a])||c[a]instanceof String?l&&(e[a]=c[a]):sl(e[a],c[a],l):e[a]=c[a]);return e},il=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var ol={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const fl=e=>Jc(e)?e.replace(/[&<>"'\/]/g,(e=>ol[e])):e;const ul=[" ",",","?","!",";"],pl=new class{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const c=this.regExpMap.get(e);if(void 0!==c)return c;const l=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,l),this.regExpQueue.push(e),l}}(20),dl=function(e,c){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".";if(!e)return;if(e[c])return e[c];const a=c.split(l);let t=e;for(let n=0;n<a.length;){if(!t||"object"!==typeof t)return;let e,c="";for(let r=n;r<a.length;++r)if(r!==n&&(c+=l),c+=a[r],e=t[c],void 0!==e){if(["string","number","boolean"].indexOf(typeof e)>-1&&r<a.length-1)continue;n+=r-n+1;break}t=e}return t},ml=e=>e&&e.replace("_","-"),hl={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,c){console&&console[e]&&console[e].apply(console,c)}};class gl{constructor(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.init(e,c)}init(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=c.prefix||"i18next:",this.logger=e||hl,this.options=c,this.debug=c.debug}log(){for(var e=arguments.length,c=new Array(e),l=0;l<e;l++)c[l]=arguments[l];return this.forward(c,"log","",!0)}warn(){for(var e=arguments.length,c=new Array(e),l=0;l<e;l++)c[l]=arguments[l];return this.forward(c,"warn","",!0)}error(){for(var e=arguments.length,c=new Array(e),l=0;l<e;l++)c[l]=arguments[l];return this.forward(c,"error","")}deprecate(){for(var e=arguments.length,c=new Array(e),l=0;l<e;l++)c[l]=arguments[l];return this.forward(c,"warn","WARNING DEPRECATED: ",!0)}forward(e,c,l,a){return a&&!this.debug?null:(Jc(e[0])&&(e[0]=`${l}${this.prefix} ${e[0]}`),this.logger[c](e))}create(e){return new gl(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return(e=e||this.options).prefix=e.prefix||this.prefix,new gl(this.logger,e)}}var zl=new gl;class Ll{constructor(){this.observers={}}on(e,c){return e.split(" ").forEach((e=>{this.observers[e]||(this.observers[e]=new Map);const l=this.observers[e].get(c)||0;this.observers[e].set(c,l+1)})),this}off(e,c){this.observers[e]&&(c?this.observers[e].delete(c):delete this.observers[e])}emit(e){for(var c=arguments.length,l=new Array(c>1?c-1:0),a=1;a<c;a++)l[a-1]=arguments[a];if(this.observers[e]){Array.from(this.observers[e].entries()).forEach((e=>{let[c,a]=e;for(let t=0;t<a;t++)c(...l)}))}if(this.observers["*"]){Array.from(this.observers["*"].entries()).forEach((c=>{let[a,t]=c;for(let n=0;n<t;n++)a.apply(a,[e,...l])}))}}}class Ml extends Ll{constructor(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=c,void 0===this.options.keySeparator&&(this.options.keySeparator="."),void 0===this.options.ignoreJSONStructure&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const c=this.options.ns.indexOf(e);c>-1&&this.options.ns.splice(c,1)}getResource(e,c,l){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const t=void 0!==a.keySeparator?a.keySeparator:this.options.keySeparator,n=void 0!==a.ignoreJSONStructure?a.ignoreJSONStructure:this.options.ignoreJSONStructure;let r;e.indexOf(".")>-1?r=e.split("."):(r=[e,c],l&&(Array.isArray(l)?r.push(...l):Jc(l)&&t?r.push(...l.split(t)):r.push(l)));const s=rl(this.data,r);return!s&&!c&&!l&&e.indexOf(".")>-1&&(e=r[0],c=r[1],l=r.slice(2).join(".")),!s&&n&&Jc(l)?dl(this.data&&this.data[e]&&this.data[e][c],l,t):s}addResource(e,c,l,a){let t=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1};const n=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator;let r=[e,c];l&&(r=r.concat(n?l.split(n):l)),e.indexOf(".")>-1&&(r=e.split("."),a=c,c=r[1]),this.addNamespaces(c),nl(this.data,r,a),t.silent||this.emit("added",e,c,l,a)}addResources(e,c,l){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(const t in l)(Jc(l[t])||Array.isArray(l[t]))&&this.addResource(e,c,t,l[t],{silent:!0});a.silent||this.emit("added",e,c,l)}addResourceBundle(e,c,l,a,t){let n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1,skipCopy:!1},r=[e,c];e.indexOf(".")>-1&&(r=e.split("."),a=l,l=c,c=r[1]),this.addNamespaces(c);let s=rl(this.data,r)||{};n.skipCopy||(l=JSON.parse(JSON.stringify(l))),a?sl(s,l,t):s={...s,...l},nl(this.data,r,s),n.silent||this.emit("added",e,c,l)}removeResourceBundle(e,c){this.hasResourceBundle(e,c)&&delete this.data[e][c],this.removeNamespaces(c),this.emit("removed",e,c)}hasResourceBundle(e,c){return void 0!==this.getResource(e,c)}getResourceBundle(e,c){return c||(c=this.options.defaultNS),"v1"===this.options.compatibilityAPI?{...this.getResource(e,c)}:this.getResource(e,c)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const c=this.getDataByLanguage(e);return!!(c&&Object.keys(c)||[]).find((e=>c[e]&&Object.keys(c[e]).length>0))}toJSON(){return this.data}}var Cl={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,c,l,a,t){return e.forEach((e=>{this.processors[e]&&(c=this.processors[e].process(c,l,a,t))})),c}};const bl={};class yl extends Ll{constructor(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super(),((e,c,l)=>{e.forEach((e=>{c[e]&&(l[e]=c[e])}))})(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=c,void 0===this.options.keySeparator&&(this.options.keySeparator="."),this.logger=zl.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}};if(void 0===e||null===e)return!1;const l=this.resolve(e,c);return l&&void 0!==l.res}extractFromKey(e,c){let l=void 0!==c.nsSeparator?c.nsSeparator:this.options.nsSeparator;void 0===l&&(l=":");const a=void 0!==c.keySeparator?c.keySeparator:this.options.keySeparator;let t=c.ns||this.options.defaultNS||[];const n=l&&e.indexOf(l)>-1,r=!this.options.userDefinedKeySeparator&&!c.keySeparator&&!this.options.userDefinedNsSeparator&&!c.nsSeparator&&!((e,c,l)=>{c=c||"",l=l||"";const a=ul.filter((e=>c.indexOf(e)<0&&l.indexOf(e)<0));if(0===a.length)return!0;const t=pl.getRegExp(`(${a.map((e=>"?"===e?"\\?":e)).join("|")})`);let n=!t.test(e);if(!n){const c=e.indexOf(l);c>0&&!t.test(e.substring(0,c))&&(n=!0)}return n})(e,l,a);if(n&&!r){const c=e.match(this.interpolator.nestingRegexp);if(c&&c.length>0)return{key:e,namespaces:Jc(t)?[t]:t};const n=e.split(l);(l!==a||l===a&&this.options.ns.indexOf(n[0])>-1)&&(t=n.shift()),e=n.join(a)}return{key:e,namespaces:Jc(t)?[t]:t}}translate(e,c,l){if("object"!==typeof c&&this.options.overloadTranslationOptionHandler&&(c=this.options.overloadTranslationOptionHandler(arguments)),"object"===typeof c&&(c={...c}),c||(c={}),void 0===e||null===e)return"";Array.isArray(e)||(e=[String(e)]);const a=void 0!==c.returnDetails?c.returnDetails:this.options.returnDetails,t=void 0!==c.keySeparator?c.keySeparator:this.options.keySeparator,{key:n,namespaces:r}=this.extractFromKey(e[e.length-1],c),s=r[r.length-1],i=c.lng||this.language,o=c.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(i&&"cimode"===i.toLowerCase()){if(o){const e=c.nsSeparator||this.options.nsSeparator;return a?{res:`${s}${e}${n}`,usedKey:n,exactUsedKey:n,usedLng:i,usedNS:s,usedParams:this.getUsedParamsDetails(c)}:`${s}${e}${n}`}return a?{res:n,usedKey:n,exactUsedKey:n,usedLng:i,usedNS:s,usedParams:this.getUsedParamsDetails(c)}:n}const f=this.resolve(e,c);let u=f&&f.res;const p=f&&f.usedKey||n,d=f&&f.exactUsedKey||n,m=Object.prototype.toString.apply(u),h=void 0!==c.joinArrays?c.joinArrays:this.options.joinArrays,g=!this.i18nFormat||this.i18nFormat.handleAsObject,z=!Jc(u)&&"boolean"!==typeof u&&"number"!==typeof u;if(!(g&&u&&z&&["[object Number]","[object Function]","[object RegExp]"].indexOf(m)<0)||Jc(h)&&Array.isArray(u))if(g&&Jc(h)&&Array.isArray(u))u=u.join(h),u&&(u=this.extendTranslation(u,e,c,l));else{let a=!1,r=!1;const o=void 0!==c.count&&!Jc(c.count),p=yl.hasDefaultValue(c),d=o?this.pluralResolver.getSuffix(i,c.count,c):"",m=c.ordinal&&o?this.pluralResolver.getSuffix(i,c.count,{ordinal:!1}):"",h=o&&!c.ordinal&&0===c.count&&this.pluralResolver.shouldUseIntlApi(),g=h&&c[`defaultValue${this.options.pluralSeparator}zero`]||c[`defaultValue${d}`]||c[`defaultValue${m}`]||c.defaultValue;!this.isValidLookup(u)&&p&&(a=!0,u=g),this.isValidLookup(u)||(r=!0,u=n);const z=(c.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&r?void 0:u,L=p&&g!==u&&this.options.updateMissing;if(r||a||L){if(this.logger.log(L?"updateKey":"missingKey",i,s,n,L?g:u),t){const e=this.resolve(n,{...c,keySeparator:!1});e&&e.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let e=[];const l=this.languageUtils.getFallbackCodes(this.options.fallbackLng,c.lng||this.language);if("fallback"===this.options.saveMissingTo&&l&&l[0])for(let c=0;c<l.length;c++)e.push(l[c]);else"all"===this.options.saveMissingTo?e=this.languageUtils.toResolveHierarchy(c.lng||this.language):e.push(c.lng||this.language);const a=(e,l,a)=>{const t=p&&a!==u?a:z;this.options.missingKeyHandler?this.options.missingKeyHandler(e,s,l,t,L,c):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(e,s,l,t,L,c),this.emit("missingKey",e,s,l,u)};this.options.saveMissing&&(this.options.saveMissingPlurals&&o?e.forEach((e=>{const l=this.pluralResolver.getSuffixes(e,c);h&&c[`defaultValue${this.options.pluralSeparator}zero`]&&l.indexOf(`${this.options.pluralSeparator}zero`)<0&&l.push(`${this.options.pluralSeparator}zero`),l.forEach((l=>{a([e],n+l,c[`defaultValue${l}`]||g)}))})):a(e,n,g))}u=this.extendTranslation(u,e,c,f,l),r&&u===n&&this.options.appendNamespaceToMissingKey&&(u=`${s}:${n}`),(r||a)&&this.options.parseMissingKeyHandler&&(u="v1"!==this.options.compatibilityAPI?this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${s}:${n}`:n,a?u:void 0):this.options.parseMissingKeyHandler(u))}else{if(!c.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const e=this.options.returnedObjectHandler?this.options.returnedObjectHandler(p,u,{...c,ns:r}):`key '${n} (${this.language})' returned an object instead of string.`;return a?(f.res=e,f.usedParams=this.getUsedParamsDetails(c),f):e}if(t){const e=Array.isArray(u),l=e?[]:{},a=e?d:p;for(const n in u)if(Object.prototype.hasOwnProperty.call(u,n)){const e=`${a}${t}${n}`;l[n]=this.translate(e,{...c,joinArrays:!1,ns:r}),l[n]===e&&(l[n]=u[n])}u=l}}return a?(f.res=u,f.usedParams=this.getUsedParamsDetails(c),f):u}extendTranslation(e,c,l,a,t){var n=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...l},l.lng||this.language||a.usedLng,a.usedNS,a.usedKey,{resolved:a});else if(!l.skipInterpolation){l.interpolation&&this.interpolator.init({...l,interpolation:{...this.options.interpolation,...l.interpolation}});const r=Jc(e)&&(l&&l.interpolation&&void 0!==l.interpolation.skipOnVariables?l.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let s;if(r){const c=e.match(this.interpolator.nestingRegexp);s=c&&c.length}let i=l.replace&&!Jc(l.replace)?l.replace:l;if(this.options.interpolation.defaultVariables&&(i={...this.options.interpolation.defaultVariables,...i}),e=this.interpolator.interpolate(e,i,l.lng||this.language||a.usedLng,l),r){const c=e.match(this.interpolator.nestingRegexp);s<(c&&c.length)&&(l.nest=!1)}!l.lng&&"v1"!==this.options.compatibilityAPI&&a&&a.res&&(l.lng=this.language||a.usedLng),!1!==l.nest&&(e=this.interpolator.nest(e,(function(){for(var e=arguments.length,a=new Array(e),r=0;r<e;r++)a[r]=arguments[r];return t&&t[0]===a[0]&&!l.context?(n.logger.warn(`It seems you are nesting recursively key: ${a[0]} in key: ${c[0]}`),null):n.translate(...a,c)}),l)),l.interpolation&&this.interpolator.reset()}const r=l.postProcess||this.options.postProcess,s=Jc(r)?[r]:r;return void 0!==e&&null!==e&&s&&s.length&&!1!==l.applyPostProcessor&&(e=Cl.handle(s,e,c,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...a,usedParams:this.getUsedParamsDetails(l)},...l}:l,this)),e}resolve(e){let c,l,a,t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Jc(e)&&(e=[e]),e.forEach((e=>{if(this.isValidLookup(c))return;const s=this.extractFromKey(e,r),i=s.key;l=i;let o=s.namespaces;this.options.fallbackNS&&(o=o.concat(this.options.fallbackNS));const f=void 0!==r.count&&!Jc(r.count),u=f&&!r.ordinal&&0===r.count&&this.pluralResolver.shouldUseIntlApi(),p=void 0!==r.context&&(Jc(r.context)||"number"===typeof r.context)&&""!==r.context,d=r.lngs?r.lngs:this.languageUtils.toResolveHierarchy(r.lng||this.language,r.fallbackLng);o.forEach((e=>{this.isValidLookup(c)||(n=e,!bl[`${d[0]}-${e}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(n)&&(bl[`${d[0]}-${e}`]=!0,this.logger.warn(`key "${l}" for languages "${d.join(", ")}" won't get resolved as namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),d.forEach((l=>{if(this.isValidLookup(c))return;t=l;const n=[i];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(n,i,l,e,r);else{let e;f&&(e=this.pluralResolver.getSuffix(l,r.count,r));const c=`${this.options.pluralSeparator}zero`,a=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(f&&(n.push(i+e),r.ordinal&&0===e.indexOf(a)&&n.push(i+e.replace(a,this.options.pluralSeparator)),u&&n.push(i+c)),p){const l=`${i}${this.options.contextSeparator}${r.context}`;n.push(l),f&&(n.push(l+e),r.ordinal&&0===e.indexOf(a)&&n.push(l+e.replace(a,this.options.pluralSeparator)),u&&n.push(l+c))}}let s;for(;s=n.pop();)this.isValidLookup(c)||(a=s,c=this.getResource(l,e,s,r))})))}))})),{res:c,usedKey:l,exactUsedKey:a,usedLng:t,usedNS:n}}isValidLookup(e){return void 0!==e&&!(!this.options.returnNull&&null===e)&&!(!this.options.returnEmptyString&&""===e)}getResource(e,c,l){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,c,l,a):this.resourceStore.getResource(e,c,l,a)}getUsedParamsDetails(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const c=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],l=e.replace&&!Jc(e.replace);let a=l?e.replace:e;if(l&&"undefined"!==typeof e.count&&(a.count=e.count),this.options.interpolation.defaultVariables&&(a={...this.options.interpolation.defaultVariables,...a}),!l){a={...a};for(const e of c)delete a[e]}return a}static hasDefaultValue(e){const c="defaultValue";for(const l in e)if(Object.prototype.hasOwnProperty.call(e,l)&&c===l.substring(0,12)&&void 0!==e[l])return!0;return!1}}const xl=e=>e.charAt(0).toUpperCase()+e.slice(1);class vl{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=zl.create("languageUtils")}getScriptPartFromCode(e){if(!(e=ml(e))||e.indexOf("-")<0)return null;const c=e.split("-");return 2===c.length?null:(c.pop(),"x"===c[c.length-1].toLowerCase()?null:this.formatLanguageCode(c.join("-")))}getLanguagePartFromCode(e){if(!(e=ml(e))||e.indexOf("-")<0)return e;const c=e.split("-");return this.formatLanguageCode(c[0])}formatLanguageCode(e){if(Jc(e)&&e.indexOf("-")>-1){if("undefined"!==typeof Intl&&"undefined"!==typeof Intl.getCanonicalLocales)try{let c=Intl.getCanonicalLocales(e)[0];if(c&&this.options.lowerCaseLng&&(c=c.toLowerCase()),c)return c}catch(sa){}const c=["hans","hant","latn","cyrl","cans","mong","arab"];let l=e.split("-");return this.options.lowerCaseLng?l=l.map((e=>e.toLowerCase())):2===l.length?(l[0]=l[0].toLowerCase(),l[1]=l[1].toUpperCase(),c.indexOf(l[1].toLowerCase())>-1&&(l[1]=xl(l[1].toLowerCase()))):3===l.length&&(l[0]=l[0].toLowerCase(),2===l[1].length&&(l[1]=l[1].toUpperCase()),"sgn"!==l[0]&&2===l[2].length&&(l[2]=l[2].toUpperCase()),c.indexOf(l[1].toLowerCase())>-1&&(l[1]=xl(l[1].toLowerCase())),c.indexOf(l[2].toLowerCase())>-1&&(l[2]=xl(l[2].toLowerCase()))),l.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return("languageOnly"===this.options.load||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let c;return e.forEach((e=>{if(c)return;const l=this.formatLanguageCode(e);this.options.supportedLngs&&!this.isSupportedCode(l)||(c=l)})),!c&&this.options.supportedLngs&&e.forEach((e=>{if(c)return;const l=this.getLanguagePartFromCode(e);if(this.isSupportedCode(l))return c=l;c=this.options.supportedLngs.find((e=>e===l?e:e.indexOf("-")<0&&l.indexOf("-")<0?void 0:e.indexOf("-")>0&&l.indexOf("-")<0&&e.substring(0,e.indexOf("-"))===l||0===e.indexOf(l)&&l.length>1?e:void 0))})),c||(c=this.getFallbackCodes(this.options.fallbackLng)[0]),c}getFallbackCodes(e,c){if(!e)return[];if("function"===typeof e&&(e=e(c)),Jc(e)&&(e=[e]),Array.isArray(e))return e;if(!c)return e.default||[];let l=e[c];return l||(l=e[this.getScriptPartFromCode(c)]),l||(l=e[this.formatLanguageCode(c)]),l||(l=e[this.getLanguagePartFromCode(c)]),l||(l=e.default),l||[]}toResolveHierarchy(e,c){const l=this.getFallbackCodes(c||this.options.fallbackLng||[],e),a=[],t=e=>{e&&(this.isSupportedCode(e)?a.push(e):this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))};return Jc(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?("languageOnly"!==this.options.load&&t(this.formatLanguageCode(e)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&t(this.getScriptPartFromCode(e)),"currentOnly"!==this.options.load&&t(this.getLanguagePartFromCode(e))):Jc(e)&&t(this.formatLanguageCode(e)),l.forEach((e=>{a.indexOf(e)<0&&t(this.formatLanguageCode(e))})),a}}let Sl=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],wl={1:e=>Number(e>1),2:e=>Number(1!=e),3:e=>0,4:e=>Number(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2),5:e=>Number(0==e?0:1==e?1:2==e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5),6:e=>Number(1==e?0:e>=2&&e<=4?1:2),7:e=>Number(1==e?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2),8:e=>Number(1==e?0:2==e?1:8!=e&&11!=e?2:3),9:e=>Number(e>=2),10:e=>Number(1==e?0:2==e?1:e<7?2:e<11?3:4),11:e=>Number(1==e||11==e?0:2==e||12==e?1:e>2&&e<20?2:3),12:e=>Number(e%10!=1||e%100==11),13:e=>Number(0!==e),14:e=>Number(1==e?0:2==e?1:3==e?2:3),15:e=>Number(e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2),16:e=>Number(e%10==1&&e%100!=11?0:0!==e?1:2),17:e=>Number(1==e||e%10==1&&e%100!=11?0:1),18:e=>Number(0==e?0:1==e?1:2),19:e=>Number(1==e?0:0==e||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3),20:e=>Number(1==e?0:0==e||e%100>0&&e%100<20?1:2),21:e=>Number(e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0),22:e=>Number(1==e?0:2==e?1:(e<0||e>10)&&e%10==0?2:3)};const kl=["v1","v2","v3"],Nl=["v4"],Al={zero:0,one:1,two:2,few:3,many:4,other:5};class Pl{constructor(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.languageUtils=e,this.options=c,this.logger=zl.create("pluralResolver"),this.options.compatibilityJSON&&!Nl.includes(this.options.compatibilityJSON)||"undefined"!==typeof Intl&&Intl.PluralRules||(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=(()=>{const e={};return Sl.forEach((c=>{c.lngs.forEach((l=>{e[l]={numbers:c.nr,plurals:wl[c.fc]}}))})),e})(),this.pluralRulesCache={}}addRule(e,c){this.rules[e]=c}clearCache(){this.pluralRulesCache={}}getRule(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this.shouldUseIntlApi()){const a=ml("dev"===e?"en":e),t=c.ordinal?"ordinal":"cardinal",n=JSON.stringify({cleanedCode:a,type:t});if(n in this.pluralRulesCache)return this.pluralRulesCache[n];let r;try{r=new Intl.PluralRules(a,{type:t})}catch(l){if(!e.match(/-|_/))return;const a=this.languageUtils.getLanguagePartFromCode(e);r=this.getRule(a,c)}return this.pluralRulesCache[n]=r,r}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const l=this.getRule(e,c);return this.shouldUseIntlApi()?l&&l.resolvedOptions().pluralCategories.length>1:l&&l.numbers.length>1}getPluralFormsOfKey(e,c){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.getSuffixes(e,l).map((e=>`${c}${e}`))}getSuffixes(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const l=this.getRule(e,c);return l?this.shouldUseIntlApi()?l.resolvedOptions().pluralCategories.sort(((e,c)=>Al[e]-Al[c])).map((e=>`${this.options.prepend}${c.ordinal?`ordinal${this.options.prepend}`:""}${e}`)):l.numbers.map((l=>this.getSuffix(e,l,c))):[]}getSuffix(e,c){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=this.getRule(e,l);return a?this.shouldUseIntlApi()?`${this.options.prepend}${l.ordinal?`ordinal${this.options.prepend}`:""}${a.select(c)}`:this.getSuffixRetroCompatible(a,c):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,c){const l=e.noAbs?e.plurals(c):e.plurals(Math.abs(c));let a=e.numbers[l];this.options.simplifyPluralSuffix&&2===e.numbers.length&&1===e.numbers[0]&&(2===a?a="plural":1===a&&(a=""));const t=()=>this.options.prepend&&a.toString()?this.options.prepend+a.toString():a.toString();return"v1"===this.options.compatibilityJSON?1===a?"":"number"===typeof a?`_plural_${a.toString()}`:t():"v2"===this.options.compatibilityJSON||this.options.simplifyPluralSuffix&&2===e.numbers.length&&1===e.numbers[0]?t():this.options.prepend&&l.toString()?this.options.prepend+l.toString():l.toString()}shouldUseIntlApi(){return!kl.includes(this.options.compatibilityJSON)}}const Tl=function(e,c,l){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".",t=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],n=((e,c,l)=>{const a=rl(e,l);return void 0!==a?a:rl(c,l)})(e,c,l);return!n&&t&&Jc(l)&&(n=dl(e,l,a),void 0===n&&(n=dl(c,l,a))),n},El=e=>e.replace(/\$/g,"$$$$");class Ol{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.logger=zl.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(e=>e),this.init(e)}init(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:c,escapeValue:l,useRawValueToEscape:a,prefix:t,prefixEscaped:n,suffix:r,suffixEscaped:s,formatSeparator:i,unescapeSuffix:o,unescapePrefix:f,nestingPrefix:u,nestingPrefixEscaped:p,nestingSuffix:d,nestingSuffixEscaped:m,nestingOptionsSeparator:h,maxReplaces:g,alwaysFormat:z}=e.interpolation;this.escape=void 0!==c?c:fl,this.escapeValue=void 0===l||l,this.useRawValueToEscape=void 0!==a&&a,this.prefix=t?il(t):n||"{{",this.suffix=r?il(r):s||"}}",this.formatSeparator=i||",",this.unescapePrefix=o?"":f||"-",this.unescapeSuffix=this.unescapePrefix?"":o||"",this.nestingPrefix=u?il(u):p||il("$t("),this.nestingSuffix=d?il(d):m||il(")"),this.nestingOptionsSeparator=h||",",this.maxReplaces=g||1e3,this.alwaysFormat=void 0!==z&&z,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(e,c)=>e&&e.source===c?(e.lastIndex=0,e):new RegExp(c,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,c,l,a){let t,n,r;const s=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},i=e=>{if(e.indexOf(this.formatSeparator)<0){const t=Tl(c,s,e,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(t,void 0,l,{...a,...c,interpolationkey:e}):t}const t=e.split(this.formatSeparator),n=t.shift().trim(),r=t.join(this.formatSeparator).trim();return this.format(Tl(c,s,n,this.options.keySeparator,this.options.ignoreJSONStructure),r,l,{...a,...c,interpolationkey:n})};this.resetRegExp();const o=a&&a.missingInterpolationHandler||this.options.missingInterpolationHandler,f=a&&a.interpolation&&void 0!==a.interpolation.skipOnVariables?a.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:e=>El(e)},{regex:this.regexp,safeValue:e=>this.escapeValue?El(this.escape(e)):El(e)}].forEach((c=>{for(r=0;t=c.regex.exec(e);){const l=t[1].trim();if(n=i(l),void 0===n)if("function"===typeof o){const c=o(e,t,a);n=Jc(c)?c:""}else if(a&&Object.prototype.hasOwnProperty.call(a,l))n="";else{if(f){n=t[0];continue}this.logger.warn(`missed to pass in variable ${l} for interpolating ${e}`),n=""}else Jc(n)||this.useRawValueToEscape||(n=el(n));const s=c.safeValue(n);if(e=e.replace(t[0],s),f?(c.regex.lastIndex+=n.length,c.regex.lastIndex-=t[0].length):c.regex.lastIndex=0,r++,r>=this.maxReplaces)break}})),e}nest(e,c){let l,a,t,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=(e,c)=>{const l=this.nestingOptionsSeparator;if(e.indexOf(l)<0)return e;const a=e.split(new RegExp(`${l}[ ]*{`));let n=`{${a[1]}`;e=a[0],n=this.interpolate(n,t);const r=n.match(/'/g),s=n.match(/"/g);(r&&r.length%2===0&&!s||s.length%2!==0)&&(n=n.replace(/'/g,'"'));try{t=JSON.parse(n),c&&(t={...c,...t})}catch(sa){return this.logger.warn(`failed parsing options string in nesting for key ${e}`,sa),`${e}${l}${n}`}return t.defaultValue&&t.defaultValue.indexOf(this.prefix)>-1&&delete t.defaultValue,e};for(;l=this.nestingRegexp.exec(e);){let s=[];t={...n},t=t.replace&&!Jc(t.replace)?t.replace:t,t.applyPostProcessor=!1,delete t.defaultValue;let i=!1;if(-1!==l[0].indexOf(this.formatSeparator)&&!/{.*}/.test(l[1])){const e=l[1].split(this.formatSeparator).map((e=>e.trim()));l[1]=e.shift(),s=e,i=!0}if(a=c(r.call(this,l[1].trim(),t),t),a&&l[0]===e&&!Jc(a))return a;Jc(a)||(a=el(a)),a||(this.logger.warn(`missed to resolve ${l[1]} for nesting ${e}`),a=""),i&&(a=s.reduce(((e,c)=>this.format(e,c,n.lng,{...n,interpolationkey:l[1].trim()})),a.trim())),e=e.replace(l[0],a),this.regexp.lastIndex=0}return e}}const _l=e=>{const c={};return(l,a,t)=>{let n=t;t&&t.interpolationkey&&t.formatParams&&t.formatParams[t.interpolationkey]&&t[t.interpolationkey]&&(n={...n,[t.interpolationkey]:void 0});const r=a+JSON.stringify(n);let s=c[r];return s||(s=e(ml(a),t),c[r]=s),s(l)}};class Rl{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.logger=zl.create("formatter"),this.options=e,this.formats={number:_l(((e,c)=>{const l=new Intl.NumberFormat(e,{...c});return e=>l.format(e)})),currency:_l(((e,c)=>{const l=new Intl.NumberFormat(e,{...c,style:"currency"});return e=>l.format(e)})),datetime:_l(((e,c)=>{const l=new Intl.DateTimeFormat(e,{...c});return e=>l.format(e)})),relativetime:_l(((e,c)=>{const l=new Intl.RelativeTimeFormat(e,{...c});return e=>l.format(e,c.range||"day")})),list:_l(((e,c)=>{const l=new Intl.ListFormat(e,{...c});return e=>l.format(e)}))},this.init(e)}init(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}};this.formatSeparator=c.interpolation.formatSeparator||","}add(e,c){this.formats[e.toLowerCase().trim()]=c}addCached(e,c){this.formats[e.toLowerCase().trim()]=_l(c)}format(e,c,l){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const t=c.split(this.formatSeparator);if(t.length>1&&t[0].indexOf("(")>1&&t[0].indexOf(")")<0&&t.find((e=>e.indexOf(")")>-1))){const e=t.findIndex((e=>e.indexOf(")")>-1));t[0]=[t[0],...t.splice(1,e)].join(this.formatSeparator)}return t.reduce(((e,c)=>{const{formatName:t,formatOptions:n}=(e=>{let c=e.toLowerCase().trim();const l={};if(e.indexOf("(")>-1){const a=e.split("(");c=a[0].toLowerCase().trim();const t=a[1].substring(0,a[1].length-1);"currency"===c&&t.indexOf(":")<0?l.currency||(l.currency=t.trim()):"relativetime"===c&&t.indexOf(":")<0?l.range||(l.range=t.trim()):t.split(";").forEach((e=>{if(e){const[c,...a]=e.split(":"),t=a.join(":").trim().replace(/^'+|'+$/g,""),n=c.trim();l[n]||(l[n]=t),"false"===t&&(l[n]=!1),"true"===t&&(l[n]=!0),isNaN(t)||(l[n]=parseInt(t,10))}}))}return{formatName:c,formatOptions:l}})(c);if(this.formats[t]){let c=e;try{const r=a&&a.formatParams&&a.formatParams[a.interpolationkey]||{},s=r.locale||r.lng||a.locale||a.lng||l;c=this.formats[t](e,s,{...n,...a,...r})}catch(r){this.logger.warn(r)}return c}return this.logger.warn(`there was no format function for ${t}`),e}),e)}}class Dl extends Ll{constructor(e,c,l){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};super(),this.backend=e,this.store=c,this.services=l,this.languageUtils=l.languageUtils,this.options=a,this.logger=zl.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=a.maxParallelReads||10,this.readingCalls=0,this.maxRetries=a.maxRetries>=0?a.maxRetries:5,this.retryTimeout=a.retryTimeout>=1?a.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(l,a.backend,a)}queueLoad(e,c,l,a){const t={},n={},r={},s={};return e.forEach((e=>{let a=!0;c.forEach((c=>{const r=`${e}|${c}`;!l.reload&&this.store.hasResourceBundle(e,c)?this.state[r]=2:this.state[r]<0||(1===this.state[r]?void 0===n[r]&&(n[r]=!0):(this.state[r]=1,a=!1,void 0===n[r]&&(n[r]=!0),void 0===t[r]&&(t[r]=!0),void 0===s[c]&&(s[c]=!0)))})),a||(r[e]=!0)})),(Object.keys(t).length||Object.keys(n).length)&&this.queue.push({pending:n,pendingCount:Object.keys(n).length,loaded:{},errors:[],callback:a}),{toLoad:Object.keys(t),pending:Object.keys(n),toLoadLanguages:Object.keys(r),toLoadNamespaces:Object.keys(s)}}loaded(e,c,l){const a=e.split("|"),t=a[0],n=a[1];c&&this.emit("failedLoading",t,n,c),!c&&l&&this.store.addResourceBundle(t,n,l,void 0,void 0,{skipCopy:!0}),this.state[e]=c?-1:2,c&&l&&(this.state[e]=0);const r={};this.queue.forEach((l=>{((e,c,l)=>{const{obj:a,k:t}=tl(e,c,Object);a[t]=a[t]||[],a[t].push(l)})(l.loaded,[t],n),((e,c)=>{void 0!==e.pending[c]&&(delete e.pending[c],e.pendingCount--)})(l,e),c&&l.errors.push(c),0!==l.pendingCount||l.done||(Object.keys(l.loaded).forEach((e=>{r[e]||(r[e]={});const c=l.loaded[e];c.length&&c.forEach((c=>{void 0===r[e][c]&&(r[e][c]=!0)}))})),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())})),this.emit("loaded",r),this.queue=this.queue.filter((e=>!e.done))}read(e,c,l){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,t=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.retryTimeout,n=arguments.length>5?arguments[5]:void 0;if(!e.length)return n(null,{});if(this.readingCalls>=this.maxParallelReads)return void this.waitingReads.push({lng:e,ns:c,fcName:l,tried:a,wait:t,callback:n});this.readingCalls++;const r=(r,s)=>{if(this.readingCalls--,this.waitingReads.length>0){const e=this.waitingReads.shift();this.read(e.lng,e.ns,e.fcName,e.tried,e.wait,e.callback)}r&&s&&a<this.maxRetries?setTimeout((()=>{this.read.call(this,e,c,l,a+1,2*t,n)}),t):n(r,s)},s=this.backend[l].bind(this.backend);if(2!==s.length)return s(e,c,r);try{const l=s(e,c);l&&"function"===typeof l.then?l.then((e=>r(null,e))).catch(r):r(null,l)}catch(i){r(i)}}prepareLoading(e,c){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),a&&a();Jc(e)&&(e=this.languageUtils.toResolveHierarchy(e)),Jc(c)&&(c=[c]);const t=this.queueLoad(e,c,l,a);if(!t.toLoad.length)return t.pending.length||a(),null;t.toLoad.forEach((e=>{this.loadOne(e)}))}load(e,c,l){this.prepareLoading(e,c,{},l)}reload(e,c,l){this.prepareLoading(e,c,{reload:!0},l)}loadOne(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const l=e.split("|"),a=l[0],t=l[1];this.read(a,t,"read",void 0,void 0,((l,n)=>{l&&this.logger.warn(`${c}loading namespace ${t} for language ${a} failed`,l),!l&&n&&this.logger.log(`${c}loaded namespace ${t} for language ${a}`,n),this.loaded(e,l,n)}))}saveMissing(e,c,l,a,t){let n=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(c))this.logger.warn(`did not save key "${l}" as the namespace "${c}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");else if(void 0!==l&&null!==l&&""!==l){if(this.backend&&this.backend.create){const i={...n,isUpdate:t},o=this.backend.create.bind(this.backend);if(o.length<6)try{let t;t=5===o.length?o(e,c,l,a,i):o(e,c,l,a),t&&"function"===typeof t.then?t.then((e=>r(null,e))).catch(r):r(null,t)}catch(s){r(s)}else o(e,c,l,a,r,i)}e&&e[0]&&this.store.addResource(e[0],c,l,a)}}}const Fl=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let c={};if("object"===typeof e[1]&&(c=e[1]),Jc(e[1])&&(c.defaultValue=e[1]),Jc(e[2])&&(c.tDescription=e[2]),"object"===typeof e[2]||"object"===typeof e[3]){const l=e[3]||e[2];Object.keys(l).forEach((e=>{c[e]=l[e]}))}return c},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Bl=e=>(Jc(e.ns)&&(e.ns=[e.ns]),Jc(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),Jc(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e),jl=()=>{};class Hl extends Ll{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=arguments.length>1?arguments[1]:void 0;var l;if(super(),this.options=Bl(e),this.services={},this.logger=zl,this.modules={external:[]},l=this,Object.getOwnPropertyNames(Object.getPrototypeOf(l)).forEach((e=>{"function"===typeof l[e]&&(l[e]=l[e].bind(l))})),c&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,c),this;setTimeout((()=>{this.init(e,c)}),0)}}init(){var e=this;let c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,"function"===typeof c&&(l=c,c={}),!c.defaultNS&&!1!==c.defaultNS&&c.ns&&(Jc(c.ns)?c.defaultNS=c.ns:c.ns.indexOf("translation")<0&&(c.defaultNS=c.ns[0]));const a=Fl();this.options={...a,...this.options,...Bl(c)},"v1"!==this.options.compatibilityAPI&&(this.options.interpolation={...a.interpolation,...this.options.interpolation}),void 0!==c.keySeparator&&(this.options.userDefinedKeySeparator=c.keySeparator),void 0!==c.nsSeparator&&(this.options.userDefinedNsSeparator=c.nsSeparator);const t=e=>e?"function"===typeof e?new e:e:null;if(!this.options.isClone){let c;this.modules.logger?zl.init(t(this.modules.logger),this.options):zl.init(null,this.options),this.modules.formatter?c=this.modules.formatter:"undefined"!==typeof Intl&&(c=Rl);const l=new vl(this.options);this.store=new Ml(this.options.resources,this.options);const n=this.services;n.logger=zl,n.resourceStore=this.store,n.languageUtils=l,n.pluralResolver=new Pl(l,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),!c||this.options.interpolation.format&&this.options.interpolation.format!==a.interpolation.format||(n.formatter=t(c),n.formatter.init(n,this.options),this.options.interpolation.format=n.formatter.format.bind(n.formatter)),n.interpolator=new Ol(this.options),n.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},n.backendConnector=new Dl(t(this.modules.backend),n.resourceStore,n,this.options),n.backendConnector.on("*",(function(c){for(var l=arguments.length,a=new Array(l>1?l-1:0),t=1;t<l;t++)a[t-1]=arguments[t];e.emit(c,...a)})),this.modules.languageDetector&&(n.languageDetector=t(this.modules.languageDetector),n.languageDetector.init&&n.languageDetector.init(n,this.options.detection,this.options)),this.modules.i18nFormat&&(n.i18nFormat=t(this.modules.i18nFormat),n.i18nFormat.init&&n.i18nFormat.init(this)),this.translator=new yl(this.services,this.options),this.translator.on("*",(function(c){for(var l=arguments.length,a=new Array(l>1?l-1:0),t=1;t<l;t++)a[t-1]=arguments[t];e.emit(c,...a)})),this.modules.external.forEach((e=>{e.init&&e.init(this)}))}if(this.format=this.options.interpolation.format,l||(l=jl),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const e=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);e.length>0&&"dev"!==e[0]&&(this.options.lng=e[0])}this.services.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined");["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach((c=>{this[c]=function(){return e.store[c](...arguments)}}));["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach((c=>{this[c]=function(){return e.store[c](...arguments),e}}));const n=Zc(),r=()=>{const e=(e,c)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),n.resolve(c),l(e,c)};if(this.languages&&"v1"!==this.options.compatibilityAPI&&!this.isInitialized)return e(null,this.t.bind(this));this.changeLanguage(this.options.lng,e)};return this.options.resources||!this.options.initImmediate?r():setTimeout(r,0),n}loadResources(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:jl;const l=Jc(e)?e:this.language;if("function"===typeof e&&(c=e),!this.options.resources||this.options.partialBundledLanguages){if(l&&"cimode"===l.toLowerCase()&&(!this.options.preload||0===this.options.preload.length))return c();const e=[],a=c=>{if(!c)return;if("cimode"===c)return;this.services.languageUtils.toResolveHierarchy(c).forEach((c=>{"cimode"!==c&&e.indexOf(c)<0&&e.push(c)}))};if(l)a(l);else{this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((e=>a(e)))}this.options.preload&&this.options.preload.forEach((e=>a(e))),this.services.backendConnector.load(e,this.options.ns,(e=>{e||this.resolvedLanguage||!this.language||this.setResolvedLanguage(this.language),c(e)}))}else c(null)}reloadResources(e,c,l){const a=Zc();return"function"===typeof e&&(l=e,e=void 0),"function"===typeof c&&(l=c,c=void 0),e||(e=this.languages),c||(c=this.options.ns),l||(l=jl),this.services.backendConnector.reload(e,c,(e=>{a.resolve(),l(e)})),a}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===e.type&&(this.modules.backend=e),("logger"===e.type||e.log&&e.warn&&e.error)&&(this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"i18nFormat"===e.type&&(this.modules.i18nFormat=e),"postProcessor"===e.type&&Cl.addPostProcessor(e),"formatter"===e.type&&(this.modules.formatter=e),"3rdParty"===e.type&&this.modules.external.push(e),this}setResolvedLanguage(e){if(e&&this.languages&&!(["cimode","dev"].indexOf(e)>-1))for(let c=0;c<this.languages.length;c++){const e=this.languages[c];if(!(["cimode","dev"].indexOf(e)>-1)&&this.store.hasLanguageSomeTranslations(e)){this.resolvedLanguage=e;break}}}changeLanguage(e,c){var l=this;this.isLanguageChangingTo=e;const a=Zc();this.emit("languageChanging",e);const t=e=>{this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.resolvedLanguage=void 0,this.setResolvedLanguage(e)},n=(e,n)=>{n?(t(n),this.translator.changeLanguage(n),this.isLanguageChangingTo=void 0,this.emit("languageChanged",n),this.logger.log("languageChanged",n)):this.isLanguageChangingTo=void 0,a.resolve((function(){return l.t(...arguments)})),c&&c(e,(function(){return l.t(...arguments)}))},r=c=>{e||c||!this.services.languageDetector||(c=[]);const l=Jc(c)?c:this.services.languageUtils.getBestMatchFromCodes(c);l&&(this.language||t(l),this.translator.language||this.translator.changeLanguage(l),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(l)),this.loadResources(l,(e=>{n(e,l)}))};return e||!this.services.languageDetector||this.services.languageDetector.async?!e&&this.services.languageDetector&&this.services.languageDetector.async?0===this.services.languageDetector.detect.length?this.services.languageDetector.detect().then(r):this.services.languageDetector.detect(r):r(e):r(this.services.languageDetector.detect()),a}getFixedT(e,c,l){var a=this;const t=function(e,c){let n;if("object"!==typeof c){for(var r=arguments.length,s=new Array(r>2?r-2:0),i=2;i<r;i++)s[i-2]=arguments[i];n=a.options.overloadTranslationOptionHandler([e,c].concat(s))}else n={...c};n.lng=n.lng||t.lng,n.lngs=n.lngs||t.lngs,n.ns=n.ns||t.ns,""!==n.keyPrefix&&(n.keyPrefix=n.keyPrefix||l||t.keyPrefix);const o=a.options.keySeparator||".";let f;return f=n.keyPrefix&&Array.isArray(e)?e.map((e=>`${n.keyPrefix}${o}${e}`)):n.keyPrefix?`${n.keyPrefix}${o}${e}`:e,a.t(f,n)};return Jc(e)?t.lng=e:t.lngs=e,t.ns=c,t.keyPrefix=l,t}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const l=c.lng||this.resolvedLanguage||this.languages[0],a=!!this.options&&this.options.fallbackLng,t=this.languages[this.languages.length-1];if("cimode"===l.toLowerCase())return!0;const n=(e,c)=>{const l=this.services.backendConnector.state[`${e}|${c}`];return-1===l||0===l||2===l};if(c.precheck){const e=c.precheck(this,n);if(void 0!==e)return e}return!!this.hasResourceBundle(l,e)||(!(this.services.backendConnector.backend&&(!this.options.resources||this.options.partialBundledLanguages))||!(!n(l,e)||a&&!n(t,e)))}loadNamespaces(e,c){const l=Zc();return this.options.ns?(Jc(e)&&(e=[e]),e.forEach((e=>{this.options.ns.indexOf(e)<0&&this.options.ns.push(e)})),this.loadResources((e=>{l.resolve(),c&&c(e)})),l):(c&&c(),Promise.resolve())}loadLanguages(e,c){const l=Zc();Jc(e)&&(e=[e]);const a=this.options.preload||[],t=e.filter((e=>a.indexOf(e)<0&&this.services.languageUtils.isSupportedCode(e)));return t.length?(this.options.preload=a.concat(t),this.loadResources((e=>{l.resolve(),c&&c(e)})),l):(c&&c(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const c=this.services&&this.services.languageUtils||new vl(Fl());return["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"].indexOf(c.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){return new Hl(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments.length>1?arguments[1]:void 0)}cloneInstance(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:jl;const l=e.forkResourceStore;l&&delete e.forkResourceStore;const a={...this.options,...e,isClone:!0},t=new Hl(a);void 0===e.debug&&void 0===e.prefix||(t.logger=t.logger.clone(e));return["store","services","language"].forEach((e=>{t[e]=this[e]})),t.services={...this.services},t.services.utils={hasLoadedNamespace:t.hasLoadedNamespace.bind(t)},l&&(t.store=new Ml(this.store.data,a),t.services.resourceStore=t.store),t.translator=new yl(t.services,a),t.translator.on("*",(function(e){for(var c=arguments.length,l=new Array(c>1?c-1:0),a=1;a<c;a++)l[a-1]=arguments[a];t.emit(e,...l)})),t.init(a,c),t.translator.options=a,t.translator.backendConnector.services.utils={hasLoadedNamespace:t.hasLoadedNamespace.bind(t)},t}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Il=Hl.createInstance();Il.createInstance=Hl.createInstance;Il.createInstance,Il.dir,Il.init,Il.loadResources,Il.reloadResources,Il.use,Il.changeLanguage,Il.getFixedT,Il.t,Il.exists,Il.setDefaultNamespace,Il.hasLoadedNamespace,Il.loadNamespaces,Il.loadLanguages;const{slice:Ul,forEach:$l}=[];const Wl=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,Vl={create(e,c,l,a){let t=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{path:"/",sameSite:"strict"};l&&(t.expires=new Date,t.expires.setTime(t.expires.getTime()+60*l*1e3)),a&&(t.domain=a),document.cookie=((e,c,l)=>{const a=l||{};a.path=a.path||"/";let t=`${e}=${encodeURIComponent(c)}`;if(a.maxAge>0){const e=a.maxAge-0;if(Number.isNaN(e))throw new Error("maxAge should be a Number");t+=`; Max-Age=${Math.floor(e)}`}if(a.domain){if(!Wl.test(a.domain))throw new TypeError("option domain is invalid");t+=`; Domain=${a.domain}`}if(a.path){if(!Wl.test(a.path))throw new TypeError("option path is invalid");t+=`; Path=${a.path}`}if(a.expires){if("function"!==typeof a.expires.toUTCString)throw new TypeError("option expires is invalid");t+=`; Expires=${a.expires.toUTCString()}`}if(a.httpOnly&&(t+="; HttpOnly"),a.secure&&(t+="; Secure"),a.sameSite)switch("string"===typeof a.sameSite?a.sameSite.toLowerCase():a.sameSite){case!0:t+="; SameSite=Strict";break;case"lax":t+="; SameSite=Lax";break;case"strict":t+="; SameSite=Strict";break;case"none":t+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return t})(e,encodeURIComponent(c),t)},read(e){const c=`${e}=`,l=document.cookie.split(";");for(let a=0;a<l.length;a++){let e=l[a];for(;" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(c))return e.substring(c.length,e.length)}return null},remove(e){this.create(e,"",-1)}};var ql={name:"cookie",lookup(e){let{lookupCookie:c}=e;if(c&&"undefined"!==typeof document)return Vl.read(c)||void 0},cacheUserLanguage(e,c){let{lookupCookie:l,cookieMinutes:a,cookieDomain:t,cookieOptions:n}=c;l&&"undefined"!==typeof document&&Vl.create(l,e,a,t,n)}},Gl={name:"querystring",lookup(e){let c,{lookupQuerystring:l}=e;if("undefined"!==typeof window){let{search:e}=window.location;!window.location.search&&window.location.hash?.indexOf("?")>-1&&(e=window.location.hash.substring(window.location.hash.indexOf("?")));const a=e.substring(1).split("&");for(let t=0;t<a.length;t++){const e=a[t].indexOf("=");if(e>0){a[t].substring(0,e)===l&&(c=a[t].substring(e+1))}}}return c}};let Kl=null;const Ql=()=>{if(null!==Kl)return Kl;try{Kl="undefined"!==window&&null!==window.localStorage;const e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch(sa){Kl=!1}return Kl};var Yl={name:"localStorage",lookup(e){let{lookupLocalStorage:c}=e;if(c&&Ql())return window.localStorage.getItem(c)||void 0},cacheUserLanguage(e,c){let{lookupLocalStorage:l}=c;l&&Ql()&&window.localStorage.setItem(l,e)}};let Xl=null;const Jl=()=>{if(null!==Xl)return Xl;try{Xl="undefined"!==window&&null!==window.sessionStorage;const e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch(sa){Xl=!1}return Xl};var Zl={name:"sessionStorage",lookup(e){let{lookupSessionStorage:c}=e;if(c&&Jl())return window.sessionStorage.getItem(c)||void 0},cacheUserLanguage(e,c){let{lookupSessionStorage:l}=c;l&&Jl()&&window.sessionStorage.setItem(l,e)}},ea={name:"navigator",lookup(e){const c=[];if("undefined"!==typeof navigator){const{languages:e,userLanguage:l,language:a}=navigator;if(e)for(let t=0;t<e.length;t++)c.push(e[t]);l&&c.push(l),a&&c.push(a)}return c.length>0?c:void 0}},ca={name:"htmlTag",lookup(e){let c,{htmlTag:l}=e;const a=l||("undefined"!==typeof document?document.documentElement:null);return a&&"function"===typeof a.getAttribute&&(c=a.getAttribute("lang")),c}},la={name:"path",lookup(e){let{lookupFromPathIndex:c}=e;if("undefined"===typeof window)return;const l=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(!Array.isArray(l))return;const a="number"===typeof c?c:0;return l[a]?.replace("/","")}},aa={name:"subdomain",lookup(e){let{lookupFromSubdomainIndex:c}=e;const l="number"===typeof c?c+1:1,a="undefined"!==typeof window&&window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);if(a)return a[l]}};class ta{constructor(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,c)}init(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.services=e||{languageUtils:{}},this.options=function(e){return $l.call(Ul.call(arguments,1),(c=>{if(c)for(const l in c)void 0===e[l]&&(e[l]=c[l])})),e}(c,this.options||{},{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:e=>e}),"string"===typeof this.options.convertDetectedLanguage&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=e=>e.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=l,this.addDetector(ql),this.addDetector(Gl),this.addDetector(Yl),this.addDetector(Zl),this.addDetector(ea),this.addDetector(ca),this.addDetector(la),this.addDetector(aa)}addDetector(e){return this.detectors[e.name]=e,this}detect(e){e||(e=this.options.order);let c=[];return e.forEach((e=>{if(this.detectors[e]){let l=this.detectors[e].lookup(this.options);l&&"string"===typeof l&&(l=[l]),l&&(c=c.concat(l))}})),c=c.map((e=>this.options.convertDetectedLanguage(e))),this.services.languageUtils.getBestMatchFromCodes?c:c.length>0?c[0]:null}cacheUserLanguage(e,c){c||(c=this.options.caches),c&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||c.forEach((c=>{this.detectors[c]&&this.detectors[c].cacheUserLanguage(e,this.options)})))}}ta.type="languageDetector";const na=JSON.parse('{"common":{"app-name":"FirstBreath","alt-logo":"FirstBreath Logo","learn-more":"Learn More","get-started":"Get Started","social-media":{"facebook":"Facebook","twitter":"Twitter","instagram":"Instagram","linkedin":"LinkedIn"}},"layout":{"navbar":{"home":"Home","about":"About","blog":"Blog","data-bank":"Data Bank"},"footer":{"all-right-reserved":"\xa9 FirstBreath 2024 All right reserved."}},"pages":{"home":{"hero":{"title":"Anticipate every first breath with","description":"Thanks to our intelligent detection technology, you\'ll be alerted at the exact moment of birth.","buttons":{"learn-more":"Learn More","get-started":"Get Started"}},"features":{"title":"Ensuring a Calm Birth","description":"FirstBreath is an innovative foal birth monitoring solution designed to ensure the well-being of mares and their foals. With real-time monitoring and instant alerts, FirstBreath allows owners and trainers to prepare for critical moments, ensuring quick and effective intervention.","features":[{"title":"Real-time Monitoring","description":"Continuous monitoring of mares to detect signs of foaling."},{"title":"Instant Alerts","description":"Collects and analyzes data for improved future strategies."},{"title":"Data History","description":"Immediate notifications for quick intervention."},{"title":"Quick Intervention","description":"Ensures the well-being of mares and foals during birth."}]},"teams":{"title":"The creative minds behind FirstBreath"}},"about":{"title":"About","description":"This is the about page."},"blog":{"title":"Blog","description":"This is the blog page."},"data-bank":{"title":"Data Bank","description":"This is the data bank page."}}}'),ra=JSON.parse('{"common":{"app-name":"FirstBreath","alt-logo":"Logo FirstBreath","learn-more":"En savoir plus","get-started":"Commencer","social-media":{"facebook":"Facebook","twitter":"Twitter","instagram":"Instagram","linkedin":"LinkedIn"}},"layout":{"navbar":{"home":"Home","about":"About","blog":"Blog","data-bank":"Data Bank"},"footer":{"all-right-reserved":"\xa9 FirstBreath 2024 Tous droits r\xe9serv\xe9s."}},"pages":{"home":{"hero":{"title":"Anticipez chaque premier souffle avec","description":"Gr\xe2ce \xe0 notre technologie de d\xe9tection intelligente, soyez alert\xe9 au moment exact de la naissance.","buttons":{"learn-more":"En savoir plus","get-started":"Commencer"}},"features":{"title":"Assurer une Naissance en Toute S\xe9r\xe9nit\xe9","description":"FirstBreath est une solution innovante de surveillance de la naissance des poulains, con\xe7ue pour garantir le bien-\xeatre des juments et de leurs poulains. Gr\xe2ce \xe0 un suivi en temps r\xe9el et des alertes instantan\xe9es, FirstBreath permet aux propri\xe9taires et aux entra\xeeneurs de se pr\xe9parer aux moments critiques, en assurant une intervention rapide et efficace.","features":[{"title":"Surveillance en temps r\xe9el","description":"Suivi continu des juments pour d\xe9tecter les signes de mise bas."},{"title":"Alertes instantan\xe9es","description":"Collecte et analyse des donn\xe9es pour des strat\xe9gies futures am\xe9lior\xe9es."},{"title":"Historique des donn\xe9es","description":"Notifications imm\xe9diates pour permettre une intervention rapide."},{"title":"Intervention rapide","description":"Assure le bien-\xeatre des juments et des poulains pendant la naissance."}]},"teams":{"title":"Les esprits cr\xe9atifs derri\xe8re FirstBreath"}},"about":{"title":"About","description":"This is the about page."},"blog":{"title":"Blog","description":"This is the blog page."},"data-bank":{"title":"Data Bank","description":"This is the data bank page."}}}');Il.use(ta).use(Ze).init({resources:{en:{translation:na},fr:{translation:ra}},fallbackLng:"en",interpolation:{escapeValue:!1}});t.createRoot(document.getElementById("root")).render((0,tc.jsx)(c.StrictMode,{children:(0,tc.jsx)(Yc,{})})),Xc()})()})();
//# sourceMappingURL=main.c957da1e.js.map