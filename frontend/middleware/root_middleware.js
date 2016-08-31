import { applyMiddleware } from 'redux';
import { SessionMiddleware } from './session_middleware';
import logger from 'redux-logger';

const middlewares = [SessionMiddleware, logger()];
const RootMiddleware = applyMiddleware(...middlewares);
export default RootMiddleware;
