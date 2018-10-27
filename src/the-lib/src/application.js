import configDefault from './config_default';
import { Router } from './router';

export class Base {
    #config = {};
    #router = null;

    init(customConfig) {
        customConfig = customConfig || configDefault;
        this.#config = { ...customConfig, ...configDefault };

        this.router = new Router.Base(this.#config.indexRoute);
    }
}
