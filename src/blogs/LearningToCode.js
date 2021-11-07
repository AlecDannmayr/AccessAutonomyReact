/* eslint-disable import/no-webpack-loader-syntax */
import Content from '!babel-loader!@mdx-js/loader!./Content.mdx'

function LearningToCode() {
   return <Content />
}

export default LearningToCode
