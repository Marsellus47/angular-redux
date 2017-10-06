import { createStore, applyMiddleware, compose, GenericStoreEnhancer } from 'redux';

import { reducer } from './reducer';
import { IAppState } from './app-state';
import freezeState from './freeze-state';

declare var window: any;

const devToolsExtension: GenericStoreEnhancer = (window.devToolsExtension)
  ? window.devToolsExtension() : (f) => f;

export const store = createStore<IAppState>(reducer,
  compose(applyMiddleware(freezeState), devToolsExtension) as GenericStoreEnhancer);
