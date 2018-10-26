export interface BeforeCloseCallBack {
  (done: () => void, cancel: () => void): void
}
