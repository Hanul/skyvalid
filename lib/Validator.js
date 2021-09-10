"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Validator {
    notEmpty(value) {
        return typeof value === "string" && value.trim() !== "";
    }
}
exports.default = new Validator();
//# sourceMappingURL=Validator.js.map