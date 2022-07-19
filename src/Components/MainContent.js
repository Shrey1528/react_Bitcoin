import React from 'react'
import styled from 'styled-components';
import Navigation from './Navigation';
import SmallHeading from './SmallHeading';
import blockchain from '../img/bchain.png'
import CtaButton from './CtaButton';

function MainContent() {
  return (
    <MainContentStyled>
        <Navigation />
        <div className="content">
            <div className="left">
                <SmallHeading title={'All Digital Currencies in One Place'} identifier={'Before'}/>
                <h1>
                     All NFTs You need in One 
                     <br/> Marketplace The Best Place to 
                     <br/> Collect , Buy and Sell <span className='GradientText'>Awesome NFTs</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, culpa rerum! Necessitatibus odio blanditiis, 
                  dignissimos non explicabo, sit vel ratione aspernatur nemo sed fuga laboriosam ut neque soluta consectetur labore?
                </p>
                <div className="btns-con">
                  <CtaButton name={'discover more'} />
                  <CtaButton name={'get help'} />
                </div>
            </div>
            <div className="right">
              <img src={blockchain} alt="" />
            </div>
        </div>
    </MainContentStyled>
  )
}

const MainContentStyled = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    width: 80%;
    height: 100%;
    transform: translate(-50%);
    .content{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      height: 100%;
      width: 100%;
      .btns-con{
        margin-top: 2rem;
      }
      .left{
        display: flex;
        justify-content: center;
        flex-direction: column;
      }
      h1{
        padding: 1.8rem 0;
      }
      .right{
        img{
          position: absolute;
          right: -11%;
          bottom: -1%;
          width: 60%;
        }
      }
    }
`;

export default MainContent;