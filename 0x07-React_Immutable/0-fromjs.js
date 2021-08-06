import { require } from 'yargs';
const { fromJS } = require('immutable');
const getImmutableObject = (obj) =>  fromJS(obj) 

export default getImmutableObject