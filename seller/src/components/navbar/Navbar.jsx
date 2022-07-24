import React, { useState } from 'react'
import { useLocation, Link, NavLink } from 'react-router-dom';
import { navLinks } from '../../configs/navbar';
import Notice from './Notice';

const Navbar = () => {
    const notice =[];
    //const notice = [{ type: 'warning', msg: 'Your account is not active ', link: '#' }, { type: 'info', msg: 'Your account is not active know more ', link: '#' }]

    const [open, setOpen] = useState(false);
    return (
        <>
            <nav className='bg-white shadow-lg'>
                <div className='flex items-center font-medium justify-start h-12 '>
                    <div className='z-50 px-4 py-2 md:w-auto w-full flex justify-between'>
                        <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYcAAACBCAMAAAAc7oblAAAAw1BMVEX////ZTjtTVFbZTDlGR0lNTlDXQSvsrqfaVUPNzc24uLlKS02EhYa0tLTw8PBUVVbWOyKcnZ7YRjHXPyhBQkXXRC/++fn98/LttrDWOR/cXk377Or4+Pijp6flhXlWX1/zzMj33dn11dHr6+vc3N1yc3QWKCjKyspgYWP65+Thd2rpnZV9fX/yyMLhem3qpJvnlYveals0QEDvvbdmbm4iMTGNjY7dZVVGUVEAHR06RkYqNzc5Oj0RJSXljILbWUjVMRNBO+ZQAAANU0lEQVR4nO1caXuizBLVgLjggiDuGhVcYzTGbDOZN7n//1dd1q7qpkET18n0+TDPCE1r6lB7QSolICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIPADUG8QXPqn/NPIanqA9KV/yj+NrCIFyF36p/zTyCppH4KHi0LwcB0QPFwHBA/XAcHDdUDwcB0QPFwHBA/XAcHDdUDwcB0QPFwHBA/XgavkIf/y9HZbLHUv/TvOiCvkwb799X47fvr967Fw6Z+SKtv5fN62yyf/ol08dIajwWA07Ozap+Gtm9d3fmFnOHA3jO865Z+fe+7f3Z2+/Vfdud2esEqFEFP2XBnOUSpolZaVjFyr1WQ5UykWIlzYcB31+0vMN5HvnpILX8azPL1ZEg+d5iqtG4amGYaeWzXjuRjdtXXFXafor+smDczMMLtwNtS8hZ/9LXdD6/3RDv7bvZ2UYr/za7D+yASsQAvkXG0GR6fjmpy5IXAIGTOiK8Ge+HA1PFxbBjv9oXYvzGqymqntzcP9pmXokhSclRz5Le65f2Mzp5mwzjQo/A+EvX1tKdSGrdUoutvTcz5VnUx+/Xdrp7q/349lEZZEpjVWIeCUTGifzmqIhICK2hMlvJJMTuHDVTVcX/QP5MN1FeeDPfM/7cvDoK0FEgNIWnsQ+QOHbSOyEMEMDdA2F12na5shs509GadSvefqtPr+2/lTJ71E6e6PKRFaKJ4QZRC4bPmHui81loSAwxd0IfBQwfvF85CxnP8H37YfD/WPFle4UuuD8QDNKF3UBQEPjRV/naTd0fv1/nNu197E+ef22UqVH2+/IOskdFUizAwdhyGGAkNizWAxA3UGCvplHmq2RS7Zi4dOzoy9vz8pq57VklggPAyl2A2NDeWyl++Wqw89u/D46Mjr9vexgtcXsD60YSqyFsu6iZgkQCYTeq9v8JBH1nEPHoZ6wj0uSXO4ettKpiHgYaQkbKinMbO3j84N13t8nry/ub/06d36vugp5ImpyWDjkuoiIXucW/EkeFffhBrxdbs0BoL34KGTRINLBJFbx4SVkm6a0Qs9HoaJHiStfyKNGD/6+lB99mLWp8dj6UO3AqLEx4Ef1ednlqAN3tVhUPVlHrCe7cFDO1FqjtzaoY/o6+SgqffX676is4sdHhrSrg0X6K+Y5H3/8OhqQvf32xEoYORzI2MZIHvlHa5CFORKTlYdyBQ1cpDVfJ0HhN08PCiUjAzFNBWDutOVD3/lHJyDdudx0+ijixUnbNWcuLWPfYMUboi/xFiT3zOdOHdl71fB4cL5M/KTl9SxYMONj9JDZJYq9CpXkupyaluWPS2q2HPX7EN5yKh/mOg5wsMQe15dWW2H8/nwvm9iwWl+tLkmAjay4X4f5JiZvXewTd3jDR21uXc33K6w6kgGuIg3Rw8KTqBefnoqOzGTnToaZkQMKF1j2Rlj21EkzqmMI9nM2Dv2XR7U2mxZrTJ+L8LDBslH64Mr6CNxSht/qUR/dlFPhweNpn/kE/kQ7YO4gvnCQHz3yQbTyS1xCS8TJtY/CD0IGoFdsFbeQawOMlWuKKAz/vXf4yGjshR4YHkYIuloTbyyiYhouYlwndggAyXadyYt23vYUDKohHyNNtQgCOtN3nwxWcvJ027p7g8I3pFhAu/tKckLimiYKiMiwo+4vsWDvOQHgCwPH6AONA0UEZ6M58ADijxH4Srp1fu8AXXQmLrIGigyUTpXep/cVnu98fOkeNzKN9gcYphsIiOvptEFGtSIZ3phUsHv8CDH+TuGhzrENmafXQvhkaQ4bnkIl6LAkyiU9Ol+nIOslTt2wwX5MiqbL1ff3ifPb8Uj+gYPBTBM4U3ZgyDKPYRElolUtsrAgxftfIOHwLNwwPAwIomZZEbKoQ1IF1wLAzyk43nYEiWScpGiOIoJDLrQVLaOlb/hTcEwhWWrGS2hHs90EYDR8s5+g4da7K3F8AAhkPkQXfxAFMK1I2CXkHVPDWi7BHYOYirAipxVmtGzRweUMIL7EsyS7w3AcvEkBk7cq0R9I4+LVQeWhxXc8ZyaNNy/boRUJ9UKLEQieN9Pg3tQOO0GcOL6R7z4joYpa5jg/veLf9zQlgDlGu7pr/OgxrdTGB5ILi1JnMXgPST36SFi3pHJ6ShU3NogYaxvphh0CA+BVz8tumyn4emGkhkImn/nAk2V7nd4iDdLDA9I0BveasgY9Dq6FuL/OqQfnrHqEA3i3vD1T6AySYDHArHwvpwtYmj8MkMZeOAmLlAuVa1v8RDv9BgeSP1Cj0RLLkjE5Hlx5LfNjWfGBm1Cg1806hC/b0aiJRdArLS7tX04UPbshkNsRw144Lnpw3mIxmAENA+NHWKDyFVx7/Y1ztGkxUZHhVUv1cM8rHkbnpkHSNu8ZJm45UDsp9aHvXlA+sD1m4gHz+u+ovKf+6wjfApqgdfGAwhpjOPYwHAj/7DkXT0m5yvl0/IA/mHBW72g/EOqEVsi19v+Bbv8Q5ty/KcHBKo3ZZTXhdHRjngJFUHi/TQJjg/gYVe8lKNO13ORdkN484etHeg9SG3Ohh3i6bmnTwAi6doUzIwcpnWQP8gcl4qKgK6bj5nXWB6DB6g0KOwkhYMhZNtumLmKaTpL2oIYGWK5JJMzOjYAdeHGBccHEZ4jJbqm4QKqrypnUASdpfNpzAMozSE83IED4NhzUktN6062DY0Fyjo5HnsLl4BHMbbRDSHbVjjZ9ikARdcnYqMgWYBEL2hWY6A0zpsoAB4ySHlQ0n0ADwMk24jjBC/uCRVudd0wdf+lBLrSes3iC5uQqUUtT8dITN9PAjAbpMYHjQY0XRONXKvopCt44AE3WqvEtB3CQwNEHS0wgTqkjQZUUiWpMcx+bF4dY7V4aM7pa1C9NVpgQgVc/SzhUgoXXYkBUUE8y/iJijzqP3jR1JQ3AQL6dhAPqQXqPzDtAtAVL5oiZim5NAQhlcTUVFEt1rNz50EXd5opebmY4n4cRUQeXedPQCG3LZORXDTtcRAPWNgKRcQIzQq4FK3DK5NNexPleiZFBG5ca5yo4EQosnMx1FzZDJ9AvrqH5wf8oBbFwDcZnzMbD90cxAPVTjbuwFqsUa7s1exIiZyfeodAnSWHWaCs/oAmLfnZymmQZ2dXqXEmrBA3aqVnO+66a/dmuLcZzP2hdMLhbNwr9cbUgM1hPFDjFUp6PXSoqA/XOTxN03IVZQ1toETbnkUdb0nJZd1nJOqjuzQOelvn8tIpRnyucGiHvKTURa3JlYpco2yZuuQtzaiqSmvaYTyg3oxnSgwjl1YME4emfgkPCNPbg0YdgfkKXPxwmNCcbzToDZVzNB8IqrSHYIrR5Yj/YEGkWZCT1x3GQ4OdjpSYeTxJ92pL0I5zEjc9h7DpZ7G5nzOj3ux+jpk7V7DkwabFx1YwInaLAfDWPSkPqVHyOKqkBUZkwxT5ALpitFHWtmMamXHfpwf2xZzEeZpIBH6MpcrVndDuHcqDI7ekeW9tECwbJYlX0l4hk0h8SILwejb0qCHJaCEpL8eOGmeoYLbLWSGXwqrswTykBvEaIRkDsuxDiVvlrUQVqgQidOnM2oDbcDENUHsWY3HkGc2aHVmnjklgfDgPqXnb4ApNMtooX66/xj5d4i1G4zTDNH+pZGx2Pop6fKAhVpn/bHC1xjE5Ks+G0aojj7tk+OAIPLhDj7yHGQy6+FdfxRW+PZgoDKo/tHgbnmVcJgIU6KgxorGqGdo6ZWo3Vc5ae4aUS/VG8qd/Mh7kgAeHqwCRR1UB5P2tJtOI6TxI1LS9pBv6HVu6zkKBKASWcwvf6/MP05DoDdPry7y8F92h3L6bh25hWanV/OcfarVZcRoz5Dkdy94quXbz4oVSVjFAoD12kSB+TvR+1Q8QieEb21Va0xTTgaJpudV9JLp8IDNjht72kTOQbzHpikdnu0i3DG9DQ9M+P6Ibngmxz8ox6FrTUtVBKZ84XWjl3VUF+3TvoajPB9k7B9kB700BZPBYMpvhjV3vNEGLouWK+vDe27A5mrOnzgdc6vsB7/BokDuf7t3N6Wmz6wN6Uvd4jxtdDsTFs52KLelMmJeyPIkoJk6x/nUg+TSbiHWAh2t8iT6qIPGmMv46kOENtr/TMa9aHyBq5Q0D/HWAJ+FIpSMAGevgDt9cHOi9Jj/BLEHHiJ15IX1s/rDyhWH9MLOEZp3o5w/hUcfkTt2FAGZJPtbbnS4LeHZIMtbgCO4hfzhnm21vjKlh4R8A/MS7In00R8PO6H79Cfn0uWYlvwSLfrjqJ2CBXwmgK4ah0f3OFv/9ZZdFCaYpE2safxGGyS9fOm/XeV9AM079ATUNH82kjpx5jcESNks/oaYRIBvbZ5OMM44kfQHQE2XnJv9qjDivU0x7DZ4zzW9/FRU16Mmold2L/yZs2y2T7v64HaOHC3Q794G1JD2Zn5E8IAzXG8WJlPyGkRM0Sf3tNZb3/gXU54Nt02sYNQdXqgkCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICPxv/B5quE9yyll39AAAAAElFTkSuQmCC'
                            className='md:cursor-pointer h-9' alt='' />
                        <div className='text-3xl md:hidden' onClick={() => setOpen(!open)}>
                            <i className={`bx bx-${open ? 'x' : 'menu'}`}></i>
                        </div>
                    </div>

                    {/* Desktop Menu */}

                    <ul className='hidden md:flex font-base capitalize items-center h-full'>

                        <NavLinks />
                    </ul>

                    {/* Mobile Menu */}

                    <ul className={`
                md:hidden bg-white absolute font-base w-full h-full bottom-0 py-14 duration-500 ${open ? 'left-0' : 'left-[-100%]'}
                `}>
                        <NavLinks />
                    </ul>
                </div>
            </nav>
            {notice.map((el, i) => {

                return <Notice type={el.type} msg={el.msg} key={i} link={el.link} />
            })}
            
        </>

    )
}


