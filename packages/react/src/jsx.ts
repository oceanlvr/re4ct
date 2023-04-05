import { REACT_ELEMENT_TYPE } from "../../shared/ReactSymbols"
import {
  ElementType,
  Key,
  Ref,
  Props,
  ReactElement
} from '../../shared/ReactType'

const ReactElement = function (type: ElementType, key: Key, ref: Ref, props: Props): ReactElement {
  const element = {
    $$typeof: REACT_ELEMENT_TYPE,
    key,
    ref,
    props,
    type,
    __mark__: 'custom'
  }
  return element
}

export const jsx = function (type: ElementType, config: any, ...maybeChildren: any) {
  let key: Key = null;
  let ref: Ref = null;
  const props: Props = {};
  for (const prop of config) {
    const val = config[prop]
    if (prop === 'key') {
      if (val !== undefined) {
        key = '' + val;
      }
      continue;
    }
    if (prop === 'ref') {
      if (val !== undefined) {
        ref = val;
      }
      continue;
    }
    if (Object.hasOwnProperty.call(config, prop)) {
      // 不处理原型的
      props[prop] = val;
    }
  }
  const maybeChildrenLength = maybeChildren.length;
  if (maybeChildrenLength > 0) {
    if (maybeChildrenLength === 1) {
      props.children = maybeChildren[0]
    } else {
      props.children = maybeChildren
    }
  }
  return ReactElement(type, key, ref, props)
}

export const jsxDev = jsx
