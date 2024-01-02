import { v4 as uuidv4 } from 'uuid'
import { type Field } from '../../types/fields'
import { countFieldPrice, getRandomRate } from './helpers'

const generateFields = (): Field[] => {
  const fields: Field[] = new Array(64).fill(null).map(_ => ({
    id: uuidv4(),
    own: false,
    price: 0,
    rates: {
      ground: getRandomRate(),
      water: getRandomRate()
    },
    properties: null
  }))

  return fields.map(field => ({ ...field, price: countFieldPrice(field.rates) }))
}

export {
  generateFields
}
