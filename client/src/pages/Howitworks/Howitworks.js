import React,{ useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import styles from './Howitworks.module.sass';
import CONSTANTS from '../../constants'


function Howitworks() {
  const [show, setShow] = useState(false)

  const change = () =>{
    setShow(!show)
  }

  return (
    <div className={styles.all}>
    <Header/>
      <div>
        <div className={styles.helps}>
          <div>
            <div className={styles.helpstext}>
            <span>World's #1 Naming Platform</span>
            <div className={styles.doestext}>
              <h1 className={styles.howdoes}>How Does Squadhelp Work?</h1>
              <p className={styles.howdoestext}>Squadhelp helps you come up with a great name for your business by combining the power of crowdsourcing with sophisticated technology and Agency-level validation services.</p>
            </div>
            <div>
              <div onClick={change} className={styles.buttonplay}>
                <div className={styles.play}>
                <img src={`${CONSTANTS.STATIC_IMAGES_PATH}play.png`} alt="play" />
                Play Video
                </div>
              </div>
            </div>
            </div>
          </div>
          <div className={styles.svgbox}>
          <svg className={styles.svg} viewBox="0 0 1342.8 1166.1"	xmlns="<http://www.w3.org/2000/svg>">
            <path className={styles.app0} opacity=".3" d="M160.5,485c87.6-86.8,198.9-157.7,303.2-228.2c50.1-33.9,100.8-67,151.8-99.8c49.1-31.5,98.8-62.2,149.7-91.3  c173.5-99.4,489.7-103.6,557.5,112.6c0.9,2.9,1.8,5.9,2.6,8.8c28.8,103.8,16.6,218.8,2.4,323.7c-0.5,3.8-1,7.5-1.6,11.3  c-9.6,67.7-20.4,135.5-20.6,203.9c-0.2,40.7,2.7,81.8,15.2,120.9c19.5,61.5,35.8,128.2-3.6,186.1c-32.7,48.1-89.1,80.6-145.7,101.7  c-84.5,31.5-178.3,37.9-268.2,25.5c-114.9-15.8-220.6-63-334.3-82.9c-66.5-11.6-133.5-21-200.7-28.4c-95.2-10.5-218.1,1.6-296.1-59  c-79.6-61.9-81.3-167-61.5-253C33.7,636.7,89.2,555.6,160.5,485z"></path>
              <path className={styles.app1} d="M1065.3,610.5v427.7c0,31.3-25.3,56.6-56.6,56.6H676.3c-31.3,0-56.6-25.3-56.6-56.6l0,0V189.5  c0-31.3,25.3-56.6,56.6-56.6h332.4c31.3,0,56.6,25.3,56.6,56.6v0V610.5"></path>
              <path className={styles.app0}  d="M866.6,610.8c-6.7,3.7-64.8,100.3-61.3,179.5c9.1-2.6,30.5-13.8,30.5-13.8l9.8-5.8l6.2-33.8l8.1-38.3l15-48  l18-35l14-20l-13,4L866.6,610.8z"></path>
              <path className={styles.app0} d="M1032.3,760c0,0.5,0,1.2,0,2.1c0.6,22.3,7.4,154-84,207.9c41,46,108,5,108,5l9-10V808l-2-4l-11-40l-14,1  L1032.3,760z"></path>
              <path className={styles.app3} d="M983.4,1112.7l-73.5-101.8c0,0-48.1-43.5-67.4-58.2c-0.2,15,0.8,122.6,5.4,159.9H983.4z"></path>
              <path className={styles.app4} opacity=".2" d="M983.4,1112.7l-73.5-101.8c0,0-48.1-43.5-67.4-58.2c-0.2,15,0.8,122.6,5.4,159.9H983.4z"></path>
              <path className={styles.app3} d="M1051.6,1096.4h13.6V962.5c-34.4,11-201.4,12-222.8-9.7c0,1.7,32,88.6,89.7,156h119.4V1096.4z"></path>
              <path className={styles.app5} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M804.8,692.6c-3.6,4-3.7,11.7-3.7,11.7c-4.5-13.4-102.7-257.7-102.7-257.7s-20.3,8.6,3.1,54.8  c-7.6,4.5-28.7,21.4-20,48.6c6.6,20.4,21,27.6,30,27.6c-1.5,15.3,31.2,171.6,35.5,179.1c10,17.7,29.3,37,40.7,37.5  c13,0.7,39.6-11.3,57.7-22.8"></path>
              <path className={styles.app5} strokeWidth="2.5" strokeLinecap="round" d="M905.9,595.6c-49.4,9.2-112.1,67.3-110.5,79.8c1.5,11.8,32.3,46,55.7,62.3"></path>
              <path className={styles.app5} strokeWidth="2.5" strokeLinecap="round" d="M936.9,568.1c-106,59.8-108,366-94.4,384.7c13.3,18.4,171.8,23.2,222.8,10.5"></path>
              <path className={styles.app5} strokeWidth="2.5" strokeLinecap="round" d="M1061.4,604.5c-14.5-21.2-33.7-36.6-58.5-43"></path>
              <path className={styles.app5} strokeWidth="2.5" strokeLinecap="round" d="M1052.7,763.5c2.7,11.5,8.2,33,13.7,53.4"></path>
              <path className={styles.app5} strokeWidth="2.5" strokeLinecap="round" d="M1020.8,737.7c5.2,14.9,10.8,25.2,14.9,26.5c5,1.6,16.4,0,29.6-3.5"></path>
              <path className={styles.app5} strokeWidth="2.5" strokeLinecap="round" d="M1065.3,607.1c-8.8-6.4-17.6-9.6-26-7.6"></path>
              <path className={styles.app5} strokeWidth="2.5" strokeLinecap="round" d="M936.9,568.1v-17.2"></path>
              <path className={styles.app5} strokeWidth="2.5" strokeLinecap="round" d="M1002.8,519.4v71.4c0,5.8-15.5,9.3-31.5,9.8"></path>
              <path className={styles.app5} strokeWidth="2.5" strokeLinecap="round" d="M1002.6,519.4c6,3.3,15.1-0.2,20.8-8.3c6.1-8.5,6.2-18.9,0.3-23.1c-1.6-1.1-3.4-1.7-5.3-1.8"></path>
              <path className={styles.app5} strokeWidth="2.5" strokeLinecap="round" d="M907.8,446.8c-1,2.1-2,4.3-2.8,6.6c-16.1,40.8-4.6,83.5,25.8,95.5c2,0.8,4.1,1.5,6.2,2"></path>
              <path className={styles.app5} strokeWidth="2.5" strokeLinecap="round" d="M1040.4,495.4c12.3-3.7,27.7-12.4,27.7-30c0-11-10.3-23.1-12.2-36.9c-1-7,1.2-36.1-7-46c-17-20.4-27-16.3-40-21  c-22.6-8.3-31.3-22-50-22c-21.2,0-29.8,11-45,11c-17.4,0-31.6-8-56-8c-13,0-30,17-30,32c0,35.5,33,30.4,33,39c0,6-2,10.8-2,19  c0,4.4,2.3,8,5.6,10.8"></path>
              <path className={styles.app0} d="M673.3,333.3h49.9c14.8,0,26.8,12,26.8,26.8V410c0,14.8-12,26.8-26.8,26.8h-49.9c-14.8,0-26.8-12-26.8-26.8  v-49.9C646.5,345.3,658.5,333.3,673.3,333.3z"></path>
              <circle className={styles.app3} cx="737.6" cy="341.5" r="21.2"></circle>
              <path className={styles.app2} strokeWidth="2.5" d="M1010.4,102.5H674.5c-45.2,0-81.9,36.7-81.9,81.9v858.8c0,45.2,36.7,81.9,81.9,81.9l0,0h335.9  c45.2,0,81.9-36.7,81.9-81.9V184.4C1092.3,139.1,1055.7,102.5,1010.4,102.5z M1065.3,610.5v427.7c0,31.3-25.3,56.6-56.6,56.6H676.3  c-31.3,0-56.6-25.3-56.6-56.6l0,0V189.5c0-31.3,25.3-56.6,56.6-56.6h55.1v17.4c0,8.7,7,15.7,15.7,15.7h190.8c8.7,0,15.7-7,15.7-15.7  v-17.4h55.1c31.3,0,56.6,25.3,56.6,56.6c0,0,0,0,0,0L1065.3,610.5z"></path>
              <path className={styles.app3} d="M1183.8,229.5h-121.3c-21.9,0-39.7,17.8-39.7,39.7c0,11.5,4.9,21.9,12.8,29.1v26.6l17.2-17.2  c3.1,0.8,6.4,1.2,9.7,1.2h121.3c21.9,0,39.7-17.8,39.7-39.7S1205.7,229.5,1183.8,229.5z"></path>
              <circle className={styles.app1} cx="1082.2" cy="270.5" r="10"></circle>
              <circle className={styles.app1} cx="1123.1" cy="270.5" r="10"></circle>
              <circle className={styles.app1} cx="1164.1" cy="270.5" r="10"></circle>
              <path className={styles.app5} strokeWidth="9" strokeLinecap="round" d="M543.4,1012.8c2-5.7,3.2-12.8,3.2-21.7c0-133.5-158-97.5-158-208.4"></path>
              <path className={styles.app3} d="M416.3,781.9c8.5,11.2-20.1,23.9-24.3,18.6S407.1,770,416.3,781.9z"></path>
              <path className={styles.app3} d="M556.2,585.6c10.4,13.6-20.4,26-25.4,19.5S545.1,571.1,556.2,585.6z"></path>
              <path className={styles.app3} d="M547.8,641.8c8.3,15-32,27.1-36,19.9S539,625.8,547.8,641.8z"></path>
              <path className={styles.app3} d="M550.3,684.5c10.9,13.2-26.6,32.4-31.8,26.1C513.3,704.3,538.7,670.4,550.3,684.5z"></path>
              <path className={styles.app3} d="M563,732.5c10.9,13.2-26.6,32.4-31.8,26.1C526.1,752.3,551.4,718.4,563,732.5z"></path>
              <path className={styles.app3} d="M574.2,777.1c9.9,12-22.9,28.4-27.6,22.6S563.6,764.3,574.2,777.1z"></path>
              <path className={styles.app3} d="M589.2,826.1c9.9,12-22.9,28.4-27.6,22.6S578.7,813.2,589.2,826.1z"></path>
              <path className={styles.app3} d="M361.8,773.1c3.6-13.6,31.3,1.3,29.6,7.8C389.7,787.3,358,787.6,361.8,773.1z"></path>
              <path className={styles.app3} d="M361.4,821c-1.8-13.9,29.5-10.5,30.3-3.8C392.5,823.9,363.2,835.9,361.4,821z"></path>
              <path className={styles.app3} d="M389,864.5c-9.1-10.7,18.9-25,23.3-19.9S398.7,875.9,389,864.5z"></path>
              <path className={styles.app3} d="M423.6,887.9c-5.5-12.9,25.5-18.1,28.1-11.9S429.5,901.8,423.6,887.9z"></path>
              <path className={styles.app3} d="M470.2,912.3c-5.5-12.9,25.5-18.1,28.1-11.9S476,926.2,470.2,912.3z"></path>
              <path d="M505,947.8c-1.2-14,29.9-9.3,30.5-2.6S506.3,962.8,505,947.8z"></path>
              <path className={styles.app3} d="M431.3,811.9c11,8.8-13.8,28.1-19.1,23.9S419.6,802.5,431.3,811.9z"></path>
              <path className={styles.app3} d="M456.3,837c12.1,7.2-9.7,29.7-15.5,26.3C434.9,859.9,443.3,829.3,456.3,837z"></path>
              <path className={styles.app3} d="M501.9,861.6c11.4,8.3-12.5,28.7-18,24.7S489.8,852.7,501.9,861.6z"></path>
              <path className={styles.app5} strokeWidth="9" strokeLinecap="round" d="M540.4,1012.5c13.9-22.9,30.8-57.5,30.8-96.6c0-107.8-60.2-161.8-60.2-238.8c0-14.6,1.3-60.4,24.5-79"></path>
              <path className={styles.app2} strokeWidth="2.5" strokeLinecap="round" d="M588.6,1164.9h-88.4c-4.1,0-7.8-2.6-9.1-6.6l-44-133.3c-1.6-5,1.1-10.4,6.1-12.1c1-0.3,2-0.5,3-0.5H633  c5.3,0,9.6,4.3,9.6,9.6c0,1-0.2,2-0.5,3l-44.4,133.3C596.4,1162.3,592.7,1164.9,588.6,1164.9z"></path>
              <path className={styles.app0} d="M581.4,1012.8c2.5,3.7,21.1,108.6-74.7,152.1c26.3-0.9,33.2,0.6,33.2,0.6h50l8-5l19-57l13.5-42l12.5-39l-3-7.1  l-6-3.9L581.4,1012.8z"></path>
              <path className={styles.app3} d="M603.5,882.1c5.2,14.7-31.2,18.9-33.6,11.9C567.3,887,597.9,866.4,603.5,882.1z"></path>
              <path className={styles.app3} d="M544,903.8c11.5-10.4,29.5,21.5,23.9,26.5C562.4,935.3,531.7,915,544,903.8z"></path>
              <path className={styles.app3} d="M534.7,864c7.7-13.5,34.7,11.1,31.1,17.5C562.1,888,526.5,878.5,534.7,864z"></path>
              <path className={styles.app3} d="M526,816.8c7.7-13.5,34.7,11.1,31.1,17.5S517.8,831.3,526,816.8z"></path>
              <path className={styles.app3} d="M510.5,779.2c5-14.8,36.2,4.3,33.8,11.4S505.2,795,510.5,779.2z"></path>
              <path className={styles.app3} d="M488.6,727.5c7.3-13.8,35,10.1,31.5,16.7S480.8,742.2,488.6,727.5z"></path>
              <path className={styles.app3} d="M478.2,669.9c8.5-13,34,13.3,29.9,19.5S469.1,683.8,478.2,669.9z"></path>
              <path className={styles.app3} d="M483.3,620.3c8.5-13,34,13.3,29.9,19.5C509.1,646.1,474.2,634.2,483.3,620.3z"></path>
              <path className={styles.app3} d="M603.5,933.2c5.2,14.7-31.2,18.9-33.6,11.9C567.3,938,597.9,917.5,603.5,933.2z"></path>
              <path className={styles.app5} strokeWidth="2.5" strokeLinecap="round" d="M925.8,458.5c0,5-1,21-7,25"></path>
              <path className={styles.app5} strokeWidth="2.5" strokeLinecap="round" d="M922.3,510c10,0,19-6,19-10"></path>
              <ellipse className={styles.app4} cx="947.8" cy="461" rx="3.5" ry="6"></ellipse>
              <path className={styles.app5} strokeWidth="2.5" strokeLinecap="round" d="M588.6,1164.9h-88.4c-4.1,0-7.8-2.6-9.1-6.6l-44-133.3c-1.6-5,1.1-10.4,6.1-12.1c1-0.3,2-0.5,3-0.5H633  c5.3,0,9.6,4.3,9.6,9.6c0,1-0.2,2-0.5,3l-44.4,133.3C596.4,1162.3,592.7,1164.9,588.6,1164.9z"></path>
              <circle className={styles.app6} strokeWidth="13" cx="260.1" cy="53.5" r="25.5"></circle>
              <circle className={styles.app6} strokeWidth="13" cx="376.5" cy="1094.7" r="22"></circle>
              <circle className={styles.app6} strokeWidth="13" cx="1301.9" cy="35.4" r="18"></circle>
            </svg>
          </div>
        </div>
        {!show ?  null :
          <div onClick={change} className={styles.backplayer}>
              <img src={`${CONSTANTS.STATIC_IMAGES_PATH}x.png`} className={styles.x} alt="blue_logo" />
            <div className={styles.background}>
              <div className={styles.player}>
                      <iframe src="https://player.vimeo.com/video/368584367?h=fa9cf9a32f&title=0&byline=0&portrait=0" width="1000px" height="1000px" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        }
        </div>
          <div className={styles.ourservices}>
            <span className={styles.spans}>
              Our Services
            </span>
            <h2>
              3 Ways To Use Squadhelp
            </h2>
            <p>
              Squadhelp offers 3 ways to get you a perfect name for your business.
            </p>
          </div>
        <div className={styles.containerways}>
          <div className={styles.partcontainer}>
            <div className={styles.partcontainerinfo}>
              <div>
                <svg className={styles.svgmini} viewBox="0 0 120 120"	xmlns="<http://www.w3.org/2000/svg>">
                <path className={styles.icon1} opacity=".5" d="M112.1,8.4H22.7c-3.4,0-6.1,2.8-6.1,6.1v23.4c0,3.4,2.8,6.1,6.1,6.1h5.1v10l15.7-10h13.6l10.3,10.3L77.8,44  h13.6L107,54V44h5.1c3.4,0,6.1-2.8,6.1-6.1V14.5C118.2,11.1,115.5,8.4,112.1,8.4z"></path>
                <path className={styles.icon2} d="M104.7,2.6H15.3c-3.4,0-6.1,2.8-6.1,6.1v23.4c0,3.4,2.8,6.1,6.1,6.1h5.1v10l15.7-10h13.6L60,48.6l10.3-10.3  h13.6l15.7,10v-10h5.1c3.4,0,6.1-2.8,6.1-6.1V8.7C110.8,5.4,108.1,2.6,104.7,2.6z"></path>
                <g>
                  <path className={styles.icon3} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M106.4,76.8c0.4-1.2,0.6-2.6,0.6-3.9c0-6.6-4.7-11.5-10.5-11.5c-5.8,0-10.5,4.9-10.5,11.5   c0,1.4,0.2,2.7,0.6,3.9c-0.8,0.5-1.4,1.5-1.4,2.6c0,1.4,0.9,2.6,2.2,3c1.5,4.5,5,7.7,9.1,7.7c4.1,0,7.6-3.2,9.1-7.7   c1.3-0.4,2.2-1.5,2.2-3C107.7,78.3,107.2,77.4,106.4,76.8z"></path>
                  <path className={styles.icon3} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M101.6,71l-0.5-2.6c0,0-1.1,0-2.9,1.6c-3.7,3.4-7.9,0.7-7.9,0.7"></path>
                  <path className={styles.icon3} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M86.5,74.8"></path>
                  <path className={styles.icon3} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M105.6,95.9l10,4.2c1.9,0.9,2.6,2.8,2.6,4.7v0.4v6.8"></path>
                  <polyline className={styles.icon4} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="96.6,97.4 100.4,101.8 105.6,96.1 103.4,92.2  "></polyline>
                  <path className={styles.icon3} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M87.5,95.9l-9.8,4c-0.6,0.4-1.1,0.9-1.6,1.5c-0.7,0.9-1,2-1,3.2v7.4"></path>
                  <path className={styles.icon3} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M87,80.4"></path>
                  <polyline className={styles.icon4} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="96.6,97.4 92.7,101.8 87.5,96.1 89.7,92.2  "></polyline>
                  <line className={styles.icon4} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="103.4" y1="92.2" x2="96.6" y2="97.4"></line>
                  <line className={styles.icon4} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="89.7" y1="92.2" x2="96.6" y2="97.4"></line>
                  <path className={styles.icon3} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M118.2,112c-6.1,3.4-13.5,5.4-21.5,5.4c-8,0-15.4-2-21.5-5.4"></path>
                </g>
                <g>
                  <path className={styles.icon3} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M69.7,70.2c0.4-1.2,0.6-2.6,0.6-3.9c0-6.6-4.7-11.5-10.5-11.5c-5.8,0-10.5,4.9-10.5,11.5   c0,1.4,0.2,2.7,0.6,3.9c-0.8,0.5-1.4,1.5-1.4,2.6c0,1.4,0.9,2.6,2.2,3c1.5,4.5,5,7.7,9.1,7.7c4.1,0,7.6-3.2,9.1-7.7   c1.3-0.4,2.2-1.5,2.2-3C71.1,71.7,70.5,70.7,69.7,70.2z"></path>
                  <path className={styles.icon3} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M65,64.4l-0.5-2.6c0,0-1.1,0-2.9,1.6c-3.7,3.4-7.9,0.7-7.9,0.7"></path>
                  <path className={styles.icon3} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M49.9,68.2"></path>
                  <path className={styles.icon3} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M68.9,89.3l10,4.2c1.9,0.9,2.6,2.8,2.6,4.7"></path>
                  <polyline className={styles.icon4} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="59.9,90.8 63.8,95.1 69,89.5 66.7,85.6  "></polyline>
                  <path className={styles.icon3} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M50.9,89.3l-9.8,4c-0.6,0.4-1.1,0.9-1.6,1.5c-0.7,0.9-1,2-1,3.2"></path>
                  <path className={styles.icon3} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M50.3,73.8"></path>
                  <polyline className={styles.icon4} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="59.9,90.8 56,95.1 50.8,89.5 53.1,85.6  "></polyline>
                  <line className={styles.icon4} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="66.7" y1="85.6" x2="59.9" y2="90.8"></line>
                  <line className={styles.icon4} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="53.1" y1="85.6" x2="59.9" y2="90.8"></line>
                  <path className={styles.icon3} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M75.2,108.2c-4.6,1.6-9.8,2.5-15.2,2.5c-5.5,0-10.6-0.9-15.3-2.6"></path>
                </g>
                <g>
                  <path className={styles.icon3} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M33,76.8c0.4-1.2,0.6-2.6,0.6-3.9c0-6.6-4.7-11.5-10.5-11.5c-5.8,0-10.5,4.9-10.5,11.5c0,1.4,0.2,2.7,0.6,3.9   c-0.8,0.5-1.4,1.5-1.4,2.6c0,1.4,0.9,2.6,2.2,3c1.5,4.5,5,7.7,9.1,7.7c4.1,0,7.6-3.2,9.1-7.7c1.3-0.4,2.2-1.5,2.2-3   C34.4,78.3,33.8,77.4,33,76.8z"></path>
                  <path className={styles.icon3} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M28.3,71l-0.5-2.6c0,0-1.1,0-2.9,1.6c-3.7,3.4-7.9,0.7-7.9,0.7"></path>
                  <path className={styles.icon3} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M13.2,74.8"></path>
                  <path className={styles.icon3} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M32.2,95.9l10,4.2c1.9,0.9,2.6,2.8,2.6,4.7v0.4v6.8"></path>
                  <polyline className={styles.icon4} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="23.2,97.4 27.1,101.8 32.3,96.1 30.1,92.2  "></polyline>
                  <path className={styles.icon3} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M14.2,95.9l-9.8,4c-0.6,0.4-1.1,0.9-1.6,1.5c-0.7,0.9-1,2-1,3.2v7.4"></path>
                  <path className={styles.icon3} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M13.6,80.4"></path>
                  <polyline className={styles.icon4} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="23.2,97.4 19.4,101.8 14.2,96.1 16.4,92.2  "></polyline>
                  <line className={styles.icon4} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="30.1" y1="92.2" x2="23.2" y2="97.4"></line>
                  <line className={styles.icon4} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="16.4" y1="92.2" x2="23.2" y2="97.4"></line>
                  <path className={styles.icon3} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M44.8,112c-6.1,3.4-13.5,5.4-21.5,5.4c-8,0-15.4-2-21.5-5.4"></path>
                </g>
                <polygon className={styles.icon0} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="60.4,9.1 49.2,25.8 59.5,25.8 58.1,37 70.8,20 59.5,20 "></polygon>
                <g opacity=".5">
                  <g>
                    <line className={styles.icon0} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="81.6" y1="14.6" x2="96.7" y2="14.6"></line>
                    <line className={styles.icon0} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="81.6" y1="21.2" x2="96.7" y2="21.2"></line>
                    <line className={styles.icon0} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="81.6" y1="27.8" x2="87.8" y2="27.8"></line>
                  </g>
                  <g>
                    <line className={styles.icon0} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="23.3" y1="14.6" x2="38.4" y2="14.6"></line>
                    <line className={styles.icon0} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="23.3" y1="21.2" x2="38.4" y2="21.2"></line>
                    <line className={styles.icon0} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="23.3" y1="27.8" x2="29.5" y2="27.8"></line>
                  </g>
                </g>
                </svg>
              </div>
              <h3>
                Launch a Contest
              </h3>
              <p>
                Work with hundreds of creative experts to get custom name suggestions for your business or brand. All names are auto-checked for URL availability.
              </p>
              <a>
                Launch a Contest
              </a>
            </div>
          </div>
          <div className={styles.partcontainer}>
            <div className={styles.partcontainerinfo}>
              <div>
                <svg className={styles.svgmini} viewBox="0 0 120 120"	xmlns="<http://www.w3.org/2000/svg>">
                    <path className={styles.icon40} opacity=".4" d="M97,28.8h17.5c3.1,0,5.6,2.5,5.6,5.6v67.5c0,3.1-2.5,5.6-5.6,5.6H17.1c-3.1,0-5.6-2.5-5.6-5.6V34.3  c0-3.1,2.5-5.6,5.6-5.6h17.5"></path>
                    <path className={styles.icon41} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M86.7,21.3h17.5c3.1,0,5.6,2.5,5.6,5.6v67.5c0,3.1-2.5,5.6-5.6,5.6H6.8c-3.1,0-5.6-2.5-5.6-5.6V26.9  c0-3.1,2.5-5.6,5.6-5.6h17.5"></path>
                    <line className={styles.icon42} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="55.6" y1="35.7" x2="78.4" y2="35.7"></line>
                    <line className={styles.icon43} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="55.6" y1="29.4" x2="78.4" y2="29.4"></line>
                    <polygon className={styles.icon42} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="73.6,18 86.7,18 73.6,4.8 "></polygon>
                    <polyline className={styles.icon42} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="24.3,73.3 24.3,4.8 73.6,4.8 "></polyline>
                    <line className={styles.icon42} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="86.7" y1="18" x2="86.7" y2="73.3"></line>
                    <path className={styles.icon40} opacity=".5" d="M43.5,28.8l1.9,3.8c0.1,0.1,0.2,0.2,0.3,0.2l4.1,0.6c0.4,0.1,0.5,0.5,0.2,0.8l-3,2.9C47,37.2,47,37.4,47,37.5  l0.7,4.1c0.1,0.4-0.3,0.6-0.7,0.5l-3.7-2c-0.1-0.1-0.3-0.1-0.4,0l-3.7,2c-0.3,0.2-0.7-0.1-0.7-0.5l0.7-4.1c0-0.1,0-0.3-0.1-0.4  l-3-2.9c-0.3-0.3-0.1-0.7,0.2-0.8l4.1-0.6c0.1,0,0.3-0.1,0.3-0.2l1.9-3.8C42.9,28.5,43.4,28.5,43.5,28.8z"></path>
                    <path className={styles.icon44} d="M40.2,25.5l1.9,3.8c0.1,0.1,0.2,0.2,0.3,0.2l4.1,0.6c0.4,0.1,0.5,0.5,0.2,0.8l-3,2.9c-0.1,0.1-0.2,0.3-0.1,0.4  l0.7,4.1c0.1,0.4-0.3,0.6-0.7,0.5l-3.7-2c-0.1-0.1-0.3-0.1-0.4,0l-3.7,2c-0.3,0.2-0.7-0.1-0.7-0.5l0.7-4.1c0-0.1,0-0.3-0.1-0.4  l-3-2.9c-0.3-0.3-0.1-0.7,0.2-0.8l4.1-0.6c0.1,0,0.3-0.1,0.3-0.2l1.9-3.8C39.6,25.2,40.1,25.2,40.2,25.5z"></path>
                    <path className={styles.icon45} d="M39.9,30.2l0.5,1.1c0,0,0.1,0.1,0.1,0.1l1.2,0.2c0.1,0,0.1,0.1,0.1,0.2L41,32.6c0,0,0,0.1,0,0.1l0.2,1.2  c0,0.1-0.1,0.2-0.2,0.1l-1.1-0.6c0,0-0.1,0-0.1,0L38.7,34c-0.1,0-0.2,0-0.2-0.1l0.2-1.2c0,0,0-0.1,0-0.1l-0.9-0.8  c-0.1-0.1,0-0.2,0.1-0.2l1.2-0.2c0,0,0.1,0,0.1-0.1l0.5-1.1C39.8,30.1,39.9,30.1,39.9,30.2z"></path>
                    <line className={styles.icon43} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="55.6" y1="51" x2="78.4" y2="51"></line>
                    <line className={styles.icon42} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="55.6" y1="57.4" x2="78.4" y2="57.4"></line>
                    <path className={styles.icon40} opacity=".5" d="M43.5,50.5l1.9,3.8c0.1,0.1,0.2,0.2,0.3,0.2l4.1,0.6c0.4,0.1,0.5,0.5,0.2,0.8l-3,2.9C47,58.9,47,59,47,59.2  l0.7,4.1c0.1,0.4-0.3,0.6-0.7,0.5l-3.7-2c-0.1-0.1-0.3-0.1-0.4,0l-3.7,2c-0.3,0.2-0.7-0.1-0.7-0.5l0.7-4.1c0-0.1,0-0.3-0.1-0.4  l-3-2.9c-0.3-0.3-0.1-0.7,0.2-0.8l4.1-0.6c0.1,0,0.3-0.1,0.3-0.2l1.9-3.8C42.9,50.1,43.4,50.1,43.5,50.5z"></path>
                    <path className={styles.icon44} d="M40.2,47.2l1.9,3.8c0.1,0.1,0.2,0.2,0.3,0.2l4.1,0.6c0.4,0.1,0.5,0.5,0.2,0.8l-3,2.9c-0.1,0.1-0.2,0.3-0.1,0.4  l0.7,4.1c0.1,0.4-0.3,0.6-0.7,0.5l-3.7-2c-0.1-0.1-0.3-0.1-0.4,0l-3.7,2c-0.3,0.2-0.7-0.1-0.7-0.5l0.7-4.1c0-0.1,0-0.3-0.1-0.4  l-3-2.9c-0.3-0.3-0.1-0.7,0.2-0.8l4.1-0.6c0.1,0,0.3-0.1,0.3-0.2l1.9-3.8C39.6,46.8,40.1,46.8,40.2,47.2z"></path>
                    <line className={styles.icon42} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="95.3" y1="73.3" x2="15.7" y2="73.3"></line>
                    <path className={styles.icon42} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M109.8,94.4"></path>
                    <path className={styles.icon45} d="M39.9,51.8l0.5,1.1c0,0,0.1,0.1,0.1,0.1l1.2,0.2c0.1,0,0.1,0.1,0.1,0.2L41,54.2c0,0,0,0.1,0,0.1l0.2,1.2  c0,0.1-0.1,0.2-0.2,0.1l-1.1-0.6c0,0-0.1,0-0.1,0l-1.1,0.6c-0.1,0-0.2,0-0.2-0.1l0.2-1.2c0,0,0-0.1,0-0.1l-0.9-0.8  c-0.1-0.1,0-0.2,0.1-0.2l1.2-0.2c0,0,0.1,0,0.1-0.1l0.5-1.1C39.8,51.8,39.9,51.8,39.9,51.8z"></path>
                    <path className={styles.icon42} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M99.2,83"></path>
                    <line className={styles.icon42} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="1.2" y1="83" x2="109.8" y2="83"></line>
                    <path className={styles.icon43} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M58.5,91.8c0,1.7-1.4,3-3,3c-1.7,0-3-1.4-3-3c0-1.7,1.4-3,3-3C57.2,88.7,58.5,90.1,58.5,91.8z"></path>
                    <path className={styles.icon42} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M8.7,83"></path>
                    <line className={styles.icon43} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="83.5" y1="115.2" x2="27.6" y2="115.2"></line>
                    <polygon className={styles.icon44} points="41.9,99.1 38.7,114.3 72.4,114.3 69.1,99.1 "></polygon>
                </svg>
              </div>
              <h3>
                Explore Names For Sale
              </h3>
              <p>
                Our branding team has curated thousands of pre-made names that you can purchase instantly. All names include a matching URL and a complimentary Logo Design
              </p>
              <a>
                Explore Names For Sale
              </a>
              </div>
          </div>
          <div className={styles.partcontainer}>
            <div className={styles.partcontainerinfo}>
              <div>
                <svg className={styles.svgmini} viewBox="0 0 120 120"	xmlns="<http://www.w3.org/2000/svg>">
                  <line className={styles.icon20} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="99.8" y1="26.9" x2="106.5" y2="24.1"></line>
                  <line className={styles.icon20} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="47.1" y1="26.9" x2="40.4" y2="24.1"></line>
                  <line className={styles.icon20} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="99.8" y1="48.7" x2="106.5" y2="51.5"></line>
                  <line className={styles.icon20} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="47.1" y1="48.7" x2="40.4" y2="51.5"></line>
                  <g>
                    <line className={styles.icon20} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="84.4" y1="11.5" x2="87.1" y2="4.8"></line>
                  </g>
                  <g>
                    <line className={styles.icon20} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="59.8" y1="4.8" x2="62.5" y2="11.5"></line>
                  </g>
                  <g>
                    <line className={styles.icon20} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="48.2" y1="12.5" x2="53.3" y2="17.6"></line>
                  </g>
                  <g>
                    <line className={styles.icon20} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="98.7" y1="12.5" x2="93.6" y2="17.6"></line>
                  </g>
                  <line className={styles.icon20} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="48.2" y1="63.1" x2="53.3" y2="58"></line>
                  <line className={styles.icon20} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="98.7" y1="63.1" x2="93.6" y2="58"></line>
                  <g>
                    <line className={styles.icon20} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="73.5" y1="2.1" x2="73.5" y2="9.3"></line>
                  </g>
                  <g>
                    <line className={styles.icon20} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="102" y1="37.8" x2="109.2" y2="37.8"></line>
                  </g>
                  <g>
                    <line className={styles.icon20} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="37.7" y1="37.8" x2="45" y2="37.8"></line>
                  </g>
                  <path className={styles.icon20} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M84.3,96.7l17.3-4.7c2.1-0.6,4.3,0.6,5,2.7l0,0c0.6,1.9-0.2,4.1-2.1,5L71,116.5c-3.7,1.8-8,2-11.7,0.4  l-18.6-7.9h-9.4"></path>
                  <path className={styles.icon20} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M31.2,82.5h9.4l19.8,6.1h11.6c2.7,0,4.9,2.2,4.9,4.9l0,0c0,2.5-2,4.5-4.5,4.5h-12c-2.6,0-4.7,2.1-4.7,4.7l0,0"></path>
                  <path className={styles.icon21} d="M12.2,112.3h17.6c0.8,0,1.4-0.6,1.4-1.4V80.6c0-0.8-0.6-1.4-1.4-1.4H12.2c-0.8,0-1.4,0.6-1.4,1.4v30.3  C10.8,111.6,11.4,112.3,12.2,112.3z"></path>
                  <path className={styles.icon20} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M84.1,62.6v-7.8c5.7-3.6,9.5-9.8,9.5-17c0-11.1-9-20.1-20.1-20.1c-11.1,0-20.1,9-20.1,20.1  c0,7.2,3.8,13.5,9.5,17v7.8"></path>
                  <line className={styles.icon22} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="73.5" y1="55.4" x2="73.5" y2="69.7"></line>
                  <line className={styles.icon22} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="84.1" y1="69.7" x2="62.8" y2="69.7"></line>
                  <line className={styles.icon22} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="68.4" y1="77.9" x2="78.5" y2="77.9"></line>
                  <line className={styles.icon23} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="21.8" y1="85.7" x2="21.8" y2="88.8"></line>
                  <circle className={styles.icon24} opacity=".5" cx="76.8" cy="40.8" r="10.6"></circle>
                  <circle className={styles.icon21} cx="73.2" cy="36.7" r="10.6"></circle>
                  <line className={styles.icon23} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="73.2" y1="41.7" x2="73.2" y2="39.7"></line>
                  <line className={styles.icon23} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="73.2" y1="34.1" x2="73.2" y2="34.1"></line>
                </svg>
              </div>
              <h3>
                Agency-level Managed Contests
              </h3>
              <p>
                Our Managed contests combine the power of crowdsourcing with the rich experience of our branding consultants. Get a complete agency-level experience at a fraction of Agency costs
              </p>
              
              <a>
                Learn More
              </a>
              </div>
            </div>
          </div>
          <div className={styles.contestname}>
            <svg className={styles.svgmini} viewBox="0 0 120 120"	xmlns="<http://www.w3.org/2000/svg>">
              <rect x="45" y="98" transform="matrix(-1 -1.224647e-16 1.224647e-16 -1 119.9994 207.4113)" className={styles.icon70} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" width="30.1" height="11.4"></rect>
              <polyline className={styles.icon71} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="82.9,116.1 82.9,91.3 37.1,91.3 37.1,116.1 "></polyline>
              <line className={styles.icon70} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" x1="96.3" y1="116.5" x2="23.7" y2="116.5"></line>
              <polygon className={styles.icon72} opacity=".5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="65,22 70.3,32.9 82.3,34.6 73.6,43 75.7,55 65,49.3 54.3,55 56.3,43 47.7,34.6 59.6,32.9 "></polygon>
              <polygon className={styles.icon73} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="60,17.1 65.3,27.9 77.3,29.7 68.7,38.1 70.7,50 60,44.4 49.3,50 51.3,38.1 42.7,29.7 54.7,27.9 "></polygon>
              <polygon className={styles.icon74} points="60,26.3 62.4,31.1 67.7,31.8 63.8,35.5 64.7,40.8 60,38.3 55.3,40.8 56.2,35.5 52.3,31.8 57.6,31.1 "></polygon>
              <path className={styles.icon70} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M41.8,58.9c0.6,1,1.4,2.1,2.3,3.1"></path>
              <path className={styles.icon71} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M53.9,91.2v-1.9c0-5.5-2.6-10.6-7-13.9C36,67.1,24.7,53.6,24.7,32V3.5H94L93.9,32c0,18.4-10.8,35.4-21.9,43.5  c-4.5,3.3-7.2,8.5-7.2,14.1v1.6"></path>
              <path className={styles.icon71} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M30.8,57.4c-20.3,0-29.6-16.8-29.6-37.4v-4.5c0-1.9,1.1-3.5,2.5-3.5h21"></path>
              <path className={styles.icon71} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M87.5,57.4c21.7,0,31.3-16.8,31.3-37.4v-4.5c0-1.9-1.1-3.5-2.5-3.5h-22"></path>
              <path className={styles.icon70} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M33.6,32.2c0.3,6.6,1.6,13.2,4.1,19.1"></path>
            </svg>
            <h2>
              How Do Naming Contests Work?
            </h2>
          </div>
          <div className={styles.infoman}>
            <div>
              <svg className={styles.svgman} viewBox="0 0 925.4 1059.7"	xmlns="<http://www.w3.org/2000/svg>">
                <line className={styles.supportman0} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" x1="485" y1="983.3" x2="485" y2="505.3"></line>
                <line className={styles.supportman0} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" x1="577.7" y1="960.7" x2="511.5" y2="1048.8"></line>
                <line className={styles.supportman0} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" x1="673.6" y1="833.9" x2="600.5" y2="931.1"></line>
                <polyline className={styles.supportman2} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" points="319.3,981.8 306.6,1057.4 186,1038.2 281.4,1019.7 289.4,976.8 "></polyline>
                <polyline className={styles.supportman2} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" points="583.3,910.1 626.9,973.1 527.1,1043.5 582.5,963.7 558.4,927.4 "></polyline>
                <path className={styles.supportman3} d="M418.6,736.7c-1.4,7.3,120.3,201.2,130,201.2c12.5,0,41.2-21.3,41.2-27.3S535,764.9,535,741.3  S430.6,674.3,418.6,736.7z"></path>
                <line className={styles.supportman0} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" x1="397" y1="1037.3" x2="397" y2="505.3"></line>
                <rect x="573" y="579.3" transform="matrix(0.2294 -0.9733 0.9733 0.2294 71.9387 1283.0938)" className={styles.supportman4}  width="546.6" height="33.6"></rect>
                <rect x="633.9" y="656.5" transform="matrix(0.2294 -0.9733 0.9733 0.2294 -290.5623 1260.4218)" className={styles.supportman4}  width="33.6" height="314.4"></rect>
                <path className={styles.supportman2} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M617.8,475.3C636,393.1,676,298.6,749.2,269.9"></path>
                <path className={styles.supportman2} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M817.5,265.3c30.5,12.2,43.5,49.9,43.5,78c0,157-32.3,314.1-51,326c-33,21-187.1-29-201-62  c-4.1-9.8-4.9-37.4-1-73.1"></path>
                <path className={styles.supportman2} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M749.2,269.9c1-12.6,1.1-25.3,0.5-38"></path>
                <path className={styles.supportman2} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M806,185.3c-1,6,1,57,15,89c-3.1,4.9-21.6,13.6-40.5,15.4"></path>
                <path className={styles.supportman2} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M785.4,183.8c-8.2,29.7-26.6,50.4-47.9,50.4c-29,0-52.5-38.3-52.5-85.5c0-7.5,0.6-15.1,1.8-22.5"></path>
                <path className={styles.supportman2} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M667.5,124.1c-38.6-8.3-44.5-38.9-44.5-50.9c0-37,33-38,47-46c15.9-9.1,28-26,51-26c22,0,38.5,21,52,28  c23,12,78,10,78,52c0,30-11,38-11,52c0,8,2,11,2,27c0,18.3-16,28.3-27.3,30.5"></path>
                <path className={styles.supportman2} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M781.5,139.3c10.2,0,18.5,8.3,18.5,18.5s-8.3,18.5-18.5,18.5"></path>
                <path className={styles.supportman2} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M729.5,457.3c-5.6,13.4-14,37-15.5,59c-15-6-159-71-186-71c-53,0-67,17-67,25c0,15,65,13,74,18s187,121,209,121  c19.9,0,66.7-76.7,77-108.5"></path>
                <path className={styles.supportman2} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M846.3,469.8c-5.8,18.5-12.9,31.2-19.3,31.5c-22,1-102-41-108-54c-4-8.6,26-68.5,60.7-101.7"></path>
                <rect y="492.3" className={styles.supportman4}  width="510" height="20"></rect>
                <line className={styles.supportman0} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" x1="31" y1="1037.3" x2="31" y2="505.3"></line>
                <line className={styles.supportman0} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" x1="123" y1="983.3" x2="123" y2="505.3"></line>
                <rect x="374" y="481.3" className={styles.supportman5} width="115" height="11"></rect>
                <rect x="346.3" y="335.2" transform="matrix(0.9418 -0.3363 0.3363 0.9418 -118.7956 141.1022)" className={styles.supportman5}  width="3.3" height="156.6"></rect>
                <line className={styles.supportman0} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" x1="747.3" y1="846.8" x2="817" y2="1056.2"></line>
                <line className={styles.supportman0} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" x1="565.2" y1="808.3" x2="404.8" y2="1021.6"></line>
                <line className={styles.supportman0} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" x1="642.2" y1="827.9" x2="712" y2="1037.3"></line>
                <path className={styles.supportman3} d="M802.1,672.5C757.5,683.8,622,638.1,609,607.3c-1-2.5-1.6-5.2-2-7.8c-58.9-15.2-122.3-26.3-177.5-26.3  c-90.8,0-165,397.4-165,404.3c7.3,2.1,56.5,9,56.5,9s123.4-251.8,126.8-268.9c12.4,8.6,168.9,89.9,229.3,89.9  c66.2,0,128.3-68,128.3-130.6C805.3,675.7,804.2,674.3,802.1,672.5z"></path>
                <path className={styles.supportman1} opacity=".05" d="M802.1,672.5C757.5,683.8,622,638.1,609,607.3c-1-2.5-1.6-5.2-2-7.8c-58.9-15.2-122.3-26.3-177.5-26.3  c-90.8,0-165,397.4-165,404.3c7.3,2.1,56.5,9,56.5,9s123.4-251.8,126.8-268.9c12.4,8.6,168.9,89.9,229.3,89.9  c66.2,0,128.3-68,128.3-130.6C805.3,675.7,804.2,674.3,802.1,672.5z"></path>
                <circle cx="710.7" cy="147.4" r="3.8"></circle>
                <path className={styles.supportman2} strokeWidth="4.4095" strokeLinecap="round" strokeMiterlimit="10" d="M722.5,198.6c-4.4,1.9-9.2,3.4-13.9,4.1"></path>
              </svg>
            </div>
            <div className={styles.infocont}>
              <div className={styles.boxcont}>
                <span>1.</span>
                <p>Fill out your Naming Brief and begin receiving name ideas in minutes</p>
              </div>
              <div className={styles.boxcont}>
                <span>2.</span>
                <p>Rate the submissions and provide feedback to creatives. Creatives submit even more names based on your feedback.</p>
              </div>
              <div className={styles.boxcont}>
                <span>3.</span>
                <p>Our team helps you test your favorite names with your target audience. We also assist with Trademark screening.</p>
              </div>
              <div className={styles.boxcont}>
                <span>4.</span>
                <p>Pick a Winner. The winner gets paid for their submission.</p>
              </div>
            </div>
          </div>
          <div className={styles.boxlaunching}>
            <div className={styles.boxlinks}>
              <a href='#'>Launching A Contest</a>
              <a href='#'>Buying From Marketplace</a>
              <a href='#'>Managed Contests</a>
              <a href='#'>For Creatives</a>
            </div>
            <div>
              <div className={styles.containerdetails}>
                <h3>Launching A Contest</h3>
                <details open>
                  <summary className={styles.det}>How long does it take to start receiving submissions?<div className={styles.arrow}>→</div></summary>
                  <div className={styles.info}>
                  For Naming contests, you will start receiving your submissions within few minutes of launching your contest. Since our creatives are located across the globe, you can expect to receive submissions 24 X 7 throughout the duration of the brainstorming phase .
                  </div>
                </details>
                <details>
                  <summary className={styles.det}>How long do Naming Contests last?<div className={styles.arrow}>→</div></summary>
                  <div className={styles.info}>
                  You can choose a duration from 1 day to 7 days. We recommend a duration of 3 Days or 5 Days. This allows for sufficient time for entry submission as well as brainstorming with creatives. If you take advantage of our validation services such as Audience Testing and Trademark Research, both will be an additional 4-7 days (3-5 business days for Audience Testing and 1-2 business days for Trademark Research).
                  </div>
                </details>
                <details>
                  <summary className={styles.det}>Where are the creatives located?<div className={styles.arrow}>→</div></summary>
                  <div className={styles.info}>
                  About 70% of our Creatives are located in the United States and other English speaking countries (i.e. United Kingdom, Canada, and Australia.). We utilize an advanced rating score algorithm to ensure that high quality creatives receive more opportunities to participate in our contests.
                  </div>
                </details>
                <details>
                  <summary className={styles.det}>
                    What if I do not like any submissions?<div className={styles.arrow}>→</div></summary>
                  <div className={styles.info}>
                  While it is unusually rare that you will not like any names provided, we have a few options in case this problem occurs:
                  <ul>
                    <li>If the contest ends and you have not yet found a name that you’d like to move forward with, we can provide complimentary extension of your contest as well as a complimentary consultation with one of our branding consultants (a $99 value).</li>
                    <li>By exploring our premium domain marketplace you can apply the contest award towards the purchase of any name listed for sale.</li>
                    <li>If you choose the Gold package or Platinum package and keep the contest as "Not Guaranteed", you can request a partial refund if you choose not to move forward with any name from you project. (Please note that the refund is for the contest award). Here is a link to our <a href='#'>Refund Policy
                    </a></li>
                  </ul>
                  </div>
                </details>
                <details>
                  <summary className={styles.det}>How much does it cost?<div className={styles.arrow}>→</div></summary>
                  <div className={styles.info}>
                  Our naming competitions start at $299, and our logo design competitions start at $299. Also, there are three additional contest level that each offer more features and benefits. See our Pricing Page for details
                  </div>
                </details>
                <details>
                  <summary className={styles.det}> I need both a Name and a Logo. Do you offer any discount for multiple contests<div className={styles.arrow}>→</div></summary>
                  <div className={styles.info}>
                  Yes! We have many contest bundles - our most popular being our Name, Tagline, and Logo bundle. Bundles allow you to purchase multiple contests at one time and save as much as from $75 - $400. You can learn more about our bundle options on our Pricing Page.
                  </div>
                </details>
                <details>
                  <summary className={styles.det}>What if I want to keep my business idea private?<div className={styles.arrow}>→</div></summary>
                  <div className={styles.info}>
                  You can select a Non Disclosure Agreement (NDA) option at the time of launching your competition. This will ensure that only those contestants who agree to the NDA will be able to read your project brief and participate in the contest. The contest details will be kept private from other users, as well as search engines.
                  </div>
                </details>
                <details>
                  <summary className={styles.det}>Can you serve customers outside the US?<div className={styles.arrow}>→</div></summary>
                  <div className={styles.info}>
                  Absolutely. Squadhelp services organizations across the globe. Our customer come from many countries, such as the United States, Australia, Canada, Europe, India, and MENA. We’ve helped more than 25,000 customer around the world.
                  </div>
                </details>
                <details>
                  <summary className={styles.det}>Can I see any examples?<div className={styles.arrow}>→</div></summary>
                  <div className={styles.info}>
                  Our creatives have submitted more than 6 Million names and thousands of logos on our platform. Here are some examples of Names, Taglines, and Logos that were submitted in recent contests.
                  <ul>
                    <li><a href='#'>Name Examples</a></li>
                    <li><a href='#'>Tagline Examples</a></li>
                    <li><a href='#'>Logo Examples</a></li>
                  </ul>
                  </div>
                </details>
              </div>
              <div className={styles.line}></div>
              <div className={styles.containerdetails}>
                <h3>Buying From Marketplace</h3>
                <details open>
                  <summary className={styles.det}>What's included with a Domain Purchase?<div className={styles.arrow}>→</div></summary>
                  <div className={styles.info}>
                  When you purchase a domain from our premium domain marketplace, you will receive the exact match .com URL, a complimentary logo design (along with all source files), as well as a complimentary Trademark report and Audience Testing if you’re interested in validating your name.
                  </div>
                </details>
                <details>
                  <summary className={styles.det}>How does the Domain transfer process work?<div className={styles.arrow}>→</div></summary>
                  <div className={styles.info}>
                  Once you purchase a Domain, our transfer specialists will reach out to you (typically on the same business day). In most cases we can transfer the domain to your preferred registrar (such as GoDaddy). Once we confirm the transfer details with you, the transfers are typically initiated to your account within 1 business day.
                  </div>
                </details>
                <details>
                  <summary className={styles.det}>If I purchase a Domain on installments, can I start using it to setup my website?<div className={styles.arrow}>→</div></summary>
                  <div className={styles.info}>
                  We offer payment plans for many domains in our Marketplace. If you purchase a domain on a payment plan, we hold the domain in an Escrow account until it is fully paid off. However our team can assist you with making any changes to the domains (such as Nameserver changes), so that you can start using the domain right away after making your first installment payment.
                  </div>
                </details>
              </div>
              <div className={styles.containerdetails}>
                <h3>Managed Contests</h3>
                <details open>
                  <summary className={styles.det}>What are Managed Contests?<div className={styles.arrow}>→</div></summary>
                  <div className={styles.info}>
                  The 'Managed' option is a fully managed service by Squadhelp Branding experts. It includes a formal brief preparation by Squadhelp team and management of your contest. Managed Contests are a great fit for companies that are looking for an "Agency" like experience and they do not want to manage the contest directly.
                  Our branding team has directly managed hundreds of branding projects and has learned several best practices that lead to successful project outcomes. Our team will apply all best practices towards the management of your branding project.
                  Learn more about our <a href='#'>Managed Contest Service</a>
                  </div>
                </details>
                <details>
                  <summary className={styles.det}>What's a typical timeline for a Managed Contest?<div className={styles.arrow}>→</div></summary>
                  <div className={styles.info}>
                  The overall process takes 12-13 days.
                  <ul>
                    <li>The Managed projects start with a project kick-off call with your Branding Consultant. You can schedule this call online immediately after making your payment</li>
                    <li>After your kick-off call, the Branding consultant will write your project brief and send for your approval within 1 business day.</li>
                    <li>Upon your approval, the contest will go live. The branding consultant will help manage your project throughout the brainstorming phase (typically 5 days).</li>
                    <li>Upon the completion of brainstorming phase, the branding consultant will work with you to test the top 6 names from your Shortlist (3-5 Days). In addition, the branding consultant will coordinate the detailed Trademark screening (1-3 days)</li>
                  </ul>
                  </div>
                </details>
                <details>
                  <summary className={styles.det}>How much do Managed Contests cost?<div className={styles.arrow}>→</div></summary>
                  <div className={styles.info}>
                  We offer two levels of Managed Contests. Standard ($1499) and Enterprise ($2999). The Enterprise managed contest includes:
                  <ul>
                    <li>(1) a $500 award amount (instead of $300), which will attract our top Creatives and provide more options to choose from;</li>
                    <li>(2) we will ensure a senior member of our branding team is assigned to your project and the branding team will invest about 3X more time in the day-to-day management of your project;</li>
                    <li>(3) you will receive more high-end trademark report and 5X more responses for your audience test.</li>
                    <li>Here is a link to our <a>Pricing page</a> with a detailed comparison of the two packages.</li>
                  </ul>
                  </div>
                </details>
                <details>
                  <summary className={styles.det}>Where are the Branding Consultants located?<div className={styles.arrow}>→</div></summary>
                  <div className={styles.info}>
                  All our branding consultants are based in in our Headquarters (Hoffman Estates, IL). Our branding consultants have many years of experience in managing hundreds of branding projects for companies ranging from early stage startups to Fortune 500 corporations.
                  </div>
                </details>
              </div>
              <div className={styles.line}></div>
              <div className={styles.containerdetails}>
                <h3>For Creatives</h3>
                <details open>
                  <summary className={styles.det}>Can anyone join your platform?<div className={styles.arrow}>→</div></summary>
                  <div className={styles.info}>
                  We are open to anyone to signup. However, we have an extensive "<a>Quality Scoring</a>" process which ensures that high quality creatives have the ability to continue to participate in the platform. On the other hand, we limit the participation from those creatives who do not consistently receive high ratings.
                  </div>
                </details>
                <details>
                  <summary className={styles.det}>Can I start participating immediately upon signing up?<div className={styles.arrow}>→</div></summary>
                  <div className={styles.info}>
                  When you initially signup, you are assigned few contests to assess your overall quality of submissions. Based upon the quality of your submissions, you will continue to be assigned additional contests. Once you have received enough high ratings on your submissions, your account will be upgraded to "Full Access", so that you can begin participating in all open contests.
                  </div>
                </details>
                <details>
                  <summary className={styles.det}>How Do I Get Paid?<div className={styles.arrow}>→</div></summary>
                  <div className={styles.info}>
                  We handle creative payouts via Paypal or Payoneer. Depending upon your country of residence, we may require additional documentation to verify your identity as well as your Tax status.
                  </div>
                </details>
              </div>
            </div>
          </div>
          <div className={styles.contest}>
            <div className={styles.svg1}>
              <figure className="position-absolute top-0 left-0 w-100 max-width-27 z-index-n1">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                     viewBox="0 0 384.1 283.3"
                     className="injected-svg js-svg-injector" data-parent="#SVGctaSection">
                  <g>
                    <defs>
                      <rect id="abstractShapesID8_1" width="384.1" height="283.3"></rect>
                    </defs>
                    <path className={styles.abstractshapes80} clip-path="url(#abstractShapesID8_2)"
                          d="M-160.5-53c29.5-3.9,58.5-7.9,82.9-27.9c17.7-14.4,29.8-35.1,34.1-57.5c5.6-29.4-3.4-64.4,15.2-90.2   c10-13.8,25.8-21.8,42.9-21.7c44.3,0.4,61.3,41.3,67.3,79.1c7.1,44.4,5.2,93,45.4,122.6c23.8,17.5,60.1,21.9,77.9,47.6   c26.1,37.6-18.6,74.7-48.2,91.9c-26.8,15.5-53.5,29.6-82.8,39.9c-15.2,5.4-31.6,8.8-47.5,5.9c-39-7.1-38.9-47.7-58.5-74.4   c-10.4-14.2-25.3-23.6-42.4-27.7c-31-7.6-63.8-3-95.2-0.6c-30,2.3-70.1-16.7-59.5-53.5c4.8-16.8,20.8-25.3,36.9-28.6   C-181.6-50.2-171-51.6-160.5-53z"></path>
                    <path className={styles.abstractshapes81} clip-path="url(#abstractShapesID8_2)"
                          d="M369.1,21.5c-14.7-73.5-31.3-154.9-83.3-212.2c-65.3-72-161.9-133.7-254.4-163.2c-47-15-86,2.5-110.9,44.3   c-16,27-22.7,58.9-40.6,84.6c-15.9,22.8-39.2,42.2-46.9,69.9c-8.5,30.5,9.6,62.6,30.7,83.4c17.8,17.6,39.5,29.4,64.9,30.3   c8.4,0.3,17.5-0.9,27-2.6c42-7.5,90.3-24.9,102.6,33.2c5,23.8-6.2,42.3-17.3,62.5c-13.7,24.7-22.3,55.9-14.8,83.9   c7.5,28.2,36.2,56.4,66.7,40.8c35.1-18,43.6-64.2,82.1-79.3c24.1-9.4,45.7,1.1,63,18.9c11,11.4,19.3,25.2,26.5,39.4   c16.5,32.6,49.9,60.7,86.9,35.6C404.6,155,379.3,72.1,369.1,21.5z"></path>
                    <circle className={styles.abstractshapes82} stroke-width="3" stroke-miterlimit="10"
                            clip-path="url(#abstractShapesID8_2)" cx="193.8" cy="257.8" r="14.4"></circle>
                    <circle className={styles.abstractshapes82} stroke-width="2" stroke-miterlimit="10"
                            clip-path="url(#abstractShapesID8_2)" cx="202.8" cy="220" r="5.4"></circle>
                  </g>
                </svg>
              </figure>
            </div>
            <div className={styles.contestinfo}>
              <h3>Ready to get started?</h3>
              <p>Fill out your contest brief and begin receiving custom name suggestions within minutes.</p>
              <a href="#">Start A Contest</a>
            </div>
            <div className={styles.svg2}>
              <svg xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                   viewBox="0 0 385.3 279.2"
                   className="injected-svg js-svg-injector" data-parent="#SVGctaSection">
                  <g>
                    <path className={styles.abstractshapes50} clip-path="url(#abstractShapesID5_2)"
                        d="M247.1,109.8c7.3,20.4,16.6,50.8,8,70.9c-6.6,15.6-19,38.4-34.6,35.3c-13.1-16.9-39.8-52.2-57-66   c-14.2-11.4-36-23.2-49.8-35.6C79.5,83.6,66.3,41.8,47.3,0C81.9,3.5,116.1,10,150,19.4c21.8,6.2,44.3,14.2,60.8,29.4   C229.1,64.5,239.5,87,247.1,109.8z"></path>
                  <g clip-path="url(#abstractShapesID5_2)">
                  <g>
                      <path className={styles.abstractshapes52}
                            d="M49.4,1.8C89.7,21,126.8,46,158.5,76.9c34.4,34,57.5,73.9,83.3,113.8c0.4,1.2,2.7,0,1.6-1.2     C199.2,107,137,37.4,49.4,0.6C49.4,0.7,48.6,1.1,49.4,1.8L49.4,1.8z"></path>
                  </g>
                    <g>
			          <path className={styles.abstractshapes52}
                        d="M72.8,54.3c27.8-1.6,52-0.4,76.3,14.9c1.6,1.2,3.1-1.6,1.6-2.7c-21.5-14.1-52.8-22.7-78.2-14.1     C71.7,53.1,71.7,54.3,72.8,54.3L72.8,54.3z"></path>
                    </g>
                    <g>
                        <path className={styles.abstractshapes52}
                              d="M116.2,100.4c13.3,0,26.2-0.4,39.1,2.7c11.7,2.7,23.1,7,34.8,11.3c1.6,0.4,2-1.6,0.4-2.7     c-23.5-8.6-50.1-18.8-75.1-12.5C115.9,100,115.9,100.4,116.2,100.4L116.2,100.4z"></path>
                    </g>
                                <g>
                        <path className={styles.abstractshapes52}
                              d="M167.9,141.5c9,0.4,18.8,1.6,27.8,3.1c10.6,2,17.6,7.4,24.6,15.6c1.2,1.2,3.1-0.4,2-2     c-6.3-7.4-12.9-12.9-23.1-15.6c-10.2-2-21.1-2.7-31.7-2C167.5,140.3,167.5,141.5,167.9,141.5L167.9,141.5z"></path>
                    </g>
                                <g>
                        <path className={styles.abstractshapes52}
                              d="M129.9,22.2c0.4,10.2,5.9,20.3,9.8,29.7c2.7,5.9,4.7,16,12.5,17.2c0.4,0,1.2-0.4,0.4-1.2     c-12.9-10.6-13.3-31.7-21.9-45.8C130.7,21.4,129.9,21.4,129.9,22.2L129.9,22.2z"></path>
                    </g>
                                <g>
                        <path className={styles.abstractshapes52}
                              d="M171.8,34.3c2.7,27.8,11.3,55.1,21.1,81c0.4,1.2,2.7,0.4,2-0.4c-10.2-26.2-15.6-53.2-21.9-80.6     C172.6,33.9,171.8,33.9,171.8,34.3L171.8,34.3z"></path>
                    </g>
                                <g>
                        <path className={styles.abstractshapes52}
                              d="M216.8,93c0,23.5,5.9,47.7,9.8,70.8c0.4,1.6,3.1,1.2,2.7-0.4c-4.3-23.5-7.4-46.5-11.3-70.4     C217.9,91.8,216.8,91.8,216.8,93L216.8,93z"></path>
                    </g>
                </g>
                  <path className={styles.abstractshapes53} clip-path="url(#abstractShapesID5_2)"
                        d="M366.9,378.4c-33.4-4.4-66.3-9-94-31.6c-20-16.3-33.8-39.8-38.6-65.1c-6.4-33.3,3.8-73-17.3-102.3   c-11.3-15.7-29.2-24.8-48.6-24.6c-50.2,0.5-69.4,46.8-76.3,89.6c-8,50.3-5.9,105.4-51.5,138.9c-26.9,19.8-68.1,24.9-88.3,54   C-77.2,480-26.6,522,7,541.4c30.4,17.6,60.7,33.5,93.9,45.2c17.3,6.1,35.9,9.9,53.9,6.7c44.3-8.1,44.1-54.1,66.3-84.3   c11.8-16.1,28.7-26.7,48-31.4c35.2-8.6,72.4-3.4,107.9-0.7c34,2.6,79.4-19,67.5-60.6c-5.5-19.1-23.6-28.7-41.9-32.4   C390.8,381.6,378.8,380,366.9,378.4z"></path>
                  <path className={styles.abstractshapes54}fill="url(#abstractShapesID5_3)"
                        clip-path="url(#abstractShapesID5_2)"
                        d="M226.1,178.5c60.5-44.6,146.8-0.3,143.9,74.9c0,1-0.1,2-0.1,2.9c-5.7,95,128.3,111.4,51.9,156.6   s5.1,77-71.6,107.4c-76.8,30.4-120.3,93.2-214.1-12.1C50.7,412.3-13.8,450.3,2.5,368.6c3-15.2,4.9-30.7,4.9-46.2   c0.1-25.7,12.8-71.2,95.6-89.1C157.1,221.7,197.8,199.3,226.1,178.5z"></path>
                  <path fill="url(#abstractShapesID5_4)" clip-path="url(#abstractShapesID5_2)"
                        d="M226.1,178.5c60.5-44.6,146.8-0.3,143.9,74.9c0,1-0.1,2-0.1,2.9c-5.7,95,128.3,111.4,51.9,156.6   s5.1,77-71.6,107.4c-76.8,30.4-120.3,93.2-214.1-12.1C50.7,412.3-13.8,450.3,2.5,368.6c3-15.2,4.9-30.7,4.9-46.2   c0.1-25.7,12.8-71.2,95.6-89.1C157.1,221.7,197.8,199.3,226.1,178.5z"></path>
                  <path className={styles.abstractshapes54} stroke-width="3" stroke-miterlimit="10"
                        clip-path="url(#abstractShapesID5_2)"
                        d="M340,48.2c-0.1-1.9-1-3.6-2.5-4.7c-2.3-1.7-6.1-2.2-11.4,5.5c-8.4,12.2-0.5,11.7,0.6,11.6c0.1,0,0.2,0,0.3,0   l7.3-0.5c3.5-0.2,6.2-3.3,6-6.8L340,48.2z"></path>
                  </g>
              </svg>
            </div>
          </div>
          <div className={styles.containerrow}>
            <div>
              <img src={`${CONSTANTS.STATIC_IMAGES_PATH}stars.svg`}/>
              <p>
                <span>4.9 out of 5 stars</span> from 25,000+ customers.
              </p>
            </div>
            <div className={styles.oblique}></div>
            <div>
              <img src={`${CONSTANTS.STATIC_IMAGES_PATH}people.png`}/>
              <p>
                Our branding community stands <span>200,000+</span> strong.
              </p>
            </div>
            <div className={styles.oblique}></div>
            <div>
              <img src={`${CONSTANTS.STATIC_IMAGES_PATH}sharing-files.svg`}/>
              <p>
                <span>140+ Industries</span> supported across more than <span>85 countries</span> – and counting.
              </p>
            </div>
          </div>
          <div className={styles.containerwithtel}>
            <div className={styles.containerwhithtelinfo}>
              <div className={styles.withtelinfo}>
                <span>></span>
                <div>
                  <h4>Pay a Fraction of cost vs hiring an agency</h4>
                  <p>For as low as $199, our naming contests and marketplace allow you to get an amazing brand quickly and affordably.</p>
                </div>
              </div>
              <div className={styles.lineinfo}></div>
              <div className={styles.withtelinfo}>
                <span>></span>
                <div>
                  <h4>Satisfaction Guarantee</h4>
                  <p>Of course! We have policies in place to ensure that you are satisfied with your experience. <a href="#">Learn more</a></p>
                </div>
              </div>
            </div>
            <div className={styles.questions}>
                <h4>Questions?</h4>
                <p>Speak with a Squadhelp platform expert to learn more and get your questions answered.</p>
                <button>Schedule Consultation</button>
                <div>
                  <img src={`${CONSTANTS.STATIC_IMAGES_PATH}phone_icon.svg`}/>
                  <a href="tel:(877) 355-3585">(877) 355-3585</a>
                </div>
                <span>Call us for assistance</span>
            </div>
          </div>
          <div className={styles.containerfeatured}>
            <h6>Featured In</h6>
            <div>
              <img src={`${CONSTANTS.STATIC_IMAGES_PATH}forbes.svg`}/>
              <img src={`${CONSTANTS.STATIC_IMAGES_PATH}TNW.svg`}/>
              <img src={`${CONSTANTS.STATIC_IMAGES_PATH}chicago.svg`}/>
              <img src={`${CONSTANTS.STATIC_IMAGES_PATH}Mashable.svg`}/>
            </div>
          </div>
      <Footer/>
    </div>
  )
}

export default Howitworks