const NavLinks = () => {
    const [heading, setHeading] = useState("");

    let pathname = useLocation().pathname;
    pathname = pathname.split('/')[1];




    return (
        <>
            {
                navLinks.map((links, i) => {

                    let link = links.link;
                    link = link.split('/')[1]

                    return (
                        <div key={i} className='hidden md:flex h-full'>
                            <div className='relative hidden md:flex items-center px-2 py-2 md:py-0 w-full justify-start md:h-full text-sm text-left md:cursor-pointer group'>
                                <div className={`flex font-bold items-center h-full justify-center ${(pathname === link ? ' text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-blue-600 border-b-2 border-white hover:border-blue-600')}`}>
                                    <NavLink to={links.link} className={`${links.submenu && 'pl-1'} flex items-center h-full`}>{links.title}</NavLink>
                                    {links.submenu && <i className='bx bx-chevron-down'></i>}

                                </div>

                                {
                                    links.submenu &&
                                    <div className='z-50 shadow-md rounded-md absolute top-12 left-0 hidden group-hover:md:block hover:md:block'>
                                        <div className='bg-white px-3 py-3 space-y-2 whitespace-nowrap'>
                                            {
                                                links.submenu.map((subItem, index) => {
                                                    return <div key={index}>
                                                        <NavLink className='text-xs border-b-2 h-4 border-white hover:border-blue-600' to={subItem.link}>{subItem.title}</NavLink>
                                                    </div>

                                                })
                                            }
                                        </div>
                                    </div>
                                }

                            </div>
                            {/* Mobile Menu */}
                            <div key={`${1000 - i}`} className='md:hidden'>
                                {links.submenu
                                    ?
                                    <NavLink to={links.link} onClick={() => setHeading(links.title)} className={pathname === link ? 'flex font-bold p-3 items-center h-full text-white bg-red-600' : 'flex font-bold p-3 items-center h-full text-gray-900 bg-wite'}>{links.title} {links.submenu && <i className='bx bx-chevron-down'></i>}</NavLink>
                                    :
                                    <div onClick={() => setHeading(links.title)} className={pathname === link ? 'flex font-bold p-3 items-center h-full text-white bg-red-600' : 'flex font-bold p-3 items-center h-full text-gray-900 bg-wite'}>{links.title} {links.submenu && <i className='bx bx-chevron-down'></i>}</div>


                                }
                                {
                                    links.submenu &&
                                    <div className={`md:hidden group ${heading === links.title ? 'flex' : 'hidden'}`}>
                                        <div className='group-hover:block hover:block'>
                                            {
                                                links.submenu.map((subItem, index) => {
                                                    return <div key={index}>

                                                        <NavLink className='py-1 pl-7 hover:text-blue-600 font-semibold' to={subItem.link}>{subItem.title}</NavLink>
                                                    </div>

                                                })
                                            }
                                        </div>
                                    </div>
                                }

                            </div>

                        </div>

                    )
                })
            }
        </>
    )
}


export default Navbar