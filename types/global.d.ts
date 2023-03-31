interface Window {
  $loading: any
  $message: any
  $dialog: any
  // 语言
  $t: any
  $vue: any
  // 键盘按键记录
  $KeyboardActive?: { [T: string]: boolean }
  // 编辑 JSON 的存储对象
  opener: any
}

declare interface MyResponseType {
  code: number
  msg: string
  data: any
}

declare type Recordable<T = any> = Record<string, T>
