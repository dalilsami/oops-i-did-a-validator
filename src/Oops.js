import * as presets from "./presets"

export default class Oops {
  constructor({ rules, promisified } = {}) {
    if (!rules || typeof rules !== "object") {
      rules = {}
    }
    this.rules = {
      ...rules,
      ...presets
    }
    this.promisified = promisified
  }

  /**
   * check is the base validating function
   *
   * @param {Object} elem - the object to check
   * @param {Object} scheme - the scheme to validate
   * @param {[String]} method - POST or PATCH
   * @param {[String]} name - the name of your object
   * @returns {Promise?} - if promisified is true when creating the class,
   * it returns a Promise, otherwise, it returns nothing
   * and you have to catch the thrown error
   */
  check(elem, scheme, method, baseName) {
    return this.promisified
      ? new Promise((res, rej) => {
        try {
          res(this._check(elem, scheme, method, baseName))
        } catch (e) {
          rej(e)
        }
      })
      : this._check(elem, scheme, method, baseName)
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

  _check(elem, scheme = {}, method = "POST", baseName = "") {
    if (typeof elem !== "object") {
      throw new Error("Parameter is not an object !")
    }
    Object
      .entries(scheme)
      .forEach(([field, rules]) => {
        this.checkRules(rules)
        const value = elem[field]
        const name = baseName ? `${baseName}.${field}` : field

        if (method === "POST") {
          this.rules.required(value, name, rules.required)
        } else if (method === "PATCH") {
          this.rules.patchable(value, name, rules.patchable)
        }
        if (value === undefined) {
          return
        }
        this.validate(elem[field], name, rules)
      })
  }

  _validate(value, name = "", rules = {}) {
    Object
      .entries(rules)
      .forEach(([ruleName, ruleValue]) => this.rules[ruleName](
        value,
        name,
        ruleValue,
        { check: this._check, validate: this.validate }
      ))
  }
}
