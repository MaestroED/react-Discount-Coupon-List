import couponsData from '../coupons.json'
import Coupon from './Coupons'



function Content() {

const couponsArray = []
Object.keys(couponsData).map(key =>  {
    couponsArray.push(couponsData[key])
})


    return (
        <>
      
             {couponsArray.map(coupon => (
                <Coupon coupon={coupon} key={coupon.id} /> ))}
                
        </>
    )
}

export default Content
