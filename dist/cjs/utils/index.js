"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.smoothTransition = void 0;
var styled_components_1 = require("styled-components");
exports.smoothTransition = (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  transition: all 300ms cubic-bezier(0.74, -0.175, 0, 1.08) !important; /* custom */\n  transition-timing-function: cubic-bezier(\n    0.74,\n    -0.175,\n    0,\n    1.08\n  ) !important; /* custom */\n"], ["\n  transition: all 300ms cubic-bezier(0.74, -0.175, 0, 1.08) !important; /* custom */\n  transition-timing-function: cubic-bezier(\n    0.74,\n    -0.175,\n    0,\n    1.08\n  ) !important; /* custom */\n"])));
var templateObject_1;
