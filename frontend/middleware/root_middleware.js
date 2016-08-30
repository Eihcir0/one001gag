import { applyMiddleware } from 'redux';
import { SessionMiddleware } from './session_middleware';

const middlewares = [SessionMiddleware];
export const RootMiddleware = applyMiddleware(...middlewares);
