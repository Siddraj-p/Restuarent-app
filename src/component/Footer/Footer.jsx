import {useRef} from 'react'
import "./Footer.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { assets } from '../../assets/assets';

const Footer = () => {
    let left =  useRef()
    let center =  useRef()
    let right=  useRef()

    gsap.registerPlugin(ScrollTrigger);

useGSAP(()=>{
    // const paragraphs = gsap.utils.toArray(".p");
const tl = gsap.timeline({
         scrollTrigger: {
          trigger:left.current,
          start: 'top 90%',
        //   markers:true,
          toggleActions: 'play none none reverse',
        },
    })
//        tl.from(left.current, {
//         opacity: 0,
//         y: 100,
//         duration: 0.7,
//         stagger:0.1,
//         delay: 0.5,
// })

    //   tl.from(center.current,{
    //     opacity: 0,
    //     x:60,
    //     duration: 1,
    //     stagger:0.1,
    //     delay: 0.5,
       
    //   })
      tl.from([left.current,right.current,center.current],{
        opacity: 0,
        x: -60,
        duration: 0.4,
        stagger:0.1,
        delay: 0.5,
      })
    }
    )

    return (
    <div className='footer' id='footer' >
        <div className="footer-content">

            <div className='footer-content-left' ref={left}>
                <img src={assets.logo} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quam illo quasi eum, ipsum voluptates dolor repellendus perferendis, repellat fugiat architecto repudiandae, alias reiciendis enim harum quaerat saepe at. Adipisci.    </p>
                <div className="footer-social-icons">
              <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
            </div>
            </div>

            <div className='footer-content-center' ref={center}>
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About-us</li>
          <li>Delivery</li>
                    <li>Privacy-policy</li>
                </ul>
            </div>
            <div className='footer-content-right' ref={right}>
                <h2>Get in Touch</h2>
                <ul>
                    <li>+913764747478</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>

      <hr />
      <p className="footer-copy-right">copy right 2024</p>
    </div>
  )
}

export default Footer