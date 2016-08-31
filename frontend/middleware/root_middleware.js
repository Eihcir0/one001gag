import { applyMiddleware } from 'redux';
import { SessionMiddleware } from './session_middleware';
import { PostsMiddleware } from './posts_middleware.js';
import logger from 'redux-logger';

const middlewares = [SessionMiddleware, PostsMiddleware, logger()];
const RootMiddleware = applyMiddleware(...middlewares);
export default RootMiddleware;
