import * as presets from "./presets"

export default class Oops {
  constructor({ rules }) {
    if (!rules || typeof additionnalRules !== "object") {
      rules = {}
    }
    this.rules = {
      ...rules,
      ...presets
    }
  }

  checkRules(rules) {
    Object
      .keys(rules)
      .forEach(rule => {
        if (!(rule in this.rules)) {
          throw new Error(`${rule} is not an existing rule`)
        }
      })
  }

  check(elem, scheme = {}, name = "") {
    if (typeof elem !== "object") {
      throw new Error("Parameter is not an object !")
    }
    Object
      .entries(scheme)
      .forEach(([field, rules]) => {
        this.checkRules(rules)
        this.validate(
          elem[field],
          name ? `${name}.${field}` : field,
          rules
        )
      })
  }

  validate(value, name = "", rules = {}) {
    this.rules.required(value, name, rules.required)
    if (value === undefined) {
      return
    }
    Object
      .entries(rules)
      .forEach(([ruleName, ruleValue]) =>
        this.rules[ruleName](value, name, ruleValue, this)
      )
  }
}
