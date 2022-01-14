import BorderCommon from './index.vue'
import image from '@/assets/images/chart/static.png'
import { ConfigType } from '@/packages/index.d'
import { ChatCategoryEnum } from '../../index.d'

export const borderCommonConfig: ConfigType = {
  key: 'Border',
  title: '边框',
  category: ChatCategoryEnum.Border,
  node: BorderCommon,
  image: image
}