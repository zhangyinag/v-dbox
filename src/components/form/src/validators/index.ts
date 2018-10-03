import {Rule, ValidatorCallback} from '@/components/form/src/type'

const required: ValidatorCallback = (rule: Rule, value: string, callback: (err?: Error) => void): void => {
  if (!rule.required) {
    callback()
    return
  }
  if (!value) {
    callback(new Error(getErrMsg()))
  } else {
    callback()
  }

  function getErrMsg () {
    let defaultMsg = rule.field + ' is required'
    return rule.message || defaultMsg
  }
}

const validators: ValidatorCallback[] = [required]

export {validators}

const validate = function (rules: Rule[], value: string, callback: (err?: Error) => void): void {
  let done = false
  let count = 0
  if (rules.length < 1) {
    callback()
    return
  }
  const cb = (err?: Error): boolean => {
    if (err || (done && count <= 0)) {
      callback(err)
      return true
    }
    return false
  }
  for (let i = 0; i < rules.length; i++) {
    for (let j = 0; j < validators.length; j++) {
      let rule = rules[i]
      let validator = validators[j]
      count++
      if (i >= rules.length - 1 && j >= validators.length -1) done = true
      validator(rule, value, (err?: Error) => {
        count--
        cb(err)
      })
    }
  }
}

export default validate
