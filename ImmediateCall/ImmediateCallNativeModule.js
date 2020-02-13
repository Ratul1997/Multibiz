//  Created by react-native-create-bridge

import { NativeModules } from 'react-native'

const { ImmediateCall } = NativeModules

export default {
  exampleMethod () {
    return ImmediateCall.exampleMethod()
  },

  EXAMPLE_CONSTANT: ImmediateCall.EXAMPLE_CONSTANT
}
