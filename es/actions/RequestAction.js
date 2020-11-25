import { __extends } from "tslib";
import * as ReactRedux from 'react-redux';
import { BaseRequestAction } from '@redux-model/core';
var RequestAction = /** @class */ (function (_super) {
    __extends(RequestAction, _super);
    function RequestAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RequestAction.prototype.useMeta = function (key) {
        var _this = this;
        return ReactRedux.useSelector(function () {
            return key ? _this.meta[key] : _this.meta;
        });
    };
    RequestAction.prototype.useMetas = function (value, metaKey) {
        var _this = this;
        return ReactRedux.useSelector(function () {
            var customMetas = _this.metas;
            // Parameter `metaKey` is useless for metas when value is not provided.
            if (value === undefined) {
                return customMetas;
            }
            var customMeta = customMetas.pick(value);
            return metaKey ? customMeta[metaKey] : customMeta;
        });
    };
    RequestAction.prototype.useLoading = function () {
        return this.useMeta('loading');
    };
    RequestAction.prototype.useLoadings = function (value) {
        return value === undefined
            ? this.getLoadingHandler(this.useMetas())
            : this.useMetas(value, 'loading');
    };
    RequestAction.prototype.methods = function () {
        return _super.prototype.methods.call(this).concat('useMeta', 'useMetas', 'useLoading', 'useLoadings');
    };
    return RequestAction;
}(BaseRequestAction));
export { RequestAction };
