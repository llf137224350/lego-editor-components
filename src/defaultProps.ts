import { mapValues, without } from 'lodash-es';
import TextComponentProps from '../types/TextComponentProps';
import CommonComponentProps from '../types/CommonComponentProps';
import ImageComponentProps from '../types/ImageComponentProps';
import ShapeComponentProps from '../types/ShapeComponentProps';

export const commonDefaultProps: CommonComponentProps = {
  // actions
  actionType: '',
  url: '',
  // size
  height: '',
  width: '100%',
  paddingLeft: '0px',
  paddingRight: '0px',
  paddingTop: '0px',
  paddingBottom: '0px',
  // border type
  borderStyle: 'none',
  borderColor: '#000',
  borderWidth: '0',
  borderRadius: '0',
  // shadow and opacity
  boxShadow: '0 0 0 #000000',
  opacity: '1',
  // position and x,y
  position: 'absolute',
  left: '0',
  top: '0',
  right: '0'
};
// l-text的默认样式
export const textDefaultProps: TextComponentProps = {
  // basic props - font styles
  text: '正文内容',
  fontSize: '14px',
  fontFamily: '',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textDecoration: 'none',
  lineHeight: '1',
  textAlign: 'left',
  color: '#000000',
  backgroundColor: '',
  ...commonDefaultProps
};
// l-image默认样式
export const imageDefaultProps: ImageComponentProps = {
  src: 'test.url',
  ...commonDefaultProps
};

export const shapeDefaultProps: ShapeComponentProps = {
  backgroundColor: '',
  ...commonDefaultProps
};

// l-text样式名称
export const textStylePropNames = without(Object.keys(textDefaultProps), 'actionType', 'url', 'text');
export const isEditingProp = {
  isEditing: {
    type: Boolean,
    default: false
  }
};
// l-image样式表
export const imageStylePropsNames = without(Object.keys(imageDefaultProps), 'actionType', 'url', 'src');
// shape的样式属性
export const shapeStylePropsNames = without(Object.keys(imageDefaultProps), 'actionType', 'url');
// 得到所有属性
export const transformToComponentProps = (props: CommonComponentProps) => {
  const mapProps = mapValues(props, (item: any) => {
    return {
      type: item.constructor as StringConstructor,
      default: item,
    };
  });
  return {
    ...mapProps,
    ...isEditingProp
  };
};
