import { type FieldRate, type FieldRates } from '../../types/fields'
import { BASE_FIELD_PRICE, BASE_GROUND_RATE_PRICE, BASE_WATER_RATE_PRICE, RATES_INTENSITY } from './constants'

export const getRandomRate = (): FieldRate => {
  return RATES_INTENSITY[Math.floor(Math.random() * 15)] as FieldRate
}

export const countFieldPrice = ({ ground, water }: FieldRates): number => {
  return BASE_FIELD_PRICE + (BASE_GROUND_RATE_PRICE * ground) + (BASE_WATER_RATE_PRICE * water)
}
