"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffQuery = void 0;
const StaffController_1 = require("../controllers/StaffController");
/**
 * @description holds staff queries
 */
exports.StaffQuery = {
    staff: {
        resolve: () => __awaiter(void 0, void 0, void 0, function* () {
            return yield StaffController_1.getAllStaff();
        }),
    },
    staffMember: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        resolve: (_parent, args, _context, _info) => __awaiter(void 0, void 0, void 0, function* () {
            return yield StaffController_1.getStaff(args.id);
        }),
    }
};