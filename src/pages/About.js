import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import PJH from '../images/PJH.jpg'
import LSS from '../images/LSS.jpg'
import KDH from '../images/KDH.jpg'
import LSK from '../images/LSK.jpg'
import SCW from '../images/SCW.jpg'

export default function Mappage() 
{
  
    return (
        <>
        <nav>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About Us</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
          <Link to="/login"><li>Login</li></Link>
        </ul>
        </nav>
        <header className="header">
            <div className="left_area">
                <h3>Life <span>Today</span></h3>
            </div>
        </header>
        <div class="team-section">
            <h1>Our Team</h1>
            <span class="border"></span>
            <div class="ps">
                <a href="#p1"><img src={LSS} alt=""/></a>
                <a href="#p2"><img src={PJH} alt=""/></a>
                <a href="#p3"><img src={KDH} alt=""/></a>
                <a href="#p4"><img src={LSK} alt=""/></a>
                <a href="#p5"><img src={SCW} alt=""/></a>
            </div>

            <div class="section" id="p1">
                <span class="name">Lee Sang Seok</span>
                <span class="border"></span>
                <p>
                정신나갈거같애정신나갈거같애정신나갈거같애정신나갈거같애
                정신나갈거같애정신나갈거같애정신나갈거같애정신나갈거같애
                정신나갈거같애정신나갈거같애정신나갈거같애정신나갈거같애
                정신나갈거같애정신나갈거같애정신나갈거같애정신나갈거같애
                정신나갈거같애정신나갈거같애정신나갈거같애정신나갈거같애
                </p>
            </div>

            <div class="section" id="p2">
                <span class="name">Park Jae Hyun</span>
                <span class="border"></span>
                <p>
                아 타릭 따먹고 싶다...아 타릭 따먹고 싶다...아 타릭 따먹고 싶다...
                아 타릭 따먹고 싶다...아 타릭 따먹고 싶다...아 타릭 따먹고 싶다...
                아 타릭 따먹고 싶다...아 타릭 따먹고 싶다...아 타릭 따먹고 싶다...
                아 타릭 따먹고 싶다...아 타릭 따먹고 싶다...아 타릭 따먹고 싶다...
                아 타릭 따먹고 싶다...아 타릭 따먹고 싶다...아 타릭 따먹고 싶다...
                </p>
            </div>

            <div class="section" id="p3">
                <span class="name">Kim Dong Hyun</span>
                <span class="border"></span>
                <p>
                sexsexsexsexsexsexsexsexsexsexsexsexsexsexsexsexsexsex
                sexsexsexsexsexsexsexsexsexsexsexsexsexsexsexsexsexsex
                sexsexsexsexsexsexsexsexsexsexsexsexsexsexsexsexsexsex
                sexsexsexsexsexsexsexsexsexsexsexsexsexsexsexsexsexsex
                sexsexsexsexsexsexsexsexsexsexsexsexsexsexsexsexsexsex
                sexsexsexsexsexsexsexsexsexsexsexsexsexsexsexsexsexsex
                </p>
            </div>

            <div class="section" id="p4">
                <span class="name">Lee Sung Keun</span>
                <span class="border"></span>
                <p>
                로리콘은범죄로리콘은범죄로리콘은범죄로리콘은범죄로리콘은범죄
                로리콘은범죄로리콘은범죄로리콘은범죄로리콘은범죄로리콘은범죄
                로리콘은범죄로리콘은범죄로리콘은범죄로리콘은범죄로리콘은범죄
                로리콘은범죄로리콘은범죄로리콘은범죄로리콘은범죄로리콘은범죄
                로리콘은범죄로리콘은범죄로리콘은범죄로리콘은범죄로리콘은범죄
                </p>
            </div>

            <div class="section" id="p5">
                <span class="name">Son Chang Won</span>
                <span class="border"></span>
                <p>
                동현님사랑해요동현님사랑해요동현님사랑해요동현님사랑해요동현님사랑해요
                동현님사랑해요동현님사랑해요동현님사랑해요동현님사랑해요동현님사랑해요
                동현님사랑해요동현님사랑해요동현님사랑해요동현님사랑해요동현님사랑해요
                동현님사랑해요동현님사랑해요동현님사랑해요동현님사랑해요동현님사랑해요
                동현님사랑해요동현님사랑해요동현님사랑해요동현님사랑해요동현님사랑해요
                </p>
            </div>
        </div>
        </>
    );
}
