import React from 'react';
import classes from './About.module.css';
import image1 from "../../assests/images/two.jpg"
import image2 from "../../assests/images/one.jpg"
import image3 from "../../assests/images/three.jpg"
import image4 from "../../assests/images/four.jpg"
import image5 from "../../assests/images/thr.jpg"
import image6 from "../../assests/images/ele.jpg"
import image7 from "../../assests/images/ten.jpg"

import { Parallax } from 'react-parallax';

const About = ()=> {
  return (
    <div style={{ textAlign: 'center' }}>
      <Parallax className={classes.image} bgImage={ image1 } strength={400}>
        <div style={{ height: '800px' }}>
        </div>
      </Parallax>
     
  <section className={[classes.section, classes.sectionLight].join(' ')} >
    
     <div className={classes.wrapper}>
     <h2 className={classes.H2}>Your Memories</h2><br/>
    <p className={classes.Para}>
    MY GOAL IS FOR YOU TO SEE MORE THAN JUST A BEAUTIFUL IMAGE.  I WANT YOU TO FEEL.  I WANT YOU TO HEAR. THE REALNESS, THE LAUGHS, THE EMOTION + CONNECTION. BECAUSE THESE ARE YOUR MEMORIES. 
    </p>
    </div>
  </section>

      <Parallax className={classes.image} bgImage={ image2 } blur={{ min: -1, max: 5 }} strength={500}>
        <div style={{ height: '900px' }}>
          {/* <div style={inlineStyle}>Dinamic blur</div> */}
        </div>
      </Parallax>
      <section className={[classes.section, classes.sectionDark].join(' ')}>
    <h2 className={classes.H2}>Our trend and style</h2><br />
    <p className={classes.Para}>
    Our photographic and video graphic work remain splendid forever. Our professionals and conceptualize and snap stills in an alluring style. <br />
<br />
We are good at candid photography with which the bride and grooms are being shot without their knowledge candid photography captures the real life situations. The beautiful and gregarious smile and blushes of bride can be visually recorded without any artificiality. <br />
<br />
For us photography has been a passion and their bread and butter. Hence we have been able to deliver the trendiest photo compression’s which you can possess as a treasure trove for your photography.
    </p>
  </section>
      <Parallax className={classes.image} bgImage={ image3 } strength={200} >
        <div style={{ height: '1000px'}}>
        </div>
      </Parallax>
      <section className={[classes.section, classes.sectionLight].join(' ')}>
      <h2 className={classes.H2}>A good wedding photographer is the key to the Brightest memories of the wedding day</h2>
    <br />
      <p className={classes.Para}>
     
     Wedding is a significant event. Each couple wants to keep memories of him as long as possible and brighter. High-quality and beautiful photos will help with this.  I have been shooting weddings since 2011. And to this day, I am pleased to offer you the services of a photographer for a wedding in Coimbatore, Tamilnadu . Having many years of experience, I know everything about how to better organize the shooting, feeling the people and their needs, I select the most suitable images and angles so that the photograph can convey all the charm of these exciting moments.
          </p>
  </section>
  
      <Parallax  className={classes.image}
        bgImage={ image4 }
        strength={-200}
      >
        <div style={{ height: '1000px' }}>
          {/* <div style={inlineStyle}>Render prop</div> */}
        </div>
      </Parallax>
      <section className={[classes.section, classes.sectionDark].join(' ')}>
      <h2 className={classes.H2}>CONNECTION</h2>
    <br />
      <p className={classes.Para}>
     
      I have the chance to capture a glimpse of life through emotive and connected photographs. When you have a session with me we will take our time and enjoy the moment, and explore the surroundings. My passion is to create art that tells your story, and yours is to just be you. 
<br /> <br />
I am down with the messy and the real happiness that comes from hand holding, making meals together and capturing the moments of those that matter most. Our lives are a collection of creating family heirlooms.
          </p>
  </section>
  <Parallax className={classes.image}
        bgImage={ image5 }
        strength={600}
      >
        <div style={{ height: '1000px' }}>
          {/* <div style={inlineStyle}>Render prop</div> */}
        </div>
      </Parallax>
      <section className={[classes.section, classes.sectionDark].join(' ')}>
    <h2 className={classes.H2}>Our Perfection and Quality</h2><br/>
    <p className={classes.Para}>
    Our photo stills are a visual feast for your eyes. Our albums are cynosure of all eyes. Our professionalism is based on perfection. Our perfection propels us to hand over the best quality photo stills of the most important occasions of your life span to you.<br/>
Our photography and videography assignment resemble a teaser of an interesting movie. You can relish the stills frame by frame. We have spread our wings to all important town in Tamil Nadu. <br/>
We perform Best Marriage photography in India and the entire national territory and Marriage destinations. We offer professional solutions with our packs ranging from the full report to gallery online, high quality video, Best Marriage albums and photo books.<br/>
For your nuptials, this company offers you various techniques and issues to make your Marriage album are really extraordinary.

Establish a good connection with the lovers is the top priority for a good result. Will consider all factors to achieve the final work satisfy and fulfill your expectations. A unique opportunity that will feature several sessions: pre-wedding, home of the groom, ceremony and more.
    </p>
  </section>
  <Parallax className={classes.image}
        bgImage={ image6 }
        strength={-600}
      >
        <div style={{ height: '1000px' }}>
          {/* <div style={inlineStyle}>Render prop</div> */}
        </div>
      </Parallax>
      <section className={[classes.section, classes.sectionLight].join(' ')}>
     <div className={classes.twocol} style={{borderRadius:'12px'}}>
      <h2 className={classes.H2} style={{fontSize:'30px', textAlign:'center', fontWeight:'bolder', color:'black'}}>Who Are We?</h2><br/>
      <p className={classes.Para}>Yogi Photography has been in the photography field for well over two decades. The team members work with an amazing zeal.
      You name any type of camera we can flaunt it.
      Yogi photography has been a front runner in the field of photography and videography ever since it was intercepted. Yogi photography has been rendering the photography services to Tiruppur and adjacent areas.
      Our photography services encompass wedding photography, candid photography, fashion and style photography, get- together photography, industrial photography, corporate photography, children photography etc.
      Yogiphotography epitomizes grace elegance and everlasting beauty. Our professional team brings a certain verse and flair to the happy moments of your life. Our vibrant team has emerged the most eminent one in the world of professional photography.
      The stills snapped by our professionals have been dazzling and enchanting for long you may please rest assured your wedding photographic stills and stills of other important occasions would continue to radiate brilliance and sterling felicity!</p>
      
      </div>
  
     <div className={classes.twocol} style={{borderRadius:'12px'}}> 
     <h2 className={classes.H2} style={{fontSize:'30px', textAlign:'center', fontWeight:'bolder', color:'black'}}>What Are Our Services?</h2><br/>
     
     <br />
        <ul>
          <li>Wedding Photography</li>
          <li>Candid Photography</li>
          <li>Baby Photography</li>
          <li>corporate Events</li>
          <li>Pre and Post Wedding Photography</li>
        </ul>
        <br /> <br />
        In Yogi Photography always try to engage the taste of the couple, so the company has varied packages to suit all needs.<br /> The professionalism  together with its great service not forgets to get such a unique day in their lives.
     
     </div>  
     </section>
  <Parallax className={classes.image}
        bgImage={ image7}
        strength={200}
      >
        <div style={{ height: '1000px' }}>
          {/* <div style={inlineStyle}>Render prop</div> */}
        </div>
      </Parallax>
    </div>
  );
}
export default About;