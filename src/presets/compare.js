import comparingRule from "../utils/comparingRule"

export const minLength = comparingRule(false, "length")
export const maxLength = comparingRule(true, "length")
export const minValue = comparingRule(false)
export const maxValue = comparingRule(true)
