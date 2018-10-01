export type Layout = 'horizontal' | 'vertical' | 'inline'

export type ValidateState = 'validating' | 'success' | 'error' | ''

export interface ValidateResult {
  prop: string
  state: ValidateState
  errMsg?: string
}

export interface ValidatorCallback {

  (rule: Rule, value: string, callback: (err?: Error) => void): void
}

export interface Rule {
  type?: string
  required?: boolean
  message?: string
  trigger?: 'change' | 'blur'
  validator?: ValidatorCallback
  [key: string]: any
}