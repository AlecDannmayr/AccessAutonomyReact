import React from 'react'
import '../css/style.css'
import projectImgOne from './projectImgOne.js'
import phone from '../images/phone.svg'

const projectBannerOne = () => {
   return (
      <div class="diagonal-box-one">
         <div class="content-one">
            <p style={{ opacity: 1 }}>
               You may have noticed that now the whole section is transformed, and with it also the content-div living in it. Even though this effect can be quite lovely, sometimes you don't want the content to inherit the given transformation. To reset everything back to normal, you have to reverse the transition: You may have noticed that now the whole section is transformed, and with it also the content-div living in it. Even though this effect can be quite lovely, sometimes you don't want the content to inherit the given transformation. To reset everything back to normal, you have to reverse the transition: You may have noticed that now the whole section is transformed, and with it also the content-div living in it. Even though this effect can be quite lovely, sometimes you don't want the content to inherit the given transformation. To reset everything back to normal, you have to reverse the transition: You may have noticed that now the whole section is transformed, and with it also the content-div living in it. Even though this
               effect can be quite lovely, sometimes you don't want the content to inherit the given transformation. To reset everything back to normal, you have to reverse the transition:
            </p>
         </div>
         <figure>
            <div class="frame">
               <iframe src="http://google.com" />
            </div>
         </figure>
      </div>
   )
}

export default projectBannerOne
