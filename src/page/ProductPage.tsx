import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { getall, read } from '../api/categories';
import { list } from '../api/product';
import { Categories } from '../types/catrgories';
import { IProduct } from '../types/product';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

type PropsProductPage = {
    product: IProduct[];
}
type PropsCategory = {
    category: Categories[];
}

const ProductPage = (props: PropsProductPage) => {
    const [product, setProduct] = useState<IProduct[]>([]);
    const [category, setCategory] = useState<Categories[]>([]);
    const [categoriesPD, setcategoriesPD] = useState<Categories | IProduct[]>([])
    const { slug } = useParams()
    useEffect(() => {
        const getCategory = async () => {
            const { data } = await getall()
            setCategory(data)
        }
        getCategory()
    }, [slug])
    useEffect(() => {
        const getCatePd = async () => {
          const { data: { products } } = await read(slug)
          setcategoriesPD(products)
        }
        getCatePd()
      }, [slug])
    return (
        <div className=''>
            <div className='bg-[#FFFFFF] py-4'>
                <div className='flex justify-between  max-w-7xl m-auto'>
                    <div className=''>
                        <div className='flex'>
                            <div className='pr-4'>
                                <i className="fa-solid fa-mug-saucer"></i>
                            </div>
                            <div>
                                <h3>ABOUT US</h3>
                            </div>
                        </div>
                        <h1 className='text-left text-3xl'>THERE IS ALL ABOUT CAFENOD COFFEE HOUSE</h1>
                        <p className='text-left'>From a cultural standpoint, coffeehouses largely serve as centers of social interaction:</p>
                        <p className='text-left'> the coffeehouse provides patrons with a place to congregate, talk, </p>
                        <p className='text-left'>read, write, entertain one another, or pass the time,</p>
                        <p className='text-left'><i className="fa-solid fa-check pr-4"></i>THERE IS ALL ABOUT OUR CAFENOD COFFEE SHOPS</p>
                        <p className='text-left'>The coffee is brewed by first roasting the green coffee beans over hot coals in a brazier.</p>
                        <p className='text-left'>Once the beans are roasted each participant is given an opportunity to sample</p>
                        <p className='text-left'><i className="fa-solid fa-check pr-4"></i>THIS IS FOLLOWED BY THE GRINDING</p>
                        <p className='text-left'>The coffee is brewed by first roasting the green coffee beans over hot coals in a brazier.</p>
                        <p className='text-left'>Once the beans are roasted each participant is given an opportunity to sample the aromatic</p>
                        <p className='text-left'>smoke by wafting it towards them.</p>
                        <div className='flex'>
                            <div className='pr-20'>
                                <button className='bg-[#c7a17a] p-4 pr-8 pl-8  rounded-lg hover:bg-[black] hover:text-white'>LEARN MORE</button>
                            </div>
                            <div className='flex'>
                                <div className='pr-3'>
                                    <img src="https://demo.cmssuperheroes.com/themeforest/cafenod/wp-content/uploads/2021/03/team-ceo.png" alt="" />
                                </div>
                                <div>
                                    <h3>RASALINA DE WILLAMSON</h3>
                                    <h4>FOUNDER and CO</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href=""><img src="https://demo.cmssuperheroes.com/themeforest/cafenod/wp-content/uploads/2021/03/banner-right-2.png" className="pr-4 w-[500px] " alt=""></img></a>
                </div>
            </div>
            <div className='bg-[#ECEAE3] phanhngu'>
                <div className='py-4 max-w-7xl m-auto '>
                    <h3><i className="fa-solid fa-mug-saucer"></i> OUR SPECIAL MENU</h3>
                    <h1 className='text-4xl text-center'>CAFENOD COFFEE HOUSE</h1>
                    <Tabs className='text-center'>
                        <TabList className="">
                            {category.map((item, index,slug) => {
                                return <Tab key={index} ><div className='font-bold'>{item.name}</div></Tab>
                            })}
                        </TabList>
                        <TabPanel>
                            {props.product.map((item, index,slug) => {
                                return <div className=' py-3' key={index}>
                                    <div className='bg-white p-3 flex justify-between rounded-lg'>
                                        <a href=""><img src="https://demo.cmssuperheroes.com/themeforest/cafenod/wp-content/uploads/2021/03/coffee-3.jpg" alt="" className='w-[130px] rounded-lg' /></a>
                                        <div className='m-auto text-left '>
                                            <h3 className='text-xl font-bold pr-3'>{item.name}</h3>
                                            <p>The coffee is brewed by first roasting the green coffee beans over hot coals in a brazier.</p>
                                            <p > Once the beans are roasted each participant is given an</p>
                                        </div>
                                        <span className='bg-[#c7a17a] p-1 rounded-lg'></span>

                                        <p className='m-auto text-2xl text-[#c7a17a] pl-3'><samp>$</samp>{item.price}</p>
                                    </div>
                                </div>
                            })}
                        </TabPanel>
                        <TabPanel>
                        {props.product.map((item, index,slug) => {
                                return <div className=' py-3' key={index}>
                                    <div className='bg-white p-3 flex justify-between rounded-lg'>
                                        <a href=""><img src="https://demo.cmssuperheroes.com/themeforest/cafenod/wp-content/uploads/2021/03/coffee-3.jpg" alt="" className='w-[130px] rounded-lg' /></a>
                                        <div className='m-auto text-left '>
                                            <h3 className='text-xl font-bold pr-3'>{item.name}</h3>
                                            <p>The coffee is brewed by first roasting the green coffee beans over hot coals in a brazier.</p>
                                            <p > Once the beans are roasted each participant is given an</p>
                                        </div>
                                        <span className='bg-[#c7a17a] p-1 rounded-lg'></span>
                                        <p className='m-auto text-2xl text-[#c7a17a] pl-3'><samp>$</samp>{item.price}</p>
                                    </div>
                                </div>
                            })}
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                    </Tabs>





                </div>
            </div>
            <div className="flex m-auto">
                <a href=""><img src="https://demo.cmssuperheroes.com/themeforest/cafenod/wp-content/uploads/2021/03/bg-video.jpg" className="py-4" alt=""></img></a>
                <div className='p-4'>
                    <h2 className='text-left'> <i className="fa-solid fa-mug-saucer"></i>CLIENT TESTIMONIAL</h2>
                    <h1 className='text-3xl text-left'>DIVINE AROMA IN EVERY SINGLE CUP</h1>
                    <p className='text-left'>From a cultural standpoint, coffeehouses largely serve as centers of social interaction: </p>
                    <p className='text-left'>the coffeehouse provides patrons with a place to congregate, talk, read, write, entertain one another, or pass the time,</p>
                    <p className='text-left' >From a cultural standpoint, coffeehouses largely serve as centers of social interaction:</p>
                    <p className='text-left'> the coffeehouse provides patrons with a place to congregate,</p>
                </div>
                <div className='flex'>
                    <a href=""><img src="https://demo.cmssuperheroes.com/themeforest/cafenod/wp-content/uploads/2021/03/banner-right-3.png" className='pr-10' alt="" /></a>
                </div>
            </div>
            <div className='bg-[#ECEAE3] '>
                <div className='py-4 '>
                    <p className='text-left max-w-7xl m-auto '><i className="fa-solid fa-mug-saucer "></i> SPECIAL ONLINE SHOP</p>
                </div>
                <div className='flex justify-between max-w-7xl m-auto'>
                    <h2 className='text-3xl font-bold'>OUR POPULAR PRODUCT</h2>
                    <button className='border-4 p-3 rounded-lg hover:bg-[#c7a17a]'>SEE ALL PRODUCT</button>
                </div>
                <div className=' max-w-7xl grid grid-cols-3 gap-3 m-auto py-8'>
                    {props.product.map((item, index) => {
                        return <div className='p-6 bg-white rounded-lg' key={index}>
                            <div>
                                <div><NavLink to={`${item._id}`}><img src="https://demo.cmssuperheroes.com/themeforest/cafenod/wp-content/uploads/2021/04/product-1-600x503.png" className='m-auto bg-slate-50 rounded-lg ' alt="" /></NavLink></div>
                                <div className='text-left py-3 font-bold text-base hover:font-semibold'>{item.name}</div>
                                <div className='flex justify-between'>
                                    <div className='text-left bg-[#c7a17a] p-3 rounded-lg'>{item.price}</div>
                                    <button className='border-4 p-2 rounded-lg hover:bg-[#c7a17a]'>SELECT OPTIONS</button>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>

            <div className='hi4'>
                <div className='flex justify-between max-w-7xl m-auto  '>
                    <a href=""><img src="https://demo.cmssuperheroes.com/themeforest/cafenod/wp-content/uploads/2021/03/banner-left.png" className="pr-4 w-[500px] " alt=""></img></a>

                    <div>
                        <div className='flex'>
                            <div className='pr-4'>
                                <i className="fa-solid fa-mug-saucer"></i>
                            </div>
                            <div>
                                <h3>ABOUT US</h3>
                            </div>
                        </div>
                        <h1 className='text-left text-3xl'>OUR CLIENT SAY SOMETHING ABOUT CAFENOD</h1>
                        <p className='text-left'>Been to this stunning place many times over the last years. Tonight I have to say, it was</p>
                        <p className='text-left'> good as it ever was. Superb food, exceedingly good staff. Lovely atmosphere staff were</p>
                        <p className='text-left'>excellent, very attentive and polite. We felt taken care of! Food came quickly and was hot</p>
                        <p className='text-left'>and delicious.</p>
                        <p className='text-left font-bold'>RASALINA DE WILLAMSON <i className="fa-solid fa-star pl-4"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></p>
                        <p className='text-left'>Once the beans are roasted each participant is given an opportunity to sample</p>
                        <p className='text-left'>FOUNDER and CO</p>
                    </div>
                </div>
            </div>
            <div>
                <a href=""><img src="https://res.cloudinary.com/fptpolytechnic/image/upload/v1644757361/banner2_j8syqq.jpg" className="py-4" alt=""></img></a>
            </div>
            <div className='backgroud'>
                <h3><i className="fa-solid fa-mug-saucer"></i> NEWS and BLOG</h3>
                <h2 className='text-3xl'>LATEST NEWS and BLOG</h2>
                <div className='max-w-7xl grid grid-cols-3 gap-3 m-auto py-8'>
                    <div className='p-3 bg-white rounded-lg' >
                        <div><a href=""><img src="https://demo.cmssuperheroes.com/themeforest/cafenod/wp-content/uploads/2021/03/image-post-6-600x438.jpg" className='m-auto bg-slate-50 rounded-lg ' alt="" /></a></div>
                        <a className='hover:text-[#c7a17a]' href=""> <h3 className='text-2xl  text-left'>Excepteur sint occaecat cupidatat</h3></a>
                        <p className='text-left'> Often the subject of controversy among athletes and followers of a healthy lifestyle is disputes about the admissibility of drinking coffee before or after training.…</p>
                        <h2 className='text-left'><a className=' text-[#c7a17a]' href="">READ MORE</a></h2>
                    </div>
                    <div className='p-3 bg-white rounded-lg'>
                        <div><a href=""><img src="https://demo.cmssuperheroes.com/themeforest/cafenod/wp-content/uploads/2021/03/image-post-5-600x438.jpg" className='m-auto bg-slate-50 rounded-lg ' alt="" /></a></div>
                        <a className='hover:text-[#c7a17a]' href=""> <h3 className='text-2xl  text-left'>Meatloaf strip steak frankfurter, porchetta</h3></a>
                        <p className='text-left'> Often the subject of controversy among athletes and followers of a healthy lifestyle is disputes about the admissibility of drinking coffee before or after training.…</p>
                        <h2 className='text-left'><a className=' text-[#c7a17a]' href="">READ MORE</a></h2>
                    </div>
                    <div className='p-3 bg-white rounded-lg'>
                        <div><a href=""><img src="https://demo.cmssuperheroes.com/themeforest/cafenod/wp-content/uploads/2021/03/image-post-4-600x438.jpg" className='m-auto bg-slate-50 rounded-lg ' alt="" /></a></div>
                        <a className='hover:text-[#c7a17a]' href=""> <h3 className='text-2xl  text-left'>Capicola pork loin meatball, rump chicken</h3></a>
                        <p className='text-left'> Often the subject of controversy among athletes and followers of a healthy lifestyle is disputes about the admissibility of drinking coffee before or after training.…</p>
                        <h2 className='text-left'><a className=' text-[#c7a17a]' href="">READ MORE</a></h2>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductPage