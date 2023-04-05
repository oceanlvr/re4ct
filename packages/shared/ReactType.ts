export type ElementType = any
export type Key = any
export type Ref = any
export type Props = any

export interface ReactElementType {
  $$typeof: symbol | number;
  key: Key;
  ref: Ref;
  props: Props;
  type: ElementType;
  __mark__: string;
}
