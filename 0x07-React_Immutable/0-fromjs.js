import { require } from 'yargs';
const { fromJS } = require('immutable');
const getImmutableObject = (object) => { fromJS(object) }

export default getImmutableObject