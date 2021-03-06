import { Type } from './typesDef';

export const defaultTypes: {
  [typename: string]: Type
} = {
  string: {
    base: 'string',
    name: 'string',
    validate: false,
    format: false,
    parse: false,
    mappableUri: 'string',
    getMappedId () {
      return ''
    }
  }
}
