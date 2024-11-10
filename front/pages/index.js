import PrivateRoute from '@/components/PrivateRoute';
import Layout from '../components/Layout';
import Image from 'next/image';
import { bannerImg, featuredCatImg, offerSlider, productData } from '@/constant/dummydata';
import SlickSlider from '@/components/Home/SlickSlider';
import Link from 'next/link';
import { FaHeart } from "react-icons/fa6";
import Counter from '@/components/Home/Counter';

const BannerSliderOpt = {
  desk : 1,
  tab : 1,
  mob : 1,
  arrow: false
}
const HomePage = () => {
  return (
    <PrivateRoute>
      <Layout pageClass="home">
        <section className='banner'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='banner-content'>
                  <h2 className='align-center'>
                    <Image className='img-fluid' src={'http://localhost:3000/images/logo.png'} width={'100'} height={'70'} />
                    <span>Stylish </span>
                  </h2>
                  <h2>
                    Ecommerce UI Kit
                  </h2>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium molestias facilis ullam maiores explicabo accusantium, delectus sed culpa laboriosam unde!</p>
                  <p>20+ Designed Template </p>
                  <button className='btn-link'><Link href={'/'} >Scroll Down</Link></button>
                </div>
              </div>
              <div className='col-md-6'>
                <SlickSlider option={BannerSliderOpt}>
                  {
                    bannerImg.map((el, index) => (
                      <img src={`${el}/banner${index}.png`}  />
                    ))
                  }
                </SlickSlider>
                <Image className='img-fluid' src={''} />
              </div>
            </div>
          </div>
        </section>
        <section className='all-featured'>
          <div className='container'>
            <h2>All featured</h2>
            <ul className='scroll-none'>
              {featuredCatImg.map((el, index) => (
                <li key={index}>
                  <Image src={`${el.imagepath}/f${index+1}.png`} width={'150'} height={'150'} />
                  <p>{el.name}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className='container offers'>
            <SlickSlider>
              {offerSlider.map((el, index) => (
                <div key={index}>
                  <div key={index} className='slider-box' style={{background: `${el.bgColor}`}}>
                    <div className='content'>
                      <p className='title'>{el.title}</p>
                      <p className='desc'>{el.desc}</p>
                      <button className='btn-link'><Link href={el.link}>{el.btntext}</Link></button>
                    </div>
                    <img src={`${el.imagepath}/o${index}.png`} />
                  </div>
                </div>
              ))}
            </SlickSlider>
          </div>
        </section>
        <section className='deal-of-day'>
          <div className='container'>
            <div className='flex-box'>
              <div>
                <h3>Deal of the Day
                </h3>
                <p className='light'><Counter hours={22} minutes={55} seconds={10}/></p>
              </div>
              <div className='text-end'>
                <button className='btn-link'><Link href={'/'}>View All</Link></button>
              </div>
            </div>
          </div>
        </section>
        <section className='product-cards'>
          <div className='container'>
          <h2>Product Listing</h2>
            <div className='row'>
              {
                productData.map((el, index) => (
                  <div className='col-md-3'>
                    <div className='card'>
                      <FaHeart className='wishlist'/>
                      <img src={`${el.src}/f${index+1}.png`} />
                      <p className='title'>{el.title}</p>
                      <p className='desc'>{el.desc}</p>
                      <p className='price'><span></span>{el.price} <strike>{el.price_old}</strike></p>
                      <button className='btn-link'><Link href={'/'}>{el.btn_text}</Link></button>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
      </Layout>
    </PrivateRoute>
  );
};

export default HomePage;
