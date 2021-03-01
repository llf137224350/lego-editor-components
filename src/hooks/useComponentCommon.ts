import {computed} from 'vue';
import {pick} from 'lodash-es';
import CommonComponentProps from '../../types/CommonComponentProps';

const useComponentCommon = (props: Readonly<Partial<CommonComponentProps & { isEditing: boolean }>>, picks: string[]) => {
  // 得到props中所有key在picks(string[])中的key与value
  const styleProps = computed(() => {
    // pick返回的是一个属性和value的一个对象
    return pick(props, picks);
  });
  const handleClick = () => {
    // 是地址
    if (props.actionType === 'url' && props.url && !props.isEditing) {
      location.href = props.url;
    }
  };
  return {
    styleProps,
    handleClick
  };
};
export default useComponentCommon;
