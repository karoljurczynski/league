export type FieldRate = 1 | 2 | 3 | 4 | 5

export interface FieldRates {
  ground: FieldRate
  water: FieldRate
}

export type PlantState = 'empty' | 'seeded' | 'growing' | 'harvest'

export type FieldType = 'plant' | 'building' | 'obstacle'

export interface PlantFieldProperties {
  type: 'plant'
  name: string
  level: number
  experience: number
  state: PlantState
  water: boolean
  manure: boolean
}

export interface BuildingFieldProperties {
  type: 'building'
  level: number
  name: string
  state: PlantState
}

export interface Field {
  id: string
  own: boolean
  price: number
  rates: FieldRates
  properties: null | PlantFieldProperties | BuildingFieldProperties
}
